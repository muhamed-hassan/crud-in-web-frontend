
class OpeningBankAccount {

    getContent() {

        return "<table id=\"opening-bank-account-form\" class=\"tabular-layout opening-bank-account-view\">" +
                    "<tr>" +
                        "<td> <label for=\"name\">Name:</label> </td>" +
                        "<td> <input id=\"name\" type=\"text\" /> </td>" +
                        "<td style=\"width: 75px;\"></td>" +
                        "<td> <label for=\"dob\">Date of birth:</label> </td>" +
                        "<td> <input id=\"dob\" type=\"date\" /> </td>" +
                    "</tr>" +
                    "<tr>" +
                        "<td> <label for=\"national-id\">National ID:</label> </td>" +
                        "<td> <input id=\"national-id\" type=\"text\" /> </td>" +
                        "<td style=\"width: 75px;\"></td>" +
                        "<td> <label for=\"cell-phone\">Cell phone:</label> </td>" +
                        "<td> <input id=\"cell-phone\" type=\"text\" /> </td>" +
                    "</tr>" +
                    "<tr>" +
                        "<td> <label for=\"email\">Email:</label> </td>" +
                        "<td> <input id=\"email\" type=\"text\" /> </td>" +
                        "<td style=\"width: 75px;\"></td>" +
                        "<td> <label for=\"mailing-address\">Mailing address:</label> </td>" +
                        "<td> <input id=\"mailing-address\" type=\"text\" /> </td>" +
                    "</tr>" +
                    "<tr>" + 
                        "<td colspan=\"5\" style=\"width: 75px; height: 50px\"></td>" +
                    "</tr>" +
                    "<tr>" +
                        "<td colspan=\"5\">" + 
                            "<button id=\"save-btn\" onclick=\"saveBankAccount()\">Save</button>" +
                            "<button id=\"reset-btn\" onclick=\"resetForm()\">Reset</button>" +
                        "</td>" +
                    "</tr>" +
                "</table>";
    }

}