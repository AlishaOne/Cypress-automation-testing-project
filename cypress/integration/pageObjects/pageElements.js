const loginPageDemoQA = {
    email: "#userName",
    password: "#password",
    submit: "#login",
    loginPanelText: "Login in Book Store",
    logout: "#submit"
}

const loginPage = {
    email: "#txtUsername",
    password: "#txtPassword",
    submit: ".button",
    forgotPass: "//a[text()='Forgot your password?']",
    loginPanelText: "LOGIN Panel",
}
const forgotPassPage = {
    username: "#securityAuthentication_userName",
    reset: "#btnSearchValues",
    cancel: "#btnCancel",
    forgotPassLabel: "h1",
    forgotPassText: "Forgot Your Password?",
    resetCorrectLabel: "#divContent > p",
    resetCorrectMsg: "Instructions for resetting your password have been sent to",
    resetRepeatMsg: "There is a password reset request already in the system",
    resetIncorrectErrorMsg: "Please contact HR admin in order to reset the password",

}
const headerPage = {
    logout: "//a[text()='Logout']",
}

const widgetsPage = {
    widgets: ".header-text",
    widgetText: "Widgets",
    mainHeader: ".main-header",
    accordian: "//span[text()='Accordian']",
    sectionOneHeader: "#section1Heading",
    sectionOneText: "Lorem Ipsum",
    sectionTwoHeader: "#section2Heading",
    sectionTwoText: "Lorem Ipsum comes from sections 1.10.32 and 1.10.33",
    autoComplete: "//span[text()='Auto Complete']",
    autoCompleteText: "Auto Complete",
    autoCompleteInputMultiColor: "#autoCompleteMultipleInput",
    autoCompleteInputOneColor: "#autoCompleteSingleInput",
    autoCompleteInputColorRed: "red{enter}",
    autoCompleteInputColorGreen: "green{enter}",
    autoCompleteInputColorBlue: "blue{enter}",

}


export default {
    loginPageDemoQA,
    loginPage,
    headerPage,
    forgotPassPage,
    widgetsPage,
}