function validateUrl(url) {
    const regexp = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gi;
    if (regexp.test(url)) {
        return true;
    }
    return false;
}


export { validateUrl }