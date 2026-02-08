
class ViewingBankAccountsUsingPagination {

    getContent() { 

        return "<div class=\"viewing-bank-accounts-container\">" + 
                    "<table class=\"tabular-layout viewing-bank-accounts-view\">" +
                        "<thead>" + 
                            "<tr>" +
                                "<th> Name </th>" +
                                "<th> National ID </th>" +
                                "<th> IBAN </th>" +
                                "<th> Balance </th>" +
                            "</tr>" +
                        "</thead>" +
                        "<tbody id=\"paginated-data\">" +
                        "</tbody>" +
                    "</table>" +
                    "<div id=\"pagination-controls\">" +
                        "<button id=\"previous-btn\" class=\"btn blue-btn\" onclick=\"previous()\">Previous</button>" + 
                        "<button id=\"next-btn\" class=\"btn blue-btn\" onclick=\"next()\">Next</button>" +
                    "</div>" +                    
                "</div>" +
                "<p id=\"bank-account-details\"></p>";
    }

}