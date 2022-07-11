function loadSideNavigation() {

    //get retrieving element
    const sideNavigationViewDiv = document.getElementById("sideNavigation");
    const componentHeader = document.getElementById("componentHeader");

    //clear current child elements
    sideNavigationViewDiv.replaceChildren();

    //create navlink for each page
    navPages.forEach(page => {

        //remove whitespaces
        const linkText = page.split(" ").join("");

        //create page elements
        const navPageDiv = document.createElement("div");
        const navLink = document.createElement("a");

        //add classes, id's, and attributes
        navPageDiv.classList.add("col-12");
        navLink.href = "../" + page + "/" + linkText + "Page" + ".html";

        //check if current page is active
        if (page == componentHeader.innerText) {
            navLink.classList.add("activeSideNavItem");
        }

        //add text
        navLink.innerText = page;

        //append elements
        sideNavigationViewDiv.appendChild(navPageDiv);
        navPageDiv.appendChild(navLink);

    });
}

loadSideNavigation();
