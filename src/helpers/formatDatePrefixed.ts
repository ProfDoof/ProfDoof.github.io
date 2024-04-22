import { formatDateString } from './formatDateString.js';

export default function formatDate(dateString: string | undefined, prefix: string | undefined) {
    if (dateString === undefined) {
        return '';
    }

    prefix = prefix === undefined ? '' : prefix;

    return `<span class="date">${prefix}${formatDateString(dateString)}</span>`;
}