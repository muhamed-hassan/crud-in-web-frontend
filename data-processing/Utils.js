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
    popupDialogAction.innerHTML = "Ok";

    popupDialogContent.appendChild(popupDialogBody);
    popupDialogContent.appendChild(popupDialogAction);

    popupDialog.appendChild(popupDialogContent);

    body.appendChild(popupDialog);
}

function showPopupDialog(body, action) {
    
    var popupDialogBody = document.getElementById("popup-dialog-body");
    popupDialogBody.innerHTML = body;

    var popupDialogAction = document.getElementById("popup-dialog-action");
    popupDialogAction.setAttribute("onclick", action);

    var popupDialog = document.getElementById("popup-dialog");
    popupDialog.style.display = "block";
}

function dismissPopupDialog() {

    var popupDialog = document.getElementById("popup-dialog");
    popupDialog.style.display = "none";

    var popupDialogBody = document.getElementById("popup-dialog-body");
    popupDialogBody.innerHTML = "";

    var popupDialogAction = document.getElementById("popup-dialog-action");
    popupDialogAction.removeAttribute("onclick");
}
