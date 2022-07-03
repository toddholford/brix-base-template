function formFieldLoader() {
    const formFieldScript = document.createElement('script');
    const inputFieldOptionsScript = document.createElement('script');
    const textAreaOptionsScript = document.createElement('script');

    formFieldScript.setAttribute('src', 'js/formFieldTabs.js');
    formFieldScript.async = false;
    inputFieldOptionsScript.setAttribute('src', 'js/inputFieldOptions.js');
    inputFieldOptionsScript.async = false;
    textAreaOptionsScript.setAttribute('src', 'js/textAreaOptions.js');
    textAreaOptionsScript.async = false;

    document.body.appendChild(formFieldScript);
    document.body.appendChild(inputFieldOptionsScript);
    document.body.appendChild(textAreaOptionsScript);
}
formFieldLoader();