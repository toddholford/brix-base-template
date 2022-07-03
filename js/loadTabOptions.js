function loadTabOptions(tabOptions, tabs) {
    
    let tabOptionsArrayIndex = 0;

    tabs.forEach(tab => {

        //remove whitespaces
        const tabId = tab.split(" ").join("");
        const tabListId = tabId+"-tabOptionsList";
        tabOptionsArrayIndex = 0;

        tabOptions.forEach(tabOption => {

            const tabOptionsList = document.getElementById(tabListId);
    
            //create page elements
            const tabOptionLink = document.createElement("a");
    
            //add classes, id's, and attributes
            tabOptionLink.classList.add("list-group-item","list-group-item-action");
            // tabOptionLink.id = (tabId + "-tab");
            tabOptionLink.href = "#"+tab+"TabOption"+tabOptionsArrayIndex;
            tabOptionLink.setAttribute("data-bs-toggle", "list");
    
            //set active tab
            if (tabOptionsArrayIndex < 1) {
                tabOptionLink.classList.add("active");
            }
    
            //add text
            tabOptionLink.innerText = tabOption;
    
            //append elements
            tabOptionsList.appendChild(tabOptionLink);
    
            tabOptionsArrayIndex++;
        });
    });

    //create navlink for each page
    
}