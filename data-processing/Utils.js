function dimForm(formId) {

    var elements = document.querySelectorAll("#" + formId + " input, #" + formId + " button");
    for (var cursor = 0; cursor < elements.length; cursor++) {
        elements[cursor].disabled = true;

        if (elements[cursor].tagName == "BUTTON") {
            elements[cursor].style.cursor = "none";
            elements[cursor].style.opacity = "0.5";
        }
    }
}

function resetForm() {

    // get the formId where the button with id of "reset-btn" is placed
    var formId = document.getElementById("reset-btn").parentElement.parentElement.parentElement.parentElement.id;
    var inputElements = document.querySelectorAll("#" + formId + " input");
    for (var cursor = 0; cursor < inputElements.length; cursor++) {        
        inputElements[cursor].value = "";
    }
}

function resetErrorAreas(formId) {

    var inputElements = document.querySelectorAll("#" + formId + " input");
    for (var cursor = 0; cursor < inputElements.length; cursor++) {        
        inputElements[cursor].style.borderColor = "#CCCCCC";
    }

    var errorMsgs = document.querySelectorAll("#" + formId + " [id$=\"ErrorMessage\"]");
    for (var cursor = 0; cursor < errorMsgs.length; cursor++) {        
        errorMsgs[cursor].textContent = "";
    }
}

/* ****************************************************************************************************************** */

function handleFormErrorsOfOpeningBankAccount(error) {

    var errorInformation = JSON.parse(error.message).error;

    if (errorInformation.hasOwnProperty("name")) {
        document.getElementById("name").style.borderColor = "#FF0000";
        document.getElementById("name_ErrorMessage").textContent = errorInformation.name;
    } else {
        document.getElementById("name").style.borderColor = "#CCCCCC";
        document.getElementById("name_ErrorMessage").textContent = "";
    }

    if (errorInformation.hasOwnProperty("nationalId")) {
        document.getElementById("national-id").style.borderColor = "#FF0000";
        document.getElementById("national-id_ErrorMessage").textContent = errorInformation.nationalId;
    } else {
        document.getElementById("national-id").style.borderColor = "#CCCCCC";
        document.getElementById("national-id_ErrorMessage").textContent = "";
    }

    if (errorInformation.hasOwnProperty("dob")) {
        document.getElementById("dob").style.borderColor = "#FF0000";
        document.getElementById("dob_ErrorMessage").textContent = errorInformation.dob;
    } else {
        document.getElementById("dob").style.borderColor = "#CCCCCC";
        document.getElementById("dob_ErrorMessage").textContent = "";
    }

    if (errorInformation.hasOwnProperty("cellPhone")) {
        document.getElementById("cell-phone").style.borderColor = "#FF0000";
        document.getElementById("cell-phone_ErrorMessage").textContent = errorInformation.cellPhone;
    } else {
        document.getElementById("cell-phone").style.borderColor = "#CCCCCC";
        document.getElementById("cell-phone_ErrorMessage").textContent = "";
    }

    if (errorInformation.hasOwnProperty("email")) {
        document.getElementById("email").style.borderColor = "#FF0000";
        document.getElementById("email_ErrorMessage").textContent = errorInformation.email;
    } else {
        document.getElementById("email").style.borderColor = "#CCCCCC";
        document.getElementById("email_ErrorMessage").textContent = "";
    }

    if (errorInformation.hasOwnProperty("mailingAddress")) {
        document.getElementById("mailing-address").style.borderColor = "#FF0000";
        document.getElementById("mailing-address_ErrorMessage").textContent = errorInformation.mailingAddress;
    } else {
        document.getElementById("mailing-address").style.borderColor = "#CCCCCC";
        document.getElementById("mailing-address_ErrorMessage").textContent = "";
    }
}

