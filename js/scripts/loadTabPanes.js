function loadTabPanes(panes) {
    
    const componentTabPanes = document.getElementById("componentTabPane");
    let paneArrayIndex = 0;

    //create tabs
    panes.forEach(pane => {

        //remove whitespaces
        const paneId = pane.split(" ").join("");

        //create page elements
        const tabPaneDiv = document.createElement("div");
        const tabPaneRowDiv = document.createElement("div");
        const tabPaneOptionsDiv = document.createElement("div");
        const OptionsListDiv = document.createElement("div");
        const tabPaneColumnDiv = document.createElement("div");
        const componentDisplayPanesDiv = document.createElement("div");

        //add classes, id's, and attributes
        tabPaneDiv.classList.add("tab-pane");
        tabPaneDiv.id = paneId;
        tabPaneDiv.tabIndex = 0;
        tabPaneDiv.setAttribute("role","tabpanel");
        tabPaneDiv.setAttribute("aria-labelledby",paneId+"-tab");
        tabPaneRowDiv.classList.add("row");
        tabPaneOptionsDiv.classList.add("col-4");
        OptionsListDiv.classList.add("list-group");
        OptionsListDiv.id = paneId+"-tabOptionsList";
        OptionsListDiv.setAttribute("role","tablist");
        tabPaneColumnDiv.classList.add("col");
        componentDisplayPanesDiv.classList.add("tab-content");
        componentDisplayPanesDiv.id = paneId+"ComponentDisplayPanes";

        //set active tab
        if (paneArrayIndex < 1) {
            tabPaneDiv.classList.add("active");
            paneArrayIndex++;
        }

        //append elements
        componentTabPanes.appendChild(tabPaneDiv);
        tabPaneDiv.appendChild(tabPaneRowDiv);
        tabPaneRowDiv.appendChild(tabPaneOptionsDiv);
        tabPaneOptionsDiv.appendChild(OptionsListDiv);
        tabPaneRowDiv.appendChild(tabPaneColumnDiv);
        tabPaneColumnDiv.appendChild(componentDisplayPanesDiv);

    });
}