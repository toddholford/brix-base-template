function navLoader() {
    const pagesScript = document.createElement('script');
    const componentSideNavScript = document.createElement('script');
    const componentTopNavScript = document.createElement('script');

    pagesScript.setAttribute('src', '../../js/scripts/sideNavigationPages.js');
    pagesScript.async = false;
    componentSideNavScript.setAttribute('src', '../../js/scripts/loadComponentSideNav.js');
    componentSideNavScript.async = false;
    componentTopNavScript.setAttribute('src', '../../js/scripts/loadComponentTopNav.js');
    componentTopNavScript.async = false;

    document.body.appendChild(pagesScript);
    document.body.appendChild(componentSideNavScript);
    document.body.appendChild(componentTopNavScript);
}
document.onload = navLoader();