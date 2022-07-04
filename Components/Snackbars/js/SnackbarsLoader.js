function selectorLoader() {
    const selectorScript = document.createElement('script');

    selectorScript.setAttribute('src', 'js/selectorTabs.js');
    selectorScript.async = false;

    document.body.appendChild(selectorScript);
}
selectorLoader();