function handleFormErrorsOfSearchingInBankAccounts(error) {

    if (error.message.includes("Data not found")) {
            
        resetErrorAreas("searching-in-bank-accounts-form");
        showNotification(error.message, WARNING);

    } else {

        var errorInformation = JSON.parse(error.message).error;

        if (errorInformation.hasOwnProperty("nationalId")) {
            document.getElementById("national-id").style.borderColor = "#FF0000";
            document.getElementById("national-id_ErrorMessage").textContent = errorInformation.nationalId;
        } else {
            document.getElementById("national-id").style.borderColor = "#CCCCCC";
            document.getElementById("national-id_ErrorMessage").textContent = "";
        }

    }
}

function handleFormErrorsOfUpdatingBankAccount(error) {
    
    var errorInformation = JSON.parse(error.message).error;

    if (errorInformation.hasOwnProperty("cellPhone")) {
        document.getElementById("cell-phone").style.borderColor = "#FF0000";
        document.getElementById("cell-phone_ErrorMessage").textContent = errorInformation.cellPhone;
    } else {
        document.getElementById("cell-phone").style.borderColor = "#CCCCCC";
        document.getElementById("cell-phone_ErrorMessage").textContent = "";
    }

    if (errorInformation.hasOwnProperty("email")) {
        document.getElementById("email").style.borderColor = "#FF0000";
        document.getElementById("email_ErrorMessage").textContent = errorInformation.email;
    } else {
        document.getElementById("email").style.borderColor = "#CCCCCC";
        document.getElementById("email_ErrorMessage").textContent = "";
    }

    if (errorInformation.hasOwnProperty("mailingAddress")) {
        document.getElementById("mailing-address").style.borderColor = "#FF0000";
        document.getElementById("mailing-address_ErrorMessage").textContent = errorInformation.mailingAddress;
    } else {
        document.getElementById("mailing-address").style.borderColor = "#CCCCCC";
        document.getElementById("mailing-address_ErrorMessage").textContent = "";
    }
}


/* ****************************************************************************************************************** */

function disableButton(buttonId) {

    var button = document.getElementById(buttonId);
    button.disabled = true;
    button.style.cursor = "none";
    button.style.opacity = "0.5";
}

function enableButton(buttonId) {

    var button = document.getElementById(buttonId);
    button.disabled = false;
    button.style.cursor = "pointer";
    button.style.opacity = "1";
}

/* ****************************************************************************************************************** */

function createPopupDialog() {

    var body = document.getElementById("root");

    var popupDialog = document.createElement("div");    
    popupDialog.setAttribute("id", "popup-dialog");
    popupDialog.classList.add("popup-dialog");

    var popupDialogContent = document.createElement("div");    
    popupDialogContent.setAttribute("id", "popup-dialog-content");
    popupDialogContent.classList.add("popup-dialog-content");

    var popupDialogBody = document.createElement("p");    
    popupDialogBody.setAttribute("id", "popup-dialog-body");

    var popupDialogAction = document.createElement("button");    
    popupDialogAction.setAttribute("id", "popup-dialog-action");
    popupDialogAction.classList.add("btn", "blue-btn");
    popupDialogAction.textContent = "Ok";

    popupDialogContent.appendChild(popupDialogBody);
    popupDialogContent.appendChild(popupDialogAction);

    popupDialog.appendChild(popupDialogContent);

    body.appendChild(popupDialog);
}

function showPopupDialog(body, action) {
    
    var popupDialogBody = document.getElementById("popup-dialog-body");
    popupDialogBody.textContent = body;

    var popupDialogAction = document.getElementById("popup-dialog-action");
    popupDialogAction.setAttribute("onclick", action);

    var popupDialog = document.getElementById("popup-dialog");
    popupDialog.style.display = "block";
}

function dismissPopupDialog() {

    var popupDialog = document.getElementById("popup-dialog");
    popupDialog.style.display = "none";

    var popupDialogBody = document.getElementById("popup-dialog-body");
    popupDialogBody.textContent = "";

    var popupDialogAction = document.getElementById("popup-dialog-action");
    popupDialogAction.removeAttribute("onclick");
}
