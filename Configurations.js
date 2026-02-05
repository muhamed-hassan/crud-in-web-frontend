// Backend service provider base url

var serviceProviderBaseUrl = "http://localhost:8080/";

/* ****************************************************************************************************************** */

// Clients:

var userResourceClient = new UserResourceClient();

/* ****************************************************************************************************************** */

// Fragments:

var home = new Home();
var openingBankAccount = new OpeningBankAccount();
var searchingInBankAccounts = new SearchingInBankAccounts();
var bankAccountDetails = new BankAccountDetails();
var updatingBankAccount = new UpdatingBankAccount();
var removingBankAccount = new RemovingBankAccount();
var viewingBankAccountsUsingPagination = new ViewingBankAccountsUsingPagination();

/* ****************************************************************************************************************** */

// Page titles:

var HOME = "Home";
var OPEN_BANK_ACCOUNT = "Open bank account";
var SEARCH_IN_BANK_ACCOUNTS = "Search in bank accounts";
var VIEW_BANK_ACCOUNT = "View bank account";
var BANK_ACCOUNT_DETAILS = "Bank account details";
var UPDATE_BANK_ACCOUNT = "Update bank account";
var REMOVE_BANK_ACCOUNT = "Remove bank account";
var BANK_ACCOUNTS = "Bank accounts";

/* ****************************************************************************************************************** */

// Notification types:

var SUCCESS = "success";
var WARNING = "warning";

/* ****************************************************************************************************************** */

var PAGE_SIZE = 10;
