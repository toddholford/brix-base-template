function loadTabs(tabs) {
    
    const componentTabs = document.getElementById("componentTabs");
    let tabArrayIndex = 0;

    //create tabs
    tabs.forEach(tab => {

        //remove whitespaces
        const tabId = tab.split(" ").join("");

        //create page elements
        const tabListItem = document.createElement("li");
        const tabButton = document.createElement("button");

        //add classes, id's, and attributes
        tabListItem.classList.add("nav-item");
        tabButton.classList.add("nav-link","text-bg-dark");
        tabButton.id = (tabId + "-tab");
        tabButton.type = "button";
        tabButton.setAttribute("data-bs-toggle", "tab");
        tabButton.setAttribute("data-bs-target", ("#"+tabId));

        //set active tab
        if (tabArrayIndex < 1) {
            tabButton.classList.add("active");
            tabArrayIndex++;
        }

        //add text
        tabButton.innerText = tab;

        //append elements
        componentTabs.appendChild(tabListItem);
        tabListItem.appendChild(tabButton);

    });
}