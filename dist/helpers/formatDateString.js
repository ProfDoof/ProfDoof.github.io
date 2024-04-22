export function formatDateString(dateString) {
    return new Date(dateString).toLocaleDateString('en', {
        dateStyle: 'short'
    });
}
//# sourceMappingURL=formatDateString.js.map