
class OpeningBankAccount {

    getContent() {

        return "<table id=\"opening-bank-account-form\" class=\"tabular-layout opening-bank-account-view\">" +
                    "<tr>" +
                        "<td class=\"td-label\"> <label for=\"name\">Name:</label> </td>" +
                        "<td> <input id=\"name\" type=\"text\" /> </td>" +                        
                        "<td class=\"field-separator\"></td>" +
                        "<td class=\"td-label\"> <label for=\"national-id\">National ID:</label> </td>" +
                        "<td> <input id=\"national-id\" type=\"text\" /> </td>" +                                           
                    "</tr>" +
                    "<tr class=\"error-row\">" +
                        "<td></td>" +
                        "<td> <span id=\"name_ErrorMessage\"></span> </td>" +
                        "<td class=\"field-separator\"></td>" +
                        "<td></td>" +
                        "<td> <span id=\"national-id_ErrorMessage\"></span> </td>" +                        
                    "</tr>" +
                    "<tr>" +
                        "<td class=\"td-label\"> <label for=\"dob\">Date of birth:</label> </td>" +
                        "<td> <input id=\"dob\" type=\"date\" /> </td>" +     
                        "<td class=\"field-separator\"></td>" +
                        "<td class=\"td-label\"> <label for=\"cell-phone\">Cell phone:</label> </td>" +
                        "<td> <input id=\"cell-phone\" type=\"text\" /> </td>" +
                    "</tr>" +
                    "<tr class=\"error-row\">" +
                        "<td></td>" +
                        "<td> <span id=\"dob_ErrorMessage\"></span> </td>" +
                        "<td class=\"field-separator\"></td>" +
                        "<td></td>" +
                        "<td> <span id=\"cell-phone_ErrorMessage\"></span> </td>" +
                    "</tr>" +
                    "<tr>" +
                        "<td class=\"td-label\"> <label for=\"email\">Email:</label> </td>" +
                        "<td> <input id=\"email\" type=\"text\" /> </td>" +
                        "<td class=\"field-separator\"></td>" +
                        "<td class=\"td-label\"> <label for=\"mailing-address\">Mailing address:</label> </td>" +
                        "<td> <input id=\"mailing-address\" type=\"text\" /> </td>" +
                    "</tr>" +
                    "<tr class=\"error-row\">" +
                        "<td></td>" +
                        "<td> <span id=\"email_ErrorMessage\"></span> </td>" +
                        "<td class=\"field-separator\"></td>" +
                        "<td></td>" +
                        "<td> <span id=\"mailing-address_ErrorMessage\"></span> </td>" +
                    "</tr>" +                    
                    "<tr>" +
                        "<td colspan=\"5\" class=\"form-btns\">" + 
                            "<button id=\"save-btn\" class=\"btn green-btn\" onclick=\"saveBankAccount()\">Save</button>" +
                            "<button id=\"reset-btn\" class=\"btn red-btn\" onclick=\"resetForm()\">Reset</button>" +
                        "</td>" +
                    "</tr>" +
                "</table>";
    }

}