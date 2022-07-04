const selectorTabs = [
    "Radio Buttons",
    "Switches",
];

const radioButtonOptions = [
    "radio button Bottom Navigations",
    "radio button Buttons",
    "radio button Calendars",
    "radio button Cards",
    "radio button Chips",
];

const switchOptions = [
    "switch Bottom Navigations",
    "switch Buttons",
    "switch Calendars",
    "switch Cards",
    "switch Chips",
];

const selectorOptions = [radioButtonOptions, switchOptions,];

loadTabPanes(selectorTabs);
loadTabs(selectorTabs);
loadTabOptions(selectorTabs, selectorOptions);
loadTabDisplays(selectorTabs, selectorOptions);