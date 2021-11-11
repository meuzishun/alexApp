function getTextContent(elem) {
    if (elem.textContent !== '') {
        return elem.textContent;
    } else {
        getTextContent(elem.firstChild);
    }
}