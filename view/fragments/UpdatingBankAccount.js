
class UpdatingBankAccount {

    getContent(userInfoReadModel) {

        return "<table id=\"updating-bank-account-form\" class=\"tabular-layout updating-bank-account-view\">" +
                    "<tr>" +
                        "<td class=\"td-label\"> <label for=\"cell-phone\">Cell phone:</label> </td>" +
                        "<td> <input id=\"cell-phone\" type=\"text\" value=\"" + userInfoReadModel.cellPhone + "\"/> </td>" +
                        "<td class=\"field-separator\"></td>" +
                        "<td class=\"td-label\"> <label for=\"email\">Email:</label> </td>" +
                        "<td> <input id=\"email\" type=\"text\" value=\"" + userInfoReadModel.email + "\"/> </td>" +
                    "</tr>" +
                    "<tr class=\"error-row\">" +
                        "<td></td>" +
                        "<td> <span id=\"cell-phone_ErrorMessage\"></span> </td>" +
                        "<td class=\"field-separator\"></td>" +
                        "<td></td>" +
                        "<td> <span id=\"email_ErrorMessage\"></span> </td>" +
                    "</tr>" +
                    "<tr>" +
                        "<td class=\"td-label\"> <label for=\"mailing-address\">Mailing address:</label> </td>" +
                        "<td> <input id=\"mailing-address\" type=\"text\" value=\"" + userInfoReadModel.mailingAddress + "\"/> </td>" +
                        "<td></td>" +
                        "<td></td>" +
                        "<td></td>" +                         
                    "</tr>" +
                    "<tr class=\"error-row\">" +
                        "<td></td>" +
                        "<td> <span id=\"mailing-address_ErrorMessage\"></span> </td>" +
                        "<td></td>" +
                        "<td></td>" +
                        "<td></td>" +
                    "</tr>" +  
                    "<tr>" +
                        "<td colspan=\"5\" class=\"form-btns\">" + 
                            "<button id=\"update-btn\" class=\"btn green-btn\" onclick=\"updateBankAccount()\">Update</button>" +
                            "<button id=\"reset-btn\" class=\"btn red-btn\" onclick=\"resetForm()\">Reset</button>" +
                        "</td>" +
                    "</tr>" +
                "</table>";
    }

}