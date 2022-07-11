function indexScriptLoader() {

    const pagesScript = document.createElement('script');
    const indexSideNavScript = document.createElement('script');
    const indexTopNavScript = document.createElement('script');

    pagesScript.setAttribute('src', 'js/scripts/sideNavigationPages.js');
    indexSideNavScript.setAttribute('src', 'js/scripts/loadIndexSideNav.js');
    indexTopNavScript.setAttribute('src', 'js/scripts/loadIndexTopNav.js');

    document.body.appendChild(pagesScript);
    document.body.appendChild(indexSideNavScript);
    document.body.appendChild(indexTopNavScript);

}

document.onload = indexScriptLoader();