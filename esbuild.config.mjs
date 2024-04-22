import * as esbuild from 'esbuild';
import handlebarsPlugin from 'esbuild-plugin-handlebars';

await esbuild.build({
    entryPoints: ["./src/index.ts"],
    outdir: "./dist/",
    bundle: true,
    platform: "node",
    format: "esm",
    packages: "external",
    loader: {
        ".css": "text"
    },
    plugins: [
        handlebarsPlugin({
            additionalHelpers: {
                "formatDate": "../helpers/formatDate.ts",
                "formatDateRange": "../helpers/formatDateRange.ts",
                "formatDatePrefixed": "../helpers/formatDatePrefixed.ts"
            },
            additionalPartials: {
                "awards": "./partials/awards.hbs",
                "basics": "./partials/basics.hbs",
                "certificates": "./partials/certificates.hbs",
                "education": "./partials/education.hbs",
                "interests": "./partials/interests.hbs",
                "languages": "./partials/languages.hbs",
                "projects": "./partials/projects.hbs",
                "publications": "./partials/publications.hbs",
                "references": "./partials/references.hbs",
                "skills": "./partials/skills.hbs",
                "volunteer": "./partials/volunteer.hbs",
                "work": "./partials/work.hbs",
            }
        })
    ]
})