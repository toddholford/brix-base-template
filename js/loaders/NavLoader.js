function navLoader() {
    const pagesScript = document.createElement('script');
    const componentSideNavScript = document.createElement('script');
    const componentTopNavScript = document.createElement('script');

    pagesScript.setAttribute('src', '../../js/dataArrays/pages.js');
    pagesScript.async = false;
    componentSideNavScript.setAttribute('src', '../../js/components/componentSideNav.js');
    componentSideNavScript.async = false;
    componentTopNavScript.setAttribute('src', '../../js/components/componentTopNav.js');
    componentTopNavScript.async = false;

    document.body.appendChild(pagesScript);
    document.body.appendChild(componentSideNavScript);
    document.body.appendChild(componentTopNavScript);
}
navLoader();