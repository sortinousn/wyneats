export const parseStringifiedJSON = (item, defaultItem) => {
    try {
        return JSON.parse(item);
    } catch {
        return defaultItem;
    }
}