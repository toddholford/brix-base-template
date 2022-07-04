function loadTabDisplays(tabs, ...tabOptions) {

    let tabOptionsArrayIndex = 0;
    let currentOptionsArrayIndex = 0;

    tabs.forEach(tab => {

        //remove whitespaces
        const tabId = tab.split(" ").join("");

        currentOptionsArrayIndex = 0;
        let tabOptionsArray = tabOptions[currentOptionsArrayIndex];
        let currentTabOptions = tabOptionsArray[tabOptionsArrayIndex];

        currentTabOptions.forEach(tabOption => {
    
            const tabOptionId = tabOption.split(" ").join("");

            const componentDisplayPaneDiv = document.getElementById(tabId+"ComponentDisplayPanes");

            const formFieldDisplayPaneDiv = document.createElement('div');
            const zeroHeightComponentBoxDiv = document.createElement('div');
            const zeroHeightDisplayAdjustDiv = document.createElement('div');
        
            formFieldDisplayPaneDiv.classList.add("tab-pane");
            formFieldDisplayPaneDiv.id = tabOptionId+"TabOption"+currentOptionsArrayIndex;
            formFieldDisplayPaneDiv.setAttribute("role","tabpanel");
            zeroHeightComponentBoxDiv.classList.add("zeroHeightComponentBox");
            zeroHeightDisplayAdjustDiv.classList.add("zeroHeightDisplayAdjust");
    
            //set active tab
            if (currentOptionsArrayIndex < 1) {
                formFieldDisplayPaneDiv.classList.add("active");
            }
    
            componentDisplayPaneDiv.appendChild(formFieldDisplayPaneDiv);
            formFieldDisplayPaneDiv.appendChild(zeroHeightComponentBoxDiv);
            zeroHeightComponentBoxDiv.appendChild(zeroHeightDisplayAdjustDiv);
    
            currentOptionsArrayIndex++;
        });

        tabOptionsArrayIndex++;
    });

}