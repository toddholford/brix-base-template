function tabLoader() {
    const loadTabPanesScript = document.createElement('script');
    const loadTabsScript = document.createElement('script');
    const loadTabOptionsScript = document.createElement('script');
    const loadTabListsScript = document.createElement('script');
    const loadTabDisplaysScript = document.createElement('script');

    loadTabPanesScript.setAttribute('src', '../../js/scripts/loadTabPanes.js');
    loadTabPanesScript.async = false;
    loadTabsScript.setAttribute('src', '../../js/scripts/loadTabs.js');
    loadTabsScript.async = false;
    loadTabOptionsScript.setAttribute('src', '../../js/scripts/loadTabOptions.js');
    loadTabOptionsScript.async = false;
    loadTabListsScript.setAttribute('src', '../../js/scripts/loadTabLists.js');
    loadTabListsScript.async = false;
    loadTabDisplaysScript.setAttribute('src', '../../js/scripts/loadTabDisplays.js');
    loadTabDisplaysScript.async = false;

    document.body.appendChild(loadTabPanesScript);
    document.body.appendChild(loadTabsScript);
    document.body.appendChild(loadTabOptionsScript);
    document.body.appendChild(loadTabListsScript);
    document.body.appendChild(loadTabDisplaysScript);
}
document.onload = tabLoader();