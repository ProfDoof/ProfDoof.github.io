import { formatDateString } from './formatDateString.js';
export default function formatDate(dateString, prefix) {
    if (dateString === undefined) {
        return '';
    }
    prefix = prefix === undefined ? '' : prefix;
    return `<span class="date">${prefix}${formatDateString(dateString)}</span>`;
}
//# sourceMappingURL=formatDatePrefixed.js.map