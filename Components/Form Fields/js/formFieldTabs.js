
// TABS
const formFieldTabs = [
    "Input",
    "Text Area",
];

// TABOPTIONS
const inputTabOptions = [
    "Top",
    "Type",
    "Inner",
    "Bottom",
];

const textAreaTabOptions = [
    "Top",
    "Type",
    "Inner",
    "Bottom",
];

// TAB OPTION LISTS
const inputTabOptionList1 = [
    "Basic",
    "Required",
    "Optional",
]

const inputTabOptionList2 = [
    "Basic",
    "Disabled",
    "Error",
]

const inputTabOptionList3 = [
    "None",
    "Filled",
    "Icon",
    "Filled Icon",
]

const inputTabOptionList4 = [
    "None",
    "Error Message",
]

const textAreaTabOptionList1 = [
    "Basic",
    "Required",
    "Optional",
]

const textAreaTabOptionList2 = [
    "Basic",
    "Disabled",
    "Error",
]

// TAB OPTION LIST DISPLAYS
const inputTabList = [
    "input Bottom Navigations",
    "input Buttons",
    "input Calendars",
    "input Cards",
    "input Chips",
];

const textAreaTabList = [
    "text area Bottom Navigations",
    "text area Buttons",
    "text area Calendars",
    "text area Cards",
    "text area Chips",
];

const formFieldPageObject = {
    formFieldTabs: formFieldTabs,
    formFieldOptions: [
        {
            inputTabOptions: inputTabOptions,
            inputTabOptionsLists: [
                inputTabOptionList1,
                inputTabOptionList2,
                inputTabOptionList3,
                inputTabOptionList4,
            ]
        },
        {
            textAreaTabOptions: textAreaTabOptions,
            textAreaTabOptionsLists: [
                textAreaTabOptionList1,
                textAreaTabOptionList2,
            ]
        }
    ],
    formFieldLists: [
        inputTabList, 
        textAreaTabList,
    ]
}

loadTabPanes(formFieldPageObject.formFieldTabs);
loadTabs(formFieldPageObject.formFieldTabs);
// loadTabOptions(formFieldPageObject.formFieldTabs, formFieldPageObject.formFieldOptions[0].inputTabOptionsLists[0][1]);
console.log(formFieldPageObject.formFieldOptions[0].inputTabOptionsLists[0][0]);

loadTabLists(formFieldPageObject.formFieldTabs, formFieldPageObject.formFieldLists);
loadTabDisplays(formFieldPageObject.formFieldTabs, formFieldPageObject.formFieldLists);
