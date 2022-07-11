function loadPage(component) {
    
    const currentPageHeader = document.getElementById("componentHeader");
    const passedComponent = component;

    const componentPages = passedComponent.componentPages;

    const currentPage = componentPages.find(p => p.pageTitle == currentPageHeader.innerText);
    const currentPageTitle = currentPage.pageTitle;
    
    const componentPanes = currentPage.componentPanes;

    const currentPane = componentPanes.find(p => p.paneTitle == "Input");
    const currentPaneTitle = currentPane.paneTitle;

    const currentTabs = currentPane.componentTabs;

    const currentTab = currentTabs.find(t => t.tabTitle == "Input");
    const currentTabTitle = currentTab.tabTitle;

    const componentOptions = currentTab.componentOptions;
    const componentListItems = currentTab.componentListItems;

    const componentOption = componentOptions.find(c => c.optionType == "Top");
    const currentOptionType = componentOption.optionType;
    const componentListItem = componentListItems.find(l => l.itemDefinition == "Basic Input Field");
    const currentItemDefinition = componentListItem.itemDefinition;

    const componentOptionsList = componentOption.optionsList;
    const componentItemIdentifiers = componentListItem.itemOptionIdentifiers;

    console.log(currentPageTitle+"|"+currentPaneTitle+"|"+currentTabTitle+"|"+currentOptionType+"|"+currentItemDefinition+"|"+componentOptionsList+"|"+componentItemIdentifiers);

}