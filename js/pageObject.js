const pageObject = {
    componentPages: [
        {
            pageTitle: "Form Fields",
            componentPanes: [
                {
                    paneTitle: "Input",
                    componentTabs: [
                        {
                            tabTitle: "Input",
                            componentOptions: [
                                {
                                    optionType: "Top",
                                    optionsList: [
                                        "Basic",
                                        "Required",
                                        "Optional"
                                    ]
                                },
                                {
                                    optionType: "Type",
                                    optionsList: [
                                        "Basic",
                                        "Disabled",
                                        "Error"
                                    ]
                                },
                                {
                                    optionType: "Inner",
                                    optionsList: [
                                        "None",
                                        "Filled",
                                        "Icon",
                                        "Filled Icon"
                                    ]
                                },
                                {
                                    optionType: "Bottom",
                                    optionsList: [
                                        "None",
                                        "Error Message"
                                    ]
                                }
                            ],
                            componentListItems: [
                                {
                                    itemDefinition: "Basic Input Field",
                                    itemComponentHtmlInsert: "../Form Fields/displays/Inputs/InputBasic.html",
                                    itemHtmlSnippet: "Basic Html",
                                    itemCssSnippet: "Basic Css",
                                    itemJsSnippet: "Basic Javascript",
                                    itemOptionIdentifiers: [
                                        "Basic", "Basic", "None", "None"
                                    ]
                                },
                                {
                                    itemDefinition: "Required Input Field",
                                    itemComponentHtmlInsert: "../Form Fields/displays/Inputs/InputRequired.html",
                                    itemHtmlSnippet: "Required Html",
                                    itemCssSnippet: "Required Css",
                                    itemJsSnippet: "Required Javascript",
                                    itemOptionIdentifiers: [
                                        "Required", "Basic", "None", "None"
                                    ]
                                },
                                {
                                    itemDefinition: "Optional Input Field",
                                    itemComponentHtmlInsert: "../Form Fields/displays/Inputs/InputOptional.html",
                                    itemHtmlSnippet: "Optional Html",
                                    itemCssSnippet: "Optional Css",
                                    itemJsSnippet: "Optional Javascript",
                                    itemOptionIdentifiers: [
                                        "Optional", "Basic", "None", "None"
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    paneTitle: "Text Area",
                    componentTabs: [
                        {
                            tabTitle: "Text Area",
                            componentOptions: [
                                "Default",
                                "Error",
                                "Icon",
                                "Label",
                                "Disabled"
                            ],
                            componentListItems: [
                                {
                                    itemDefinition: "Default Text Area",
                                    itemHtmlSnippet: null,
                                    itemCssSnippet: null,
                                    itemJsSnippet: null,
                                    itemOptionIdentifiers: [
                                        "Default"
                                    ]
                                },
                                {
                                    itemDefinition: "Error Text Area",
                                    itemHtmlSnippet: null,
                                    itemCssSnippet: null,
                                    itemJsSnippet: null,
                                    itemOptionIdentifiers: [
                                        "Error"
                                    ]
                                },
                                {
                                    itemDefinition: "Icon Text Area",
                                    itemHtmlSnippet: null,
                                    itemCssSnippet: null,
                                    itemJsSnippet: null,
                                    itemOptionIdentifiers: [
                                        "Icon"
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
    ]
}

loadPage(pageObject);