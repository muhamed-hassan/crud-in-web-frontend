function saveBankAccount() {

    try {

        var userInfoCreateModel = new UserInfoCreateModel();
        userInfoCreateModel.name = document.getElementById("name").value;;
        userInfoCreateModel.dateOfBirth = document.getElementById("dob").value;;
        userInfoCreateModel.nationalId = document.getElementById("national-id").value;
        userInfoCreateModel.cellPhone = document.getElementById("cell-phone").value;
        userInfoCreateModel.email = document.getElementById("email").value;
        userInfoCreateModel.mailingAddress = document.getElementById("mailing-address").value;

        // Calling the backend to create a new bank account
        userResourceClient.create(userInfoCreateModel);

        // Show a notification that has the result of done action “The bank account has been created successfully”
        showNotification(SAVE_BANK_ACCOUNT_SUCCESS_MSG, SUCCESS)

        // Dim all fields and buttons
        dimForm("opening-bank-account-form");

    } catch (error) {
        showNotification(error.message, WARNING);
    }

}

/* ****************************************************************************************************************** */

function search() {

    clearNotificationArea();

    var nationalId = document.getElementById("national-id").value;

    var targetPage = sessionStorage.getItem("targetPage");
    sessionStorage.removeItem("targetPage");

    try {        

        switch (targetPage) {

            case "bankAccountDetails":
                var detailedUserInfoReadModel = userResourceClient.getDetailedViewByNationalId(nationalId); 
                displayFragment(BANK_ACCOUNT_DETAILS, bankAccountDetails, detailedUserInfoReadModel);                  
                break;

            case "updateBankAccount": 
                var userInfoReadModelForUpdate = userResourceClient.getBriefViewForUpdateByNationalId(nationalId);             
                displayFragment(UPDATE_BANK_ACCOUNT, updatingBankAccount, userInfoReadModelForUpdate); 
                sessionStorage.setItem("id", userInfoReadModelForUpdate.id);
                break;

            case "removeBankAccount":
                var detailedUserInfoReadModel = userResourceClient.getDetailedViewByNationalId(nationalId); 
                displayFragment(REMOVE_BANK_ACCOUNT, removingBankAccount, detailedUserInfoReadModel); 
                sessionStorage.setItem("id", detailedUserInfoReadModel.id);
                break;

            default:
                throw new Error("Unknown targetPage !!!");
        }

    } catch (error) {
        showNotification(error.message, WARNING);
    }

}

/* ****************************************************************************************************************** */

function updateBankAccount() {

    try {       

        var userInfoUpdateModel = new UserInfoUpdateModel();
        userInfoUpdateModel.cellPhone = document.getElementById("cell-phone").value;
        userInfoUpdateModel.email = document.getElementById("email").value;
        userInfoUpdateModel.mailingAddress = document.getElementById("mailing-address").value;

        // Calling the backend to update a bank account
        userResourceClient.update(sessionStorage.getItem("id"), userInfoUpdateModel);

        // Show a notification that has the result of done action “The bank account has been updated successfully”
        showNotification(UPDATE_BANK_ACCOUNT_SUCCESS_MSG, SUCCESS)

        // Dim all fields and buttons
        dimForm("updating-bank-account-form");

        sessionStorage.removeItem("id");

    } catch (error) {
        showNotification(error.message, WARNING);
    }

}

/* ****************************************************************************************************************** */

function confirmBankAccountRemoval() {
    
    showPopupDialog(REMOVE_BANK_ACCOUNT_CONFIRMATION_MSG, "removeBankAccount()");
}

function removeBankAccount() {

    var id = sessionStorage.getItem("id");        
    sessionStorage.removeItem("id");
    
    userResourceClient.remove(id);

    dismissPopupDialog();

    showNotification(REMOVE_BANK_ACCOUNT_SUCCESS_MSG, SUCCESS)
}

/* ****************************************************************************************************************** */

function displayBankAccountDetails(nationalId) {

    var userInfoReadModel = userResourceClient.getDetailedViewByNationalId(nationalId);

    var bankAccountDetailsElement = document.getElementById("bank-account-details");
    bankAccountDetailsElement.innerHTML = userInfoReadModel.name + " with national id of " + userInfoReadModel.nationalId + 
                                            " is born at " + userInfoReadModel.dateOfBirth + " <br /> " +
                                            " and live in " + userInfoReadModel.mailingAddress + 
                                            " besides can be contacted via this email " + userInfoReadModel.email + 
                                            " or via this cell phone " + userInfoReadModel.cellPhone + ". <br /> " +
                                            "Has a bank account with IBAN of " + userInfoReadModel.iban + 
                                            " with balance of " + userInfoReadModel.balance + " GBP.";
}