
function previous() {

    var currentIndex = parseInt(sessionStorage.getItem("currentIndex"));    
    currentIndex -= 1;

    try {
        
        var page = userResourceClient.getPage(currentIndex);
        var bankAccounts = page.data;
        
        fillPaginatedData(bankAccounts);

        if (page.firstPage) {
            disableButton("previous-btn");
        }
        // enable next-btn if it is disabled because it reached the last page
        if (document.getElementById("next-btn").disabled) {
            enableButton("next-btn");
        }

    } catch (error) {
        showNotification(error.message, WARNING);
        currentIndex += 1;
    } finally {
        sessionStorage.setItem("currentIndex", currentIndex);
    }

}

function next() {
    
    var currentIndex = parseInt(sessionStorage.getItem("currentIndex"));
    currentIndex += 1;

    try {

        var page = userResourceClient.getPage(currentIndex);
        var bankAccounts = page.data;

        fillPaginatedData(bankAccounts);
        
        // enable previous-btn if it is disabled because it is the first page
        if (document.getElementById("previous-btn").disabled) {
            enableButton("previous-btn");
        }
        if (page.lastPage) {
            disableButton("next-btn");
        }
        
    } catch (error) {
        showNotification(error.message, WARNING);
        currentIndex -= 1;
    } finally {
        sessionStorage.setItem("currentIndex", currentIndex);
    }

}

function fillPaginatedData(bankAccounts) {

    var tbodyContent = "";
    for (var cursor = 0; cursor < bankAccounts.length; cursor++) {
        var row =   "<tr onclick=\"showBankAccountDetailsInPopupDialog(" + bankAccounts[cursor].nationalId + ")\">" +
                        "<td> " + bankAccounts[cursor].name + " </td>" +
                        "<td> " + bankAccounts[cursor].nationalId + " </td>" +
                        "<td> " + bankAccounts[cursor].iban + " </td>" +
                        "<td> " + bankAccounts[cursor].balance + " </td>" +
                    "</tr>";
        tbodyContent += row;
    }
    document.getElementById("paginated-data").innerHTML = tbodyContent;
}