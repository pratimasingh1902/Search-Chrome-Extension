chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.method && (request.method === "getDOM")) {
		var str = request.search;

		var myHilitor = new Hilitor('body');
		myHilitor.apply(str);
		
        //var html = document.all[0];
        //sendResponse({ "htmlContent": html.innerHTML});
    }
});