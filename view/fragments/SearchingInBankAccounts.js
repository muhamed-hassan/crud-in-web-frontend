
class SearchingInBankAccounts {

    getContent() {

        return "<table id=\"searching-in-bank-accounts-form\" class=\"tabular-layout searching-in-bank-accounts-view\">" +
                    "<tr>" +
                        "<td class=\"td-label\"> <label for=\"national-id\">National ID:</label> </td>" +
                        "<td> <input id=\"national-id\" type=\"text\" /> </td>" +
                    "</tr>" +
                    "<tr class=\"error-row\">" +
                        "<td></td>" +
                        "<td> <span id=\"national-id_ErrorMessage\"></span> </td>" +
                    "</tr>" +
                    "<tr>" +
                        "<td colspan=\"2\" class=\"form-btns\">" + 
                            "<button id=\"search-btn\" class=\"btn blue-btn\" onclick=\"search()\">Search</button>" +
                            "<button id=\"reset-btn\" class=\"btn red-btn\" onclick=\"resetForm()\">Reset</button>" +
                        "</td>" +
                    "</tr>" +
                "</table>";
    }

}