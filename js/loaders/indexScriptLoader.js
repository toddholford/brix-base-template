function indexScriptLoader() {
    
    const loadTabsScript = document.createElement('script');
    const loadTabOptionsScript = document.createElement('script');
    const indexSideNavScript = document.createElement('script');
    const componentSideNavScript = document.createElement('script');
    const indexTopNavScript = document.createElement('script');
    const componentTopNavScript = document.createElement('script');
    const pagesScript = document.createElement('script');

    loadTabsScript.setAttribute('src', 'js/loadTabs.js');
    loadTabOptionsScript.setAttribute('src', 'js/loadTabOptions.js');
    indexSideNavScript.setAttribute('src', 'js/components/indexSideNav.js');
    componentSideNavScript.setAttribute('src', 'js/components/componentSideNav.js');
    indexTopNavScript.setAttribute('src', 'js/components/indexTopNav.js');
    componentTopNavScript.setAttribute('src', 'js/components/componentTopNav.js');
    pagesScript.setAttribute('src', 'js/dataArrays/pages.js');

    document.body.appendChild(pagesScript);
    document.body.appendChild(loadTabsScript);
    document.body.appendChild(loadTabOptionsScript);
    document.body.appendChild(indexSideNavScript);
    document.body.appendChild(indexTopNavScript);

}

document.onload = indexScriptLoader();