import resumeTemplate from './resume.hbs';
import resumeCss from './style.css';

export const render = (resume: object) => {
    return resumeTemplate({
        css: resumeCss,
        resume: resume
    });
}
