function loadTabOptions(tabs, ...tabOptions) {
    
    let tabOptionsArrayIndex = 0;
    let currentOptionsArrayIndex = 0;

    tabs.forEach(tab => {

        //remove whitespaces
        const tabId = tab.split(" ").join("");
        const tabListId = tabId+"-tabOptionsList";

        currentOptionsArrayIndex = 0;
        let tabOptionsArray = tabOptions[currentOptionsArrayIndex];
        let currentTabOptions = tabOptionsArray[tabOptionsArrayIndex];

        currentTabOptions.forEach(tabOption => {

            const tabOptionsList = document.getElementById(tabListId);
    
            const tabOptionId = tabOption.split(" ").join("");

            //create page elements
            const tabOptionLink = document.createElement("a");
    
            //add classes, id's, and attributes
            tabOptionLink.classList.add("list-group-item","list-group-item-action");
            // tabOptionLink.id = (tabId + "-tab");
            tabOptionLink.href = "#"+tabOptionId+"TabOption"+currentOptionsArrayIndex;
            tabOptionLink.setAttribute("data-bs-toggle", "list");
    
            //set active tab
            if (currentOptionsArrayIndex < 1) {
                tabOptionLink.classList.add("active");
            }
    
            //add text
            tabOptionLink.innerText = tabOption;
    
            //append elements
            tabOptionsList.appendChild(tabOptionLink);
    
            currentOptionsArrayIndex++;
        });

        tabOptionsArrayIndex++;
    });

    //create navlink for each page
    
}