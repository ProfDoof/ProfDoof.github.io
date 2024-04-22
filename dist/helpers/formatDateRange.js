import { formatDateString } from "./formatDateString.js";
export default function formatDateRange(startDate, endDate) {
    const out = [];
    const hasStart = startDate !== undefined && startDate !== "";
    const hasEnd = endDate !== undefined && endDate !== "";
    if (!hasStart && !hasEnd) {
        return "";
    }
    out.push('<span class="date">');
    if (hasStart) {
        out.push(formatDateString(startDate), " &ndash; ");
    }
    if (hasEnd) {
        out.push(formatDateString(endDate));
    }
    else {
        out.push('Present');
    }
    out.push('</span>');
    return out.join('');
}
//# sourceMappingURL=formatDateRange.js.map