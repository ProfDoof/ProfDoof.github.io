import { formatDateString } from './formatDateString.js';

export default function formatDate(dateString: string | undefined) {
    if (dateString === undefined) {
        return '';
    }

    return `<span class="date">${formatDateString(dateString)}</span>`;
}