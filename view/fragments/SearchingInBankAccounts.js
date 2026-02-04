
class SearchingInBankAccounts {

    getContent() {

        return "<table id=\"searching-in-bank-accounts-form\" class=\"tabular-layout searching-in-bank-accounts-view\">" +
                    "<tr>" +
                        "<td> <label for=\"national-id\">National ID:</label> </td>" +
                        "<td> <input id=\"national-id\" type=\"text\" /> </td>" +
                        "<td colspan=\"3\" style=\"width: 260px;\"></td>" +
                    "</tr>" +
                    "<tr>" + 
                        "<td colspan=\"5\" style=\"width: 75px; height: 50px\"></td>" +
                    "</tr>" +
                    "<tr>" +
                        "<td colspan=\"5\">" + 
                            "<button id=\"search-btn\" onclick=\"search()\">Search</button>" +
                            "<button id=\"reset-btn\" onclick=\"resetForm()\">Reset</button>" +
                        "</td>" +
                    "</tr>" +
                "</table>";
    }

}