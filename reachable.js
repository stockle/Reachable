chrome.commands.onCommand.addListener(function(command) {
	let index = command.split("_").pop();
	chrome.storage.sync.get(['save_'+index], function(result) {
		let text = result['save_'+index];

		document.activeElement.focus();
		document.execCommand("insertText", false, text);
	});
});

function save_entries() {
	chrome.storage.sync.set({save_1: document.getElementById('entry_1').value});
	chrome.storage.sync.set({save_2: document.getElementById('entry_2').value});
	chrome.storage.sync.set({save_3: document.getElementById('entry_3').value});
}

document.addEventListener('DOMContentLoaded', function() {
    var saved = document.getElementById('save_entries');
    saved.addEventListener('click', function() {
    	save_entries();
    });
});