window.addEventListener("DOMContentLoaded", function() {
    var inp = document.getElementById("search");
    var btn = document.getElementById("searchBtn");

    btn.addEventListener("click", function() {
        var searchTerm = inp.value;
        if (!inp.value) {
            alert("Please, enter a term to search for !");
        } else {
            chrome.tabs.query({
                active: true,
                currentWindow: true
            }, function(tabs) {
                if (tabs.length > 0) {
                    console.log('send a message...');
                    chrome.tabs.sendMessage(tabs[0].id, {
                        method: "getDOM", search:searchTerm,
                    }, function(response) {
                        if (chrome.runtime.lastError) {
                            console.log("ERROR: ", chrome.runtime.lastError);
                        } else {
                            //alert(response.htmlContent);
                        }
                    });
                }
            });
        }
    });
});