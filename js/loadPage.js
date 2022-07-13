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

    let tabArrayIndex = 0;
    componentTabs.forEach(tab => {

        //remove whitespaces
        const tabId = tab.tabTitle.split(" ").join("");

        let accordionHtml = false;
        let accordionCss = false;
        let accordionJs = false;

        //CREATE TAB LOCATION
        const tabListItem = document.createElement("li");
        const tabButton = document.createElement("button");
        //CREATE TAB CONTENT LOCATION
        const mainPaneDiv = document.createElement("div");
        const row1Div = document.createElement("div");
        const col1Div = document.createElement("div");
        const row2Div = document.createElement("div");
        const col2Div = document.createElement("div");
        const modalOpenButtonRowDiv = document.createElement("div");
        const modalOpenButtonColDiv = document.createElement("div");
        const modalOpenButtonLabel = document.createElement("label");
        const modalOpenButton = document.createElement("button");
        const firstLineBreak = document.createElement("br");
        const accordionCodeScrollDiv = document.createElement("div");
        const accordionContainerScrollDiv = document.createElement("div");
        const accordionAccordionScrollDiv = document.createElement("div");
        //CREATE DISPLAY LOCATION
        const paneDisplayPaneDiv = document.createElement("div");
        const paneDisplayComponentBoxDiv = document.createElement("div");
        const paneDisplayAdjustContentDiv = document.createElement("div");
        const paneDisplayIframe = document.createElement("iframe");
        //CREATE MODAL LOCATION
        const mainModalDiv = document.createElement("div");
        const modalDialogDiv = document.createElement("div");
        const modalContentDiv = document.createElement("div");
        const modalBodyDiv = document.createElement("div");
        const modalRowDiv = document.createElement("div");
        const modalFooterDiv = document.createElement("div");
        const modalCloseButton = document.createElement("button");

        //CREATE TAB LOCATION
        tabListItem.classList.add("nav-item");
        tabButton.classList.add("nav-link","text-bg-dark");
        tabButton.id = (tabId + "-tab");
        tabButton.type = "button";
        tabButton.setAttribute("data-bs-toggle", "tab");
        tabButton.setAttribute("data-bs-target", ("#"+tabId));
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
        modalOpenButtonRowDiv.classList.add("row", "justify-content-start", "align-items-center");
        modalOpenButtonColDiv.classList.add("col", "text-start");
        modalOpenButtonLabel.classList.add("optionsButtonLabel");
        modalOpenButton.classList.add("btn","btn-outline-secondary");
        modalOpenButton.setAttribute("data-bs-toggle", "modal");
        modalOpenButton.setAttribute("data-bs-target", ("#"+tabId+"Modal"));
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
        modalOpenButtonLabel.innerText = (tab.tabTitle+" "+"Options");
        modalOpenButton.innerText = "...";
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
        col1Div.appendChild(row2Div);
        row2Div.appendChild(col2Div);
        col2Div.appendChild(modalOpenButtonRowDiv);
        modalOpenButtonRowDiv.appendChild(modalOpenButtonColDiv);
        modalOpenButtonColDiv.appendChild(modalOpenButtonLabel);
        modalOpenButtonColDiv.appendChild(modalOpenButton);
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


        const componentListItems = tab.componentListItems;
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
                accordionHeaderH2.id = listItem;
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
                accordionHeaderH2.id = listItem;
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
                accordionHeaderH2.id = listItem;
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

        const componentOptions = tab.componentOptions;
        componentOptions.forEach(option => {
            
            const modalColDiv = document.createElement("div");
            const modalColHeaderH5 = document.createElement("h5");
            const dividerHR = document.createElement("hr");
            const buttonGroupDiv = document.createElement("div");

            modalColDiv.classList.add("col");
            modalColHeaderH5.classList.add("lead", "componentOptionColumnLabel");
            dividerHR.classList.add("dropdown-divider");
            buttonGroupDiv.classList.add("btn-group-vertical");
            buttonGroupDiv.setAttribute("role", "group");

            modalColHeaderH5.innerText = option.optionType;

            modalRowDiv.appendChild(modalColDiv);
            modalColDiv.appendChild(modalColHeaderH5);
            modalColDiv.appendChild(dividerHR);
            modalColDiv.appendChild(buttonGroupDiv);

            let optionsListIndex = 0

            const optionsList = option.optionsList;
            optionsList.forEach(optionListItem => {

                const buttonGroupInput = document.createElement("input");
                const buttonGroupLabel = document.createElement("label");

                buttonGroupInput.classList.add("btn-check");
                buttonGroupInput.id = (tabId+optionListItem+"BtnRadio"+optionsList.indexOf(optionListItem));
                buttonGroupInput.name = (tabId+option.optionType+"Btnradio");
                buttonGroupInput.type = "radio";
                // buttonGroupInput.setAttribute("autocomplete", "off");
                // buttonGroupInput.checked = false;
                // buttonGroupInput.setAttribute("onclick", "testOptions(this)");
                buttonGroupLabel.classList.add("btn", "btn-outline-secondary", "componentOptionColumnItemLabel");
                buttonGroupLabel.setAttribute("for", (tabId+optionListItem+"Btnradio"+optionsList.indexOf(optionListItem)));

                buttonGroupLabel.innerText = optionListItem;

                if (optionsListIndex < 1) {

                    buttonGroupInput.checked = true;
                    // buttonGroupInput.toggleAttribute("checked");
                }

                buttonGroupDiv.appendChild(buttonGroupInput);
                buttonGroupDiv.appendChild(buttonGroupLabel);

                optionsListIndex++;
            });
        });

    });

}