
class RemovingBankAccount {

    getContent(userInfoReadModel) {

        return "<div id=\"removing-bank-account\">" + 
                    bankAccountDetails.getContent(userInfoReadModel) +
                    "<div>" +
                        "<button id=\"delete-btn\" onclick=\"confirmBankAccountRemoval()\">Delete</button>" +
                    "</div>" +
                "</div>";      
    }

}