chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	const command = request.command;
	const index = command.split("_").pop();
	chrome.storage.sync.get(['save_'+index], function(result) {
		let text = result['save_'+index];
		document.activeElement.focus();
		document.execCommand("insertText", false, text);
	});	
});