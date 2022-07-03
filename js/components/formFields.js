function loadFormFieldsPage() {

    //get retrieving element
    const componentViewDiv = document.getElementById("componentView");

    //clear current child elements
    componentViewDiv.replaceChildren();

    //create page elements
    const cardDiv = document.createElement("div");
    const cardRowDiv = document.createElement("div");
    const cardColImgDiv = document.createElement("div");
    const cardImg = document.createElement("img");
    const cardColContentDiv = document.createElement("div");
    const cardHeaderH5 = document.createElement("h5");
    const cardNavtabHeaderDiv = document.createElement("div");
    const navTabUnorderedList = document.createElement("ul");
    const navTabListItem1 = document.createElement("li");
    const listItem1Link = document.createElement("a");
    const navTabListItem2 = document.createElement("li");
    const listItem2Link = document.createElement("a");
    const cardBodyDiv = document.createElement("div");

    //add classes, id's, and attributes
    cardDiv.classList.add("card","text-center","text-bg-dark");
    cardRowDiv.classList.add("row","g-0");
    cardColImgDiv.classList.add("col-md-4");
    cardImg.classList.add("img-fluid","rounded-start");
    cardImg.src = "imgs/LPFNe.jpg";
    cardColContentDiv.classList.add("col-md-8");
    cardHeaderH5.classList.add("card-header");
    cardNavtabHeaderDiv.classList.add("card-header");
    navTabUnorderedList.classList.add("nav","nav-tabs","card-header-tabs");
    navTabListItem1.classList.add("nav-item");
    listItem1Link.classList.add("nav-link");
    listItem1Link.href = "#";
    navTabListItem2.classList.add("nav-item");
    listItem2Link.classList.add("nav-link");
    listItem2Link.href = "#";
    cardBodyDiv.classList.add("card-body");

    //add text
    cardHeaderH5.innerText = "Form Fields";
    listItem1Link.innerText = "Basic Fields";
    listItem2Link.innerText = "Text Fields";

    //append elements
    componentViewDiv.appendChild(cardDiv);
    cardDiv.appendChild(cardRowDiv);
    cardRowDiv.appendChild(cardColImgDiv);
    cardColImgDiv.appendChild(cardImg);
    cardRowDiv.appendChild(cardColContentDiv);
    cardColContentDiv.appendChild(cardHeaderH5);
    cardColContentDiv.appendChild(cardNavtabHeaderDiv);
    cardNavtabHeaderDiv.appendChild(navTabUnorderedList);
    navTabUnorderedList.appendChild(navTabListItem1);
    navTabListItem1.appendChild(listItem1Link);
    navTabUnorderedList.appendChild(navTabListItem2);
    navTabListItem2.appendChild(listItem2Link);
    cardColContentDiv.appendChild(cardBodyDiv);
}