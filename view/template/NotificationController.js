function showNotification(message, type) {

    var notificationArea = document.getElementById("notification-area");
    var notificationContent = document.getElementById("notification-content");

    if (type == SUCCESS) {

        notificationArea.style.border = "1px solid #C3E6CB";
        notificationArea.style.background = "#D4EDDA";
        notificationContent.style.color = "#155724";

    } else if (type == WARNING) {

        notificationArea.style.border = "1px solid #FFEEBA";
        notificationArea.style.background = "#FFF3CD";
        notificationContent.style.color = "#856404"; 

    } else {

        throw new Error("Unknown notification type.");
    }

    notificationArea.style.visibility = "visible";
    notificationContent.innerHTML = message;
}

function clearNotificationArea() {

    var notificationArea = document.getElementById("notification-area");
    var notificationContent = document.getElementById("notification-content");
    
    notificationArea.style.visibility = "hidden";
    notificationArea.style.border = "";
    notificationArea.style.background = "";

    notificationContent.innerHTML = "";
    notificationContent.style.color = "";
}