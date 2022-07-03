function loadTopNav() {

    //get retrieving element
    const topNavigationViewDiv = document.getElementById("topNavigation");

    //clear current child elements
    topNavigationViewDiv.replaceChildren();

    //create page elements
    const topNavContainerDiv = document.createElement("div");
    const topNavContainerFluidDiv = document.createElement("div");
    const topNavbarBrandLink = document.createElement("a");

    //add classes, id's, and attributes
    topNavContainerDiv.classList.add("container");
    topNavContainerFluidDiv.classList.add("container-fluid");
    topNavbarBrandLink.classList.add("navbar-brand");
    topNavbarBrandLink.href = "../../index.html";

    //add text
    topNavbarBrandLink.innerText = "BRIX";

    //append elements
    topNavigationViewDiv.appendChild(topNavContainerDiv);
    topNavContainerDiv.appendChild(topNavContainerFluidDiv);
    topNavContainerFluidDiv.appendChild(topNavbarBrandLink);
}

loadTopNav();