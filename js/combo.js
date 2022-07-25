let tabArray = activeTabsArray;
let optionsArray = activeTabOptionsArray;
let optionTypesArray = activeTabOptionTypesArray;
let componentListItemsArray = activeComponentListItemsArray;
// let combo = [];
let newIframeTabPane = null;
let newIframe = null;
let newOption = null;
let isCombo = null;
let iFrameBox = null;

function arrayCompare(_arr1, _arr2) {
    if (
      !Array.isArray(_arr1)
      || !Array.isArray(_arr2)
      || _arr1.length !== _arr2.length
      ) {
        return false;
      }
    
    // .concat() to not mutate arguments
    const arr1 = _arr1.concat().sort();
    const arr2 = _arr2.concat().sort();
    
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
         }
    }
    
    return true;
}

function updateComboGenerated(buttonClicked) {

    tabArray.forEach(tab => {
        let combo = [];

        newIframeTabPane = document.getElementById(tab.innerText.split(" ").join("")+"IframeTabPane");
        newIframe = document.getElementById(tab.innerText.split(" ").join("")+"Iframe");

        if ((buttonClicked.id === (tab.innerText.toLowerCase().split(" ").join("")+"-tab")) && !newIframeTabPane.classList.contains("active")) {
            // textareaIframeTabPane.classList.remove("active");
            newIframeTabPane.classList.add("active");
        }

        if (tab.classList.contains("active")) {
            
            let filteredOptionsArray = optionsArray.filter(option => option.includes(tab.innerText.split(" ").join("")));
            let currentTabListItemsArray = componentListItemsArray[tabArray.indexOf(tab)];

            for (let t = 0; t < filteredOptionsArray.length; t++) {
        
                    newOption = document.getElementById(filteredOptionsArray[t]);
            
                    if (newOption.checked && !combo.includes(newOption.id)) {
                        combo.push(newOption.title);
                    }

                }

                for (let i = 0; i < currentTabListItemsArray.length; i++) {

                    if (arrayCompare(combo, currentTabListItemsArray[i].itemOptionIdentifiers)){
                        newIframe.src = currentTabListItemsArray[i].itemComponentHtmlInsert;
                        break;
                    }

                    console.log("combo : "+combo+" || "+"identifiers : "+currentTabListItemsArray[i].itemOptionIdentifiers);

                }


        }

    });


    //ONCE TEXTAREA BUG IS FIXED, LOOK AT COMBO LIKE THIS AND DETERMINE IFRAME
    // Basic Basic None None
    // if (topChoice1.checked == true && typeChoice1.checked == true && innerChoice1.checked == true && bottomChoice1.checked == true) {
    //     homeIFrame.src = "../Form Fields/displays/Inputs/InputBasic.html";
    //     inputIframe.src = "../Form Fields/displays/Input/InputBasic.html";
    // }

}