import resumeTemplate from './resume.hbs';
import resumeCss from './style.css';
export const render = (resume) => {
    return resumeTemplate({
        css: resumeCss,
        resume: resume
    });
};
//# sourceMappingURL=theme.js.map