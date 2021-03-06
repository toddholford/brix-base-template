const formFieldTabs = [
    "Input",
    "Text Area",
];

const inputOptions = [
    "input Bottom Navigations",
    "input Buttons",
    "input Calendars",
    "input Cards",
    "input Chips",
];

const textAreaOptions = [
    "text area Bottom Navigations",
    "text area Buttons",
    "text area Calendars",
    "text area Cards",
    "text area Chips",
];

const formFieldOptions = [inputOptions, textAreaOptions,];

loadTabPanes(formFieldTabs);
loadTabs(formFieldTabs);
loadTabOptions(formFieldTabs, formFieldOptions);
loadTabDisplays(formFieldTabs, formFieldOptions);
