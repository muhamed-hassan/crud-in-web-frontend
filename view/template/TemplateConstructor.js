
class TemplateConstructor {

    constructHeader() {

        this.constructSegment("header", "header");
        
        var headerElement = document.getElementById("header");

        var header = new Header();
        headerElement.innerHTML = header.getContent();
    }
    
    constructContent() {

        this.constructSegment("main", "main");

        var main = document.getElementById("main");

        var notificationArea = new NotificationArea();
        var contentArea = new ContentArea();
    
        main.innerHTML = notificationArea.getContent() + contentArea.getContent();
    }
    
    constructFooter() {

        this.constructSegment("footer", "footer");
    }

    constructSegment(elementType, segmentId) {

        var body = document.getElementById("root");
        var element = document.createElement(elementType);
        element.setAttribute("id", segmentId);
        body.appendChild(element);
    }

}