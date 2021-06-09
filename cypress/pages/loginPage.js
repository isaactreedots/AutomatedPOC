class LoginPage {
    static updatePopUp = '.q-card';
    static okUpdatePopUp = '[data-cy=alert-button] > .q-btn__wrapper > .q-btn__content';
    static skipButton = '[data-cy=btnSkip] > .q-btn__wrapper > .q-btn__content > .block';
    static signInWithPasswordBtn = '[data-cy=btnEmail] > .q-btn__wrapper > .q-btn__content';
    static signInWithMobilePhoneBtn = '[data-cy=btnPhone] > .q-btn__wrapper > .q-btn__content';
    static countryDropdown = '.vti__selection';
    static indonesiaCountry = 'Indonesia'; //text selector
    static unitedStatesCountry = 'United States';
    static otpCode = '#otp_code_1';
    static mobilePhoneField = '.vti__input';
    static loginWithPhone = '.q-tab--inactive > .q-tab__content > .q-tab__icon';
    static emailField = '.txt-username';
    static passwordField = '.txt-password';
    static signInButton = '[data-cy=btnLogin] > .q-btn__wrapper > .q-btn__content';
    static homeMenu = '[data-cy=Home] > .q-tab__content > .q-tab__icon';
    static emptyEmailNotification = 'Please provide your username';
    static emptyPasswordNotification = 'Please provide your password';
    static signUp = 'Sign Up'; //text selector
    static numberNotExistPopUp = '.q-dialog__inner > .column'
}

export default LoginPage;