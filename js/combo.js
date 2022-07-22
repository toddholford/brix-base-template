let tabArray = activeTabsArray;
let optionsArray = activeTabOptionsArray;
let optionTypesArray = activeTabOptionTypesArray;
let componentListItemsArray = activeComponentListItemsArray;
let combo = [];
let newIframeTabPane = null;
let newIframe = null;
let newOption = null;
let isCombo = null;
let iFrameBox = null;


function updateCombo() {
    
    option1 = document.getElementById("InputTopLabelBtnRadio0");
    option2 = document.getElementById("InputTopLabelBtnRadio1");
    option3 = document.getElementById("InputTopLabelBtnRadio2");

    option4 = document.getElementById("InputStyleBtnRadio0");
    option5 = document.getElementById("InputStyleBtnRadio1");
    option6 = document.getElementById("InputStyleBtnRadio2");

    option7 = document.getElementById("InputInnerTextBtnRadio0");
    option8 = document.getElementById("InputInnerTextBtnRadio1");
    option9 = document.getElementById("InputInnerTextBtnRadio2");
    option10 = document.getElementById("InputInnerTextBtnRadio3");

    option11 = document.getElementById("InputBottomLabelBtnRadio0");
    option12 = document.getElementById("InputBottomLabelBtnRadio1");

    iFrameBox = document.getElementById("InputIframe");

    if (option1.checked && option4.checked && option7.checked && option11.checked) {
        iFrameBox.src = "../Form Fields/displays/Input/InputBasic.html";
    }
    else if (option2.checked && option4.checked && option7.checked && option11.checked) {
        iFrameBox.src = "../Form Fields/displays/Input/InputRequired.html";
    }
    else if (option3.checked && option4.checked && option7.checked && option11.checked) {
        iFrameBox.src = "../Form Fields/displays/Input/InputOptional.html";
    }
    else {
        iFrameBox.src = "";
    }

}

function updateStuff() {
    
 tabArray.forEach(tab => {
        combo = [];
        const tabId = tab.innerText.split(" ").join("");

        if (tab.classList.contains("active")) {
            let filteredOptionsArray = optionsArray.filter(option => option.includes(tab.innerText));

            optionTypesArray.forEach(type => {
                
                for (let t = 0; t < filteredOptionsArray.length; t++) {
        
                    // newOption = document.getElementById(filteredOptionsArray[t]);
                    singleOption = document.getElementById(tabId+optionTypesArray.indexOf(type)+"BtnRadio"+filteredOptionsArray.indexOf(t));
            
                    // if (newOption.checked && !combo.includes(newOption.id)) {
                    //     combo.push(newOption.id);
                    // }

                    if (singleOption == null) {
                        continue;
                    }else if (singleOption.checked && !combo.includes(singleOption.id)) {
                        combo.push(singleOption);
                    }
                    else{
                        continue;
                    }
            
                }

            });

            isCombo = arrayCompare(componentListItemsArray.indexOf(tab).itemOptionIdentifiers, combo)

            if (isCombo) {
                iFrameBox = document.getElementById(tabId+"Iframe");
                iFrameBox.src = componentListItemsArray.indexOf(tab).itemComponentHtmlInsert;
            }

        }
        else {
            console.log("not active");
        }

    });
}

// function arrayCompare(_arr1, _arr2) {
//     if (
//       !Array.isArray(_arr1)
//       || !Array.isArray(_arr2)
//       || _arr1.length !== _arr2.length
//       ) {
//         return false;
//       }
    
//     // .concat() to not mutate arguments
//     const arr1 = _arr1.concat().sort();
//     const arr2 = _arr2.concat().sort();
    
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] !== arr2[i]) {
//             return false;
//          }
//     }
    
//     return true;
// }

function updateComboGenerated(buttonClicked) {

    tabArray.forEach(tab => {
        combo = [];

        newIframeTabPane = document.getElementById(tab.innerText.split(" ").join("")+"IframeTabPane");
        newIframe = document.getElementById(tab.innerText.split(" ").join("")+"Iframe");

        if ((buttonClicked.id === (tab.innerText.toLowerCase().split(" ").join("")+"-tab")) && !newIframeTabPane.classList.contains("active")) {
            // textareaIframeTabPane.classList.remove("active");
            newIframeTabPane.classList.add("active");
        }

        if (tab.classList.contains("active")) {
            
            let filteredOptionsArray = optionsArray.filter(option => option.includes(tab.innerText));
                
                for (let t = 0; t < filteredOptionsArray.length; t++) {
        
                    newOption = document.getElementById(filteredOptionsArray[t]);
            
                    if (newOption.checked && !combo.includes(newOption.id)) {
                        combo.push(newOption.id);
                    }

                }

                console.log(combo);
        }
        else {
            console.log("not active");
        }

    });



    //NEED TO ADD SOMETHING LIKE THIS INTO THE ABOVE LOOP, MAY FIX TEXTAREA 'not active' ERROR
    // const selectedOption = option;
    // const inputIframeTabPane = document.getElementById("inputIframeTabPane");
    // const inputIframe = document.getElementById("inputIframe");
    // const textareaIframeTabPane = document.getElementById("textareaIframeTabPane");
    // const textareaIframe = document.getElementById("textareaIframe");

    // if (!inputIframeTabPane.classList.contains("active")) {
    //     textareaIframeTabPane.classList.remove("active");
    //     inputIframeTabPane.classList.add("active");
    // }






    //ONCE TEXTAREA BUG IS FIXED, LOOK AT COMBO LIKE THIS AND DETERMINE IFRAME
    // Basic Basic None None
    // if (topChoice1.checked == true && typeChoice1.checked == true && innerChoice1.checked == true && bottomChoice1.checked == true) {
    //     homeIFrame.src = "../Form Fields/displays/Inputs/InputBasic.html";
    //     inputIframe.src = "../Form Fields/displays/Input/InputBasic.html";
    // }

}