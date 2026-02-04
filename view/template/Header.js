
class Header {

    getContent() {

        return "<nav>" + 
                    "<ul id=\"nav-bar-options\">" +
                        "<li>" +
                            "<a id=\"back-to-home\" href=\"#\" onclick=\"navigateTo(this)\">" +
                                HOME +
                            "</a>" +
                        "</li>" +
                        "<li>" +
                            "<a id=\"crud-operations-submenu\" href=\"#\" onclick=\"openSubmenu(this)\">" +
                                "CRUD operations" +
                            "</a>" +
                            "<ul id=\"dropdown-menu\">" +
                                "<li>" +
                                    "<a id=\"open-bank-account\" href=\"#\" onclick=\"navigateTo(this)\">" +
                                    OPEN_BANK_ACCOUNT +
                                    "</a>" +
                                "</li>" +
                                "<li>" +
                                    "<a id=\"view-bank-account\" href=\"#\" onclick=\"navigateTo(this)\">" +
                                        VIEW_BANK_ACCOUNT +
                                    "</a>" +
                                "</li>" +
                                "<li>" +
                                    "<a id=\"update-bank-account\" href=\"#\" onclick=\"navigateTo(this)\">" +
                                        UPDATE_BANK_ACCOUNT +
                                    "</a>" +
                                "</li>" +
                                "<li>" +
                                    "<a id=\"remove-bank-account\" href=\"#\" onclick=\"navigateTo(this)\">" +
                                        REMOVE_BANK_ACCOUNT +
                                    "</a>" +
                                "</li>" +
                                "<li>" +
                                    "<a id=\"view-bank-accounts-in-pages\" href=\"#\" onclick=\"navigateTo(this)\">" +
                                        BANK_ACCOUNTS +
                                    "</a>" +
                                "</li>" +
                            "</ul>" +
                        "</li>" +
                    "</ul>" +
                "</nav>";
    }
    
}