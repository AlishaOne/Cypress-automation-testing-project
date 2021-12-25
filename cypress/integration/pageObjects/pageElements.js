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



export default {
    loginPageDemoQA,
    loginPage,
    headerPage,
    forgotPassPage,
}