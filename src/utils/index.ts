export const getParsedBirthday = (date: Date): string => {
    const month = date.getMonth() < 9 ? `0${date.getMonth()}` : date.getMonth();
    return `${date.getDate()}.${month}.${date.getFullYear()}`;
};
