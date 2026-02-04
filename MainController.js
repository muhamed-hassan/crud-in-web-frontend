function launcher() {

    var templateConstructor = new TemplateConstructor();
    templateConstructor.constructHeader();
    templateConstructor.constructContent();
    templateConstructor.constructFooter(); 

    displayFragment(HOME, home);

    createPopupDialog();
}

// Navigation bar
function navigateTo(element) {

    clearNotificationArea();
    
    var action = element.getAttribute("id");

    try {
    
        switch (action) {

            case "open-bank-account":
                displayFragment(OPEN_BANK_ACCOUNT, openingBankAccount);
                break;

            case "view-bank-account":                
                displayFragment(SEARCH_IN_BANK_ACCOUNTS, searchingInBankAccounts);
                sessionStorage.setItem("targetPage", "bankAccountDetails");         
                break;

            case "update-bank-account":                
                displayFragment(SEARCH_IN_BANK_ACCOUNTS, searchingInBankAccounts);
                sessionStorage.setItem("targetPage", "updateBankAccount");
                break;

            case "remove-bank-account":                
                displayFragment(SEARCH_IN_BANK_ACCOUNTS, searchingInBankAccounts);
                sessionStorage.setItem("targetPage", "removeBankAccount");   
                break;

            case "view-bank-accounts-in-pages": // do the initial call to fetch data here                              
                displayFragment(BANK_ACCOUNTS, viewingBankAccountsUsingPagination);
                var currentIndex = 0;            
                var page = userResourceClient.getPage(currentIndex);
                var bankAccounts = page.data;
                fillPaginatedData(bankAccounts);
                if (page.firstPage) {
                    disableButton("previous-btn");
                }              
                if (bankAccounts.length < PAGE_SIZE) {
                    disableButton("next-btn");
                }  
                sessionStorage.setItem("currentIndex", currentIndex);  
                break;

            case "back-to-home":
                displayFragment(HOME, home);                  
                break;

            default:
                throw new Error("Unknown action !!!");
        }

    } catch (error) {
        showNotification(error.message, WARNING);
    }

}

/* *********************************************************************************** */

function displayFragment(pageTitle, fragmentType) {

    document.title = pageTitle;    
    document.getElementById("content-area").innerHTML = fragmentType.getContent();
}

function displayFragment(pageTitle, fragmentType, data) {

    document.title = pageTitle;
    document.getElementById("content-area").innerHTML = fragmentType.getContent(data);
}