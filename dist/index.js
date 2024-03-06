import { program } from "@commander-js/extra-typings";
import { promises as fs } from 'fs';
import * as path from 'path';
// @ts-ignore
import { render, validate } from 'resumed';
import { Result } from "@badrap/result";
async function htmlToPdfBuffer(html) {
    const puppeteer = await import("puppeteer");
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: "domcontentloaded" });
    return page.pdf({
        margin: { top: '100px', right: '50px', bottom: '100px', left: '50px' },
        printBackground: true,
        format: 'A4',
    });
}
async function generateResumeHtml(theme, resume) {
    const themeLib = await import(theme);
    const rendered = render(resume, themeLib);
    if (typeof rendered === "string") {
        return Result.ok(rendered);
    }
    return rendered.then((str) => Result.ok(str));
}
async function loadResume(resumePath) {
    if (!(await validate(resumePath))) {
        return Result.err(new Error(`${resumePath} is not a valid resume.json file by the jsonresume schema`));
    }
    return Result.ok(JSON.parse(await fs.readFile('resume.json', 'utf-8')));
}
var RenderMode;
(function (RenderMode) {
    RenderMode["HTML"] = "html";
    RenderMode["PDF"] = "pdf";
})(RenderMode || (RenderMode = {}));
async function renderResume({ outName, theme, resumePath, renders }) {
    let resumeResult = await loadResume(resumePath);
    if (resumeResult.isErr) {
        return Result.err(resumeResult.error);
    }
    const resume = resumeResult.value;
    let htmlResult = await generateResumeHtml(theme, resume);
    if (htmlResult.isErr) {
        return Result.err(htmlResult.error);
    }
    const resumeHtml = htmlResult.value;
    let outputPaths = [];
    for (let render of renders) {
        const buffer = await render.bufferGenFunc(resumeHtml);
        const outPath = `${outName}.${render.mode}`;
        await fs.writeFile(outPath, buffer);
        outputPaths.push(`${render.mode.toUpperCase()} file written to ${outPath}`);
    }
    return Result.ok(outputPaths.join(', '));
}
async function htmlToBuffer(html) {
    return Buffer.from(html);
}
let funcMap = {
    'pdf': htmlToPdfBuffer,
    'html': htmlToBuffer,
};
let modeMap = {
    'pdf': RenderMode.PDF,
    'html': RenderMode.HTML,
};
function getRendersFromModes(modes) {
    if (modes.length === 0) {
        return [];
    }
    return modes.map((val) => {
        let mode = modeMap[val.toLowerCase()];
        if (!(mode in funcMap)) {
            throw "Invalid render mode";
        }
        return {
            mode: mode,
            bufferGenFunc: funcMap[mode]
        };
    });
}
program.command('validate')
    .argument('<file>', 'Resume file to validate')
    .action(async (targetFile) => { await validate(targetFile); });
program
    .command('render')
    .option('-o, --output-name <output>', 'Name of the output file. This does not respect extension. That is only set through mode')
    .option('-r, --render <mode...>', 'Render mode [PDF, HTML]')
    .argument('<file>', 'Resume file to render')
    .argument('<theme>', 'Theme module to render. Attempts to import via a dynamic import so if module resolution fails, this fails. Make sure that it is installed')
    .action(async (targetFile, theme, options) => {
    await renderResume({
        outName: options.outputName ? options.outputName : path.basename(targetFile),
        theme: theme,
        resumePath: targetFile,
        renders: getRendersFromModes(options.render ? options.render : [])
    });
});
program.parse();
//# sourceMappingURL=index.js.map