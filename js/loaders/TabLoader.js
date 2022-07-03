function tabLoader() {
    const loadTabPanesScript = document.createElement('script');
    const loadTabsScript = document.createElement('script');
    const loadTabOptionsScript = document.createElement('script');

    loadTabPanesScript.setAttribute('src', '../../js/loadTabPanes.js');
    loadTabPanesScript.async = false;
    loadTabsScript.setAttribute('src', '../../js/loadTabs.js');
    loadTabsScript.async = false;
    loadTabOptionsScript.setAttribute('src', '../../js/loadTabOptions.js');
    loadTabOptionsScript.async = false;

    document.body.appendChild(loadTabPanesScript);
    document.body.appendChild(loadTabsScript);
    document.body.appendChild(loadTabOptionsScript);
}
tabLoader();