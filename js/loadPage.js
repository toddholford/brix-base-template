let activeTabsArray = [];
let activeTabOptionsArray = [];
let activeTabOptionTypesArray = [];
let activeComponentListItemsArray = [];

function loadPage(component) {

    const currentPageHeader = document.getElementById("componentHeader");
    const passedComponent = component;

    const componentPages = passedComponent.componentPages;
    const currentPage = componentPages.find(p => p.pageTitle == currentPageHeader.innerText);
    const currentPageTitle = currentPage.pageTitle;
    const currentPageTitleId = currentPage.pageTitle.split(" ").join("");

    const componentTabs = currentPage.componentTabs;

    //load panes
    const componentTabPanesDiv = document.getElementById("componentTabPane");
    const componentTabsDiv = document.getElementById("componentTabs");
    const panesDisplaysDiv = document.getElementById("paneDisplays");
    const tabOptionModalDiv = document.getElementById("tabOptionModal");

    componentTabPanesDiv.classList.add("tab-content");
    componentTabsDiv.classList.add("nav", "nav-tabs", "card-header-tabs");
    componentTabsDiv.setAttribute("role", "tablist");
    panesDisplaysDiv.classList.add("col");

    let tabListItem = null;
    let tabButton = null;
    let mainPaneDiv = null;
    let row1Div = null;
    let col1Div = null;
    let row2Div = null;
    let col2Div = null;
    let openOptionModalDiv = null;
    let openOptionModalButton = null;
    let firstLineBreak = null;
    let accordionCodeScrollDiv = null;
    let accordionContainerScrollDiv = null;
    let accordionAccordionScrollDiv = null;
    let paneDisplayPaneDiv = null;
    let paneDisplayComponentBoxDiv = null;
    let paneDisplayAdjustContentDiv = null;
    let paneDisplayIframe = null;
    let mainModalDiv = null;
    let modalDialogDiv = null;
    let modalContentDiv = null;
    let modalBodyDiv = null;
    let modalRowDiv = null;
    let modalFooterDiv = null;
    let modalCloseButton = null;

    let modalColDiv = null;
    let modalColHeaderH5 = null;
    let dividerHR = null;
    let buttonGroupDiv = null;

    let buttonGroupInput = null;
    let buttonGroupLabel = null;

    
    let tabArrayIndex = 0;
    componentTabs.forEach(tab => {

        

        //remove whitespaces
        const tabId = tab.tabTitle.split(" ").join("");
        const componentOptions = tab.componentOptions;
        const componentListItems = tab.componentListItems;
        let accordionHtml = false;
        let accordionCss = false;
        let accordionJs = false;

        //CREATE TAB LOCATION
        tabListItem = document.createElement("li");
        tabButton = document.createElement("button");
        //CREATE TAB CONTENT LOCATION
        mainPaneDiv = document.createElement("div");
        row1Div = document.createElement("div");
        col1Div = document.createElement("div");
        row2Div = document.createElement("div");
        col2Div = document.createElement("div");
        openOptionModalDiv = document.createElement("div");
        openOptionModalButton = document.createElement("button");
        firstLineBreak = document.createElement("br");
        accordionCodeScrollDiv = document.createElement("div");
        accordionContainerScrollDiv = document.createElement("div");
        accordionAccordionScrollDiv = document.createElement("div");
        //CREATE DISPLAY LOCATION
        paneDisplayPaneDiv = document.createElement("div");
        paneDisplayComponentBoxDiv = document.createElement("div");
        paneDisplayAdjustContentDiv = document.createElement("div");
        paneDisplayIframe = document.createElement("iframe");
        //CREATE MODAL LOCATION
        mainModalDiv = document.createElement("div");
        modalDialogDiv = document.createElement("div");
        modalContentDiv = document.createElement("div");
        modalBodyDiv = document.createElement("div");
        modalRowDiv = document.createElement("div");
        modalFooterDiv = document.createElement("div");
        modalCloseButton = document.createElement("button");

        //CREATE TAB LOCATION
        tabListItem.classList.add("nav-item");
        tabButton.classList.add("nav-link","text-bg-dark");
        tabButton.id = (tabId.toLowerCase() + "-tab");
        tabButton.type = "button";
        tabButton.setAttribute("data-bs-toggle", "tab");
        tabButton.setAttribute("data-bs-target", ("#"+tabId+",#"+(tabId+"IframeTabPane")));
        // tabButton.setAttribute("onclick", "testOptions"+componentTabs.indexOf(tab)+"(this)");
        tabButton.setAttribute("onclick", "updateComboGenerated(this)");
        //CREATE TAB CONTENT LOCATION
        mainPaneDiv.classList.add("tab-pane");
        mainPaneDiv.id = tabId;
        mainPaneDiv.tabIndex = 0;
        mainPaneDiv.setAttribute("role","tabpanel");
        mainPaneDiv.setAttribute("aria-labelledby",tabId+"-tab");
        row1Div.classList.add("row");
        col1Div.classList.add("col");
        row2Div.classList.add("row");
        col2Div.classList.add("col-6");
        openOptionModalDiv.classList.add("d-grid", "gap-2");
        openOptionModalButton.classList.add("btn","btn-outline-secondary");
        openOptionModalButton.type = "button";
        openOptionModalButton.setAttribute("data-bs-toggle", "modal");
        openOptionModalButton.setAttribute("data-bs-target", ("#"+tabId+"Modal"));
        accordionCodeScrollDiv.classList.add("code-scroll");
        accordionContainerScrollDiv.classList.add("accordion-container-scroll");
        accordionAccordionScrollDiv.classList.add("accordion","accordion-scroll");
        accordionAccordionScrollDiv.id = (tabId+"accordion");
        //CREATE DISPLAY LOCATION
        paneDisplayPaneDiv.classList.add("tab-pane");
        paneDisplayPaneDiv.id = (tabId+"IframeTabPane");
        paneDisplayPaneDiv.tabIndex = 0;
        paneDisplayPaneDiv.setAttribute("role", "tabpanel")

        paneDisplayComponentBoxDiv.classList.add("zeroHeightComponentBox");
        paneDisplayAdjustContentDiv.classList.add("zeroHeightDisplayAdjust");
        paneDisplayIframe.classList.add("paneIframe");
        paneDisplayIframe.id = (tabId+"Iframe");
        // paneDisplayIframe.src = "";
        paneDisplayIframe.src = ("../"+currentPageTitle+"/displays/"+tabId+"/"+tabId+"Basic.html");
        //CREATE MODAL LOCATION
        mainModalDiv.classList.add("modal");
        mainModalDiv.id = (tabId+"Modal");
        mainModalDiv.setAttribute("tabindex", "-1");
        modalDialogDiv.classList.add("modal-dialog");
        modalContentDiv.classList.add("modal-content", "bg-dark");
        modalBodyDiv.classList.add("modal-body");
        modalRowDiv.classList.add("row");
        modalFooterDiv.classList.add("modal-footer");
        modalCloseButton.classList.add("btn", "btn-outline-secondary");
        modalCloseButton.type = "button";
        modalCloseButton.setAttribute("data-bs-dismiss", "modal");

        //INSERT TEXT
        tabButton.innerText = tab.tabTitle;
        openOptionModalButton.innerText = (tab.tabTitle+" "+"Options");
        modalCloseButton.innerText = "Close";

        //set active tab
        if (tabArrayIndex < 1) {
            tabButton.classList.add("active");
            mainPaneDiv.classList.add("active");
            paneDisplayPaneDiv.classList.add("active");
            tabArrayIndex++;
        }

        //append elements
        componentTabsDiv.appendChild(tabListItem);
        tabListItem.appendChild(tabButton);
        componentTabPanesDiv.appendChild(mainPaneDiv);
        mainPaneDiv.appendChild(row1Div);
        row1Div.appendChild(col1Div);
        col1Div.appendChild(openOptionModalDiv);
        openOptionModalDiv.appendChild(openOptionModalButton);
        col1Div.appendChild(firstLineBreak);
        col1Div.appendChild(accordionCodeScrollDiv);

        accordionCodeScrollDiv.appendChild(accordionContainerScrollDiv);
        accordionContainerScrollDiv.appendChild(accordionAccordionScrollDiv);

        panesDisplaysDiv.appendChild(paneDisplayPaneDiv);
        paneDisplayPaneDiv.appendChild(paneDisplayComponentBoxDiv);
        paneDisplayComponentBoxDiv.appendChild(paneDisplayAdjustContentDiv);
        paneDisplayAdjustContentDiv.appendChild(paneDisplayIframe);

        tabOptionModalDiv.appendChild(mainModalDiv);
        mainModalDiv.appendChild(modalDialogDiv);
        modalDialogDiv.appendChild(modalContentDiv);
        modalContentDiv.appendChild(modalBodyDiv);
        modalBodyDiv.appendChild(modalRowDiv);
        modalContentDiv.appendChild(modalFooterDiv);
        modalFooterDiv.appendChild(modalCloseButton);

        activeTabsArray.push(tabButton);
        activeComponentListItemsArray.push(componentListItems);

        //CREATE ACCORDION
        componentListItems.forEach(listItem => {
            
            const listItemDefinition = listItem.itemDefinition.split(" ").join("");
            let accordionArrayIndex = 0;

            if (listItem.showItemHtmlSnippet && !accordionHtml) {
                
                //create html accordion
                const accordionItemDiv = document.createElement("div");
                const accordionHeaderH2 = document.createElement("h2");
                const accordionButton = document.createElement("button");
                const accordionPanelManageDiv = document.createElement("div");
                const accordionBodyDiv = document.createElement("div");
                const htmlCodeBlockPre = document.createElement("pre");
                const codeBlockCode = document.createElement("code");

                accordionItemDiv.classList.add("accordion-item");
                accordionHeaderH2.classList.add("accordion-header");
                accordionHeaderH2.id = tab.tabTitle+"HtmlAccordion"+componentListItems.indexOf(listItem);
                accordionButton.classList.add("accordion-button", "collapsed");
                accordionButton.type = "button";
                accordionButton.setAttribute("data-bs-toggle", "collapse");
                accordionButton.setAttribute("data-bs-target", "#"+listItemDefinition+accordionArrayIndex);
                accordionButton.setAttribute("aria-expanded", "false");
                accordionButton.setAttribute("aria-controls", listItemDefinition+accordionArrayIndex);
                accordionPanelManageDiv.classList.add("accordion-collapse", "collapse");
                accordionPanelManageDiv.id = listItemDefinition+accordionArrayIndex;
                accordionBodyDiv.classList.add("accordion-body");
                htmlCodeBlockPre.classList.add("codeBlock", "htmlCodeBlock");

                accordionButton.innerText = "HTML";
                codeBlockCode.innerHTML = tab.tabTitle;

                if (accordionArrayIndex < 1) {
                    accordionPanelManageDiv.classList.add("show");
                    accordionButton.classList.remove("collapsed");
                    accordionButton.setAttribute("aria-expanded", "true");
                }
                
                accordionAccordionScrollDiv.appendChild(accordionItemDiv);
                accordionItemDiv.appendChild(accordionHeaderH2);
                accordionHeaderH2.appendChild(accordionButton);
                accordionItemDiv.appendChild(accordionPanelManageDiv);
                accordionPanelManageDiv.appendChild(accordionBodyDiv);
                accordionBodyDiv.appendChild(htmlCodeBlockPre);
                htmlCodeBlockPre.appendChild(codeBlockCode);

                accordionArrayIndex++;
                accordionHtml = true;
            }
            if (listItem.showItemCssSnippet && !accordionCss) {
                
                //create css accordion
                const accordionItemDiv = document.createElement("div");
                const accordionHeaderH2 = document.createElement("h2");
                const accordionButton = document.createElement("button");
                const accordionPanelManageDiv = document.createElement("div");
                const accordionBodyDiv = document.createElement("div");
                const cssCodeBlockPre = document.createElement("pre");
                const codeBlockCode = document.createElement("code");

                accordionItemDiv.classList.add("accordion-item");
                accordionHeaderH2.classList.add("accordion-header");
                accordionHeaderH2.id = tab.tabTitle+"CssAccordion"+componentListItems.indexOf(listItem);
                accordionButton.classList.add("accordion-button", "collapsed");
                accordionButton.type = "button";
                accordionButton.setAttribute("data-bs-toggle", "collapse");
                accordionButton.setAttribute("data-bs-target", "#"+listItemDefinition+accordionArrayIndex);
                accordionButton.setAttribute("aria-expanded", "false");
                accordionButton.setAttribute("aria-controls", listItemDefinition+accordionArrayIndex);
                accordionPanelManageDiv.classList.add("accordion-collapse", "collapse");
                accordionPanelManageDiv.id = listItemDefinition+accordionArrayIndex;
                accordionBodyDiv.classList.add("accordion-body");
                cssCodeBlockPre.classList.add("codeBlock", "cssCodeBlock");

                accordionButton.innerText = "CSS";
                codeBlockCode.innerHTML = "css"

                if (accordionArrayIndex < 1) {
                    accordionPanelManageDiv.classList.add("show");
                    accordionButton.classList.remove("collapsed");
                    accordionButton.setAttribute("aria-expanded", "true");
                }
                
                accordionAccordionScrollDiv.appendChild(accordionItemDiv);
                accordionItemDiv.appendChild(accordionHeaderH2);
                accordionHeaderH2.appendChild(accordionButton);
                accordionItemDiv.appendChild(accordionPanelManageDiv);
                accordionPanelManageDiv.appendChild(accordionBodyDiv);
                accordionBodyDiv.appendChild(cssCodeBlockPre);
                cssCodeBlockPre.appendChild(codeBlockCode);

                accordionArrayIndex++;
                accordionCss = true;
            }
            if (listItem.showItemJsSnippet && !accordionJs) {
                
                //create js accordion
                const accordionItemDiv = document.createElement("div");
                const accordionHeaderH2 = document.createElement("h2");
                const accordionButton = document.createElement("button");
                const accordionPanelManageDiv = document.createElement("div");
                const accordionBodyDiv = document.createElement("div");
                const jsCodeBlockPre = document.createElement("pre");
                const codeBlockCode = document.createElement("code");

                accordionItemDiv.classList.add("accordion-item");
                accordionHeaderH2.classList.add("accordion-header");
                accordionHeaderH2.id = tab.tabTitle+"JsAccordion"+componentListItems.indexOf(listItem);
                accordionButton.classList.add("accordion-button", "collapsed");
                accordionButton.type = "button";
                accordionButton.setAttribute("data-bs-toggle", "collapse");
                accordionButton.setAttribute("data-bs-target", "#"+listItemDefinition+accordionArrayIndex);
                accordionButton.setAttribute("aria-expanded", "false");
                accordionButton.setAttribute("aria-controls", listItemDefinition+accordionArrayIndex);
                accordionPanelManageDiv.classList.add("accordion-collapse", "collapse");
                accordionPanelManageDiv.id = listItemDefinition+accordionArrayIndex;
                accordionBodyDiv.classList.add("accordion-body");
                jsCodeBlockPre.classList.add("codeBlock", "jsCodeBlock");

                accordionButton.innerText = "JAVASCRIPT";
                codeBlockCode.innerHTML = "javascript"

                if (accordionArrayIndex < 1) {
                    accordionPanelManageDiv.classList.add("show");
                    accordionButton.classList.remove("collapsed");
                    accordionButton.setAttribute("aria-expanded", "true");
                }
                
                accordionAccordionScrollDiv.appendChild(accordionItemDiv);
                accordionItemDiv.appendChild(accordionHeaderH2);
                accordionHeaderH2.appendChild(accordionButton);
                accordionItemDiv.appendChild(accordionPanelManageDiv);
                accordionPanelManageDiv.appendChild(accordionBodyDiv);
                accordionBodyDiv.appendChild(jsCodeBlockPre);
                jsCodeBlockPre.appendChild(codeBlockCode);

                accordionArrayIndex++;
                accordionJs = true;
            }

        });

        //CREATE MODAL OPTION DISPLAYS
        

        //CREATE MODAL
        componentOptions.forEach(option => {

            //remove whitespaces
            const optionTypeId = option.optionType.split(" ").join("");
            const optionsList = option.optionsList;
            
            modalColDiv = document.createElement("div");
            modalColHeaderH5 = document.createElement("h5");
            dividerHR = document.createElement("hr");
            buttonGroupDiv = document.createElement("div");

            modalColDiv.classList.add("col");
            modalColHeaderH5.classList.add("lead", "componentOptionColumnLabel");
            modalColHeaderH5.id = optionTypeId+"ButtonGroup";
            dividerHR.classList.add("dropdown-divider");
            buttonGroupDiv.classList.add("btn-group-vertical");
            buttonGroupDiv.setAttribute("role", "group");

            modalColHeaderH5.innerText = option.optionType;

            modalRowDiv.appendChild(modalColDiv);
            modalColDiv.appendChild(modalColHeaderH5);
            modalColDiv.appendChild(dividerHR);
            modalColDiv.appendChild(buttonGroupDiv);

            activeTabOptionTypesArray.push(optionTypeId);

            let optionsListIndex = 0

            //CREATE MODAL OPTION BUTTONGROUPS
            optionsList.forEach(optionListItem => {

                buttonGroupInput = document.createElement("input");
                buttonGroupLabel = document.createElement("label");

                let buttonGroupInputId = (tabId+optionTypeId+"BtnRadio"+optionsList.indexOf(optionListItem));

                buttonGroupInput.classList.add("btn-check");
                buttonGroupInput.id = (tabId+optionTypeId+"BtnRadio"+optionsList.indexOf(optionListItem));
                buttonGroupInput.name = (tabId+optionTypeId+"Btnradio");
                buttonGroupInput.type = "radio";
                buttonGroupInput.title = (optionListItem);
                buttonGroupInput.setAttribute("autocomplete", "off");
                buttonGroupInput.setAttribute("onclick", "updateComboGenerated(this)");
                buttonGroupLabel.classList.add("btn", "btn-outline-secondary", "componentOptionColumnItemLabel");
                buttonGroupLabel.setAttribute("for", (tabId+optionTypeId+"BtnRadio"+optionsList.indexOf(optionListItem)));

                buttonGroupLabel.innerText = optionListItem;

                if (optionsListIndex < 1) {
                    buttonGroupInput.toggleAttribute("checked");
                }

                buttonGroupDiv.appendChild(buttonGroupInput);
                buttonGroupDiv.appendChild(buttonGroupLabel);

                activeTabOptionsArray.push(buttonGroupInputId);

                optionsListIndex++;
            });
        });
    });

}


