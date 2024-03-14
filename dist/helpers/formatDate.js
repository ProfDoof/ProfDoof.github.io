export default function formatDate(dateString) {
    const dateStrArr = dateString.split('-');
    const [a, b, c] = dateStrArr;
    if ((a !== "") && (b !== "") && (c !== ""))
        return new Date(dateString).toLocaleDateString('en', {
            month: 'short',
            year: 'numeric',
            day: 'numeric',
        });
    if ((a !== "") && (b !== ""))
        return new Date(dateString).toLocaleDateString('en', {
            month: 'short',
            year: 'numeric',
        });
    return dateStrArr;
}
//# sourceMappingURL=formatDate.js.map