
class UpdatingBankAccount {

    getContent(userInfoReadModel) {

        return "<table id=\"updating-bank-account-form\" class=\"tabular-layout updating-bank-account-view\">" +
                    "<tr>" +
                        "<td> <label for=\"cell-phone\">Cell phone:</label> </td>" +
                        "<td> <input id=\"cell-phone\" type=\"text\" value=\"" + userInfoReadModel.cellPhone + "\"/> </td>" +
                        "<td style=\"width: 75px;\"></td>" +
                        "<td> <label for=\"email\">Email:</label> </td>" +
                        "<td> <input id=\"email\" type=\"text\" value=\"" + userInfoReadModel.email + "\"/> </td>" +
                    "</tr>" +
                    "<tr>" +
                        "<td> <label for=\"mailing-address\">Mailing address:</label> </td>" +
                        "<td> <input id=\"mailing-address\" type=\"text\" value=\"" + userInfoReadModel.mailingAddress + "\"/> </td>" +
                        "<td colspan=\"3\" style=\"width: 75px;\"></td>" +                            
                    "</tr>" +
                    "<tr>" + 
                        "<td colspan=\"5\" style=\"width: 75px; height: 50px\"></td>" +
                    "</tr>" +
                    "<tr>" +
                        "<td colspan=\"5\">" + 
                            "<button id=\"update-btn\" onclick=\"updateBankAccount()\">Update</button>" +
                            "<button id=\"reset-btn\" onclick=\"resetForm()\">Reset</button>" +
                        "</td>" +
                    "</tr>" +
                "</table>";
    }

}