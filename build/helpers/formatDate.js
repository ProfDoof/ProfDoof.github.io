import { formatDateString } from './formatDateString.js';
export default function formatDate(dateString) {
    if (dateString === undefined) {
        return '';
    }
    return `<span class="date">${formatDateString(dateString)}</span>`;
}
//# sourceMappingURL=formatDate.js.map