const componentObject = {
    componentPages: [
        {
            pageTitle: "Form Fields",
            componentTabs: [
                {
                    tabTitle: "Input",
                    componentOptions: [
                        {
                            optionType: "Top Label",
                            optionsList: [
                                "Standard",
                                "Required",
                                "Optional"
                            ]
                        },
                        {
                            optionType: "Style",
                            optionsList: [
                                "Basic",
                                "Disabled",
                                "Error"
                            ]
                        },
                        {
                            optionType: "Inner Text",
                            optionsList: [
                                "Empty",
                                "Filled",
                                "Icon",
                                "Filled Icon"
                            ]
                        },
                        {
                            optionType: "Bottom Label",
                            optionsList: [
                                "None",
                                "Error Message"
                            ]
                        },
                    ],
                    componentListItems: [
                        {
                            itemDefinition: "Basic Input Field",
                            itemComponentHtmlInsert: "../Form Fields/displays/Inputs/InputBasic.html",
                            showItemHtmlSnippet: true,
                            showItemCssSnippet: true,
                            showItemJsSnippet: false,
                            itemOptionIdentifiers: [
                                "Standard", "Basic", "Empty", "None"
                            ]
                        },
                        {
                            itemDefinition: "Required Input Field",
                            itemComponentHtmlInsert: "../Form Fields/displays/Inputs/InputRequired.html",
                            showItemHtmlSnippet: true,
                            showItemCssSnippet: true,
                            showItemJsSnippet: false,
                            itemOptionIdentifiers: [
                                "Required", "Basic", "Empty", "None"
                            ]
                        },
                        {
                            itemDefinition: "Optional Input Field",
                            itemComponentHtmlInsert: "../Form Fields/displays/Inputs/InputOptional.html",
                            showItemHtmlSnippet: true,
                            showItemCssSnippet: true,
                            showItemJsSnippet: false,
                            itemOptionIdentifiers: [
                                "Optional", "Basic", "Empty", "None"
                            ]
                        }
                    ]
                },
                {
                    tabTitle: "Text Area",
                    componentOptions: [
                        {
                            optionType: "Top",
                            optionsList: [
                                "Basic",
                                "Required",
                            ]
                        },
                        {
                            optionType: "Type",
                            optionsList: [
                                "Basic",
                                "Disabled",
                            ]
                        },
                        {
                            optionType: "Inner",
                            optionsList: [
                                "None",
                                "Filled",
                            ]
                        },
                        {
                            optionType: "Bottom",
                            optionsList: [
                                "None",
                            ]
                        }
                    ],
                    componentListItems: [
                        {
                            itemDefinition: "Default Text Area",
                            showItemHtmlSnippet: true,
                            showItemCssSnippet: true,
                            showItemJsSnippet: false,
                            itemOptionIdentifiers: [
                                "Default"
                            ]
                        },
                        {
                            itemDefinition: "Error Text Area",
                            showItemHtmlSnippet: true,
                            showItemCssSnippet: true,
                            showItemJsSnippet: false,
                            itemOptionIdentifiers: [
                                "Error"
                            ]
                        },
                        {
                            itemDefinition: "Icon Text Area",
                            showItemHtmlSnippet: true,
                            showItemCssSnippet: true,
                            showItemJsSnippet: false,
                            itemOptionIdentifiers: [
                                "Icon"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            pageTitle: "Empty Template",
            componentTabs: [
                {
                    tabTitle: "",
                    componentOptions: [
                        {
                            optionType: "",
                            optionsList: [
                                "",
                            ]
                        },
                    ],
                    componentListItems: [
                        {
                            itemDefinition: "",
                            itemComponentHtmlInsert: "",
                            itemHtmlSnippet: "",
                            itemCssSnippet: "",
                            itemJsSnippet: "",
                            itemOptionIdentifiers: [
                                ""
                            ]
                        },
                    ]
                }
            ]
        },
    ]
}

loadPage(componentObject);