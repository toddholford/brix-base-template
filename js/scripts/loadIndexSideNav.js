function loadSideNavigation() {

    //get retrieving element
    const sideNavigationViewDiv = document.getElementById("sideNavigation");

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
        navLink.href = "Components/" + page + "/" + linkText + "Page" + ".html";

        //add text
        navLink.innerText = page;

        //append elements
        sideNavigationViewDiv.appendChild(navPageDiv);
        navPageDiv.appendChild(navLink);

    });
}

loadSideNavigation();
