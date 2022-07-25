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
                            itemComponentHtmlInsert: "../Form Fields/displays/Input/InputBasic.html",
                            showItemHtmlSnippet: true,
                            showItemCssSnippet: true,
                            showItemJsSnippet: false,
                            itemOptionIdentifiers: [
                                "Standard", "Basic", "Empty", "None"
                            ]
                        },
                        {
                            itemDefinition: "Required Input Field",
                            itemComponentHtmlInsert: "../Form Fields/displays/Input/InputRequired.html",
                            showItemHtmlSnippet: true,
                            showItemCssSnippet: true,
                            showItemJsSnippet: false,
                            itemOptionIdentifiers: [
                                "Required", "Basic", "Empty", "None"
                            ]
                        },
                        {
                            itemDefinition: "Optional Input Field",
                            itemComponentHtmlInsert: "../Form Fields/displays/Input/InputOptional.html",
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
                                "Standard",
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
                                "Empty",
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
                            itemComponentHtmlInsert: "../Form Fields/displays/TextArea/TextAreaBasic.html",
                            showItemHtmlSnippet: true,
                            showItemCssSnippet: true,
                            showItemJsSnippet: false,
                            itemOptionIdentifiers: [
                                "Standard", "Basic", "Empty", "None"
                            ]
                        },
                        {
                            itemDefinition: "Error Text Area",
                            itemComponentHtmlInsert: "../Form Fields/displays/TextArea/InputOptional.html",
                            showItemHtmlSnippet: true,
                            showItemCssSnippet: true,
                            showItemJsSnippet: false,
                            itemOptionIdentifiers: [
                                "Error"
                            ]
                        },
                        {
                            itemDefinition: "Icon Text Area",
                            itemComponentHtmlInsert: "../Form Fields/displays/TextArea/InputOptional.html",
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