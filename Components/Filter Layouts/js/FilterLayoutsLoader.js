function formFieldLoader() {
    const formFieldScript = document.createElement('script');

    formFieldScript.setAttribute('src', 'js/formFieldTabs.js');
    formFieldScript.async = false;

    document.body.appendChild(formFieldScript);
}
formFieldLoader();