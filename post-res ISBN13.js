

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});


var responseXml = pm.response.text()
var parseXmlRes = xml2Json(responseXml)
var parseXmlReq = xml2Json(pm.request.body.raw)
var reqISBN = parseXmlReq['soap:Envelope']['soap:Body']['IsValidISBN13']['sISBN'];

pm.test("Response contains SOAP Envelope", function () {
    pm.expect(responseXml).to.include('<soap:Envelope');
});

pm.test("Response contains SOAP Body", function () {
    pm.expect(responseXml).to.include('<soap:Body');
});

pm.test("Response contains IsValidISBN13Response", function () {
    pm.expect(responseXml).to.include('<m:IsValidISBN13Response');
});

pm.test("Response contains IsValidISBN13Result", function () {
    pm.expect(responseXml).to.include('<m:IsValidISBN13Result');
});

pm.test("ISBN13 validation result is correct", function () {
    var isValidISBN13 = parseXmlRes['soap:Envelope']['soap:Body']['m:IsValidISBN13Response']['m:IsValidISBN13Result'];
    if(reqISBN == "978-1-4612-9090-2"){
            pm.expect(isValidISBN13).to.eql('true');}
            else {pm.expect(isValidISBN13).to.eql('false');}
   
});

pm.test("ISBN13 validation result is boolean", function () {
    var isValidISBN13 = parseXmlRes['soap:Envelope']['soap:Body']['m:IsValidISBN13Response']['m:IsValidISBN13Result'];
    pm.expect(isValidISBN13).to.be.oneOf(['true', 'false']);
});

pm.test("Response contains correct namespace", function () {
    pm.expect(responseXml).to.include('xmlns:m="http://webservices.daehosting.com/ISBN"');
});
pm.test("Response contains correct schema link",function(){
    pm.expect(responseXml).to.include('xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"')
}
)
pm.test("Content-Type is XML", function () {
    pm.response.to.have.header("Content-Type", "text/xml; charset=utf-8");
});


var num = pm.collectionVariables.get("number")
if(num && num.length > 0){
    pm.execution.setNextRequest("Is Valid ISBN13 Number");
    }else {pm.collectionVariables.unset("number");
    pm.execution.setNextRequest("Is Valid ISBN10 Number")}
