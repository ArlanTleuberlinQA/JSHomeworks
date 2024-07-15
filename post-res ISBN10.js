

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});


var responseXml = pm.response.text()
var parseXmlRes = xml2Json(responseXml)
var parseXmlReq = xml2Json(pm.request.body.raw)
var reqISBN = parseXmlReq['soap:Envelope']['soap:Body']['IsValidISBN10']['sISBN'];

pm.test("Response contains correct XML version and encoding", function () {
    pm.expect(responseXml).to.include('?xml version="1.0" encoding="utf-8"?');
});

pm.test("Web-Service contains DataFlex", function () {
    pm.response.to.have.header("Web-Service", "DataFlex 18.2");
});

var responseDateHeader = pm.response.headers.get('Date');

pm.test("Date header is present", function () {
    pm.expect(responseDateHeader).to.not.be.undefined;
});

pm.test("Date header has correct format", function () {
    var datePattern = /^[A-Za-z]{3}, \d{2} [A-Za-z]{3} \d{4} \d{2}:\d{2}:\d{2} GMT$/;
    pm.expect(responseDateHeader).to.match(datePattern);
});

pm.test("Date header is close to current date", function () {
    var responseDate = new Date(responseDateHeader);
    var currentDate = new Date();
    
    var timeDifference = Math.abs(currentDate - responseDate);
    
    var oneDayInMillis = 3000;
    
    pm.expect(timeDifference).to.be.below(oneDayInMillis);
});

pm.test("ISBN13 validation result is correct", function () {
    var isValidISBN10 = parseXmlRes['soap:Envelope']['soap:Body']['m:IsValidISBN10Response']['m:IsValidISBN10Result'];
    if(reqISBN == "0-19-852663-6"){
            pm.expect(isValidISBN10).to.eql('true');}
            else {pm.expect(isValidISBN10).to.eql('false');}
   
});



pm.test("Content-Type is XML", function () {
    pm.response.to.have.header("Referrer-Policy", "strict-origin-when-cross-origin");
});

pm.test("Content-Type is XML", function () {
    pm.response.to.have.header("Server", "Microsoft-IIS/10.0");
});

pm.test("Content-Type is XML", function () {
    pm.response.to.have.header("Content-Type", "text/xml; charset=utf-8");
});


var num = pm.collectionVariables.get("number")
if(num && num.length > 0){
    pm.execution.setNextRequest("Is Valid ISBN10 Number");
    }else {pm.collectionVariables.unset("number");
    pm.execution.setNextRequest(null)}
