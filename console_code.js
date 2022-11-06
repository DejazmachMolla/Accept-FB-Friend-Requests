let xpath = '//span[text()="Confirm"]';
let matchingElements = document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null);
let requests = [];

let request = matchingElements.iterateNext();
while(request) {
    requests.push(request);
    request = matchingElements.iterateNext();
}


requests.forEach(req => req.click());