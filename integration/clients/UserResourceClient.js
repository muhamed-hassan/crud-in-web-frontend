
class UserResourceClient extends HttpClient {

    create(userInfoCreateModel) {  

        var requestUrl = "users";
        var requestHeaders = new Map();
        requestHeaders.set("Content-type", "application/json");
        var requestPayload = JSON.stringify(userInfoCreateModel);
        this.doPost(requestUrl, requestHeaders, requestPayload);
    }

    getBriefViewForUpdateByNationalId(nationalId) {

        var requestUrl = "users/brief-view-for-update/" + nationalId;
        var requestHeaders = new Map();
        requestHeaders.set("Accept", "application/json");
        var response = this.doGet(requestUrl, requestHeaders);        
        var parsedResponse = JSON.parse(response);

        var userInfoReadModelForUpdate = new UserInfoReadModelForUpdate(); 
        userInfoReadModelForUpdate.id = parsedResponse.id;
        userInfoReadModelForUpdate.cellPhone = parsedResponse.cellPhone;
        userInfoReadModelForUpdate.email = parsedResponse.email;
        userInfoReadModelForUpdate.mailingAddress = parsedResponse.mailingAddress;
        
        return userInfoReadModelForUpdate;
    }

    getDetailedViewByNationalId(nationalId) {

        var requestUrl = "users/detailed-view/" + nationalId;
        var requestHeaders = new Map();
        requestHeaders.set("Accept", "application/json");
        var response = this.doGet(requestUrl, requestHeaders);        
        var parsedResponse = JSON.parse(response);

        var detailedUserInfoReadModel = new DetailedUserInfoReadModel(); 
        detailedUserInfoReadModel.id = parsedResponse.id;
        detailedUserInfoReadModel.name = parsedResponse.name;
        detailedUserInfoReadModel.nationalId = parsedResponse.nationalId;
        detailedUserInfoReadModel.dateOfBirth = parsedResponse.dateOfBirth;
        detailedUserInfoReadModel.cellPhone = parsedResponse.cellPhone;
        detailedUserInfoReadModel.email = parsedResponse.email;
        detailedUserInfoReadModel.mailingAddress = parsedResponse.mailingAddress;
        detailedUserInfoReadModel.iban = parsedResponse.iban;
        detailedUserInfoReadModel.balance = parsedResponse.balance;

        return detailedUserInfoReadModel;
    }

    getPage(requestedPageIndex) { 

        var requestUrl = "users?pageIndex=" + requestedPageIndex;
        var requestHeaders = new Map();
        requestHeaders.set("Accept", "application/json");
        
        var response = this.doGet(requestUrl, requestHeaders);        
        var parsedResponse = JSON.parse(response);
        var data = parsedResponse.data;
        var firstPage = parsedResponse.firstPage;
        var lastPage = parsedResponse.lastPage;        

        var collectedElements = new Array();
        for (var cursor = 0; cursor < data.length; cursor++) {
            var briefUserInfoReadModel = new BriefUserInfoReadModel();
            briefUserInfoReadModel.name = data[cursor].name;
            briefUserInfoReadModel.nationalId = data[cursor].nationalId;
            briefUserInfoReadModel.iban = data[cursor].iban;
            briefUserInfoReadModel.balance = data[cursor].balance;
            collectedElements.push(briefUserInfoReadModel);            
        }

        var pageOfUserInfo = new PageOfUserInfo();
        pageOfUserInfo.data = collectedElements;
        pageOfUserInfo.firstPage = firstPage;
        pageOfUserInfo.lastPage = lastPage;

        return pageOfUserInfo;
    }

    update(id, userInfoUpdateModel) {

        var requestUrl = "users/" + id;
        var requestHeaders = new Map();
        requestHeaders.set("Content-type", "application/json");
        var requestPayload = JSON.stringify(userInfoUpdateModel);
        this.doPut(requestUrl, requestHeaders, requestPayload);
    }

    remove(id) {

        var requestUrl = "users/" + id;
        this.doDelete(requestUrl);
    }

}