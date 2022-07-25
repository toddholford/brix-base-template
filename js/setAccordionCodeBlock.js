let htmlCodeBlockCode = "";
let htmlIframe = "";
let cssCodeBlockCode = "";
let cssIframe = "";
let jsCodeBlockCode = "";
let jsIframe = "";
// let defaultCodeBlockCode = "";

// let currentTabsArray = activeTabsArray;
let currentCodeBlocksArray = currentCodeBlocks;
let currentIframeDisplaysArray = activePaneDisplaysArray;

function setAccordionCodeBlock(passedThis) {

    let selectedAccordionButtonText = passedThis.innerText.toLowerCase();

    if (selectedAccordionButtonText.includes("html")) {
        htmlCodeBlockCode = grabCodeBlock(selectedAccordionButtonText);
        htmlIframe = grabIframe(selectedAccordionButtonText);

        htmlCodeBlockCode.append(...htmlIframe.childNodes);
    }
    if (selectedAccordionButtonText.includes("css")) {
        cssCodeBlockCode = grabCodeBlock(selectedAccordionButtonText);
        cssIframe = grabIframe(selectedAccordionButtonText);

        cssCodeBlockCode.append(...cssIframe.childNodes);
    }
    if (selectedAccordionButtonText.includes("js")) {
        jsCodeBlockCode = grabCodeBlock(selectedAccordionButtonText);
        jsIframe = grabIframe(selectedAccordionButtonText);

        jsCodeBlockCode.append(...jsIframe.childNodes);
    }

}

function grabCodeBlock(codeBlock){

    for (let i = 0; i < currentCodeBlocksArray.length; i++) {

        if(currentCodeBlocksArray[i].id === codeBlock){
            return currentCodeBlocksArray[i];
        }

    }

}

function grabIframe(iFrame){
    let accordionText = null;

    for (let i = 0; i < currentIframeDisplaysArray.length; i++) {

        if(currentIframeDisplaysArray[i].id.includes(tabArray[i].id)){

            const pullIframe = currentIframeDisplaysArray[i];
            const iWindow = pullIframe.contentWindow;
            const iDocument = iWindow.document;

            accordionText = iDocument.getElementById(iFrame+"Iframe");
            break;
        }
    }
    return accordionText;

}