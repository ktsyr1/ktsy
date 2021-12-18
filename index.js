export const StringToUrl = (string) => {
    return string
        .toLocaleLowerCase()
        .replaceAll('&', '-')
        .replaceAll(' ', '-')
}
export default ''