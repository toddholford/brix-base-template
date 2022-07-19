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

let tabArray = activeTabsArray;
let optionsArray = activeTabOptionsArray;
let combo = [];

// HOW CAN WE AUTOMATE ALL OF THIS????
function updateComboGenerated() {
    
    // figure out how many options each tab has
    // loop through and getElementById for each option
    // replace getElementById string with variables where necessary
    // *figure out best way to do comparison??*
    // grab iFrame src from pageObject script where identifiers match checked elements
    // what about creating an empty array, then looping through and adding to the array?? - this was promising, need to exclude textArea(isolate tab options)

    for (let i = 0; i < tabArray.length; i++) {
        
        for (let t = 0; t < optionsArray.length; t++) {
            let newOption = document.getElementById(optionsArray[t]);
    
            if (newOption.checked && newOption.contains(tabArray[i].innerText)) {
                combo.push(newOption);
            }
    
            console.log(newOption);
        }

        if (tabArray[i].classList.contains("active")) {
            break;
        }

    }


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