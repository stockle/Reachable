var autoExpand = function (field) {
	// thanks Chris and Tommy
	// https://gomakethings.com/automatically-expand-a-textarea-as-the-user-types-using-vanilla-javascript/

	// Reset field height
	field.style.height = 'inherit';

	// Get the computed styles for the element
	var computed = window.getComputedStyle(field);

	// Calculate the height
	var height = parseInt(computed.getPropertyValue('border-top-width'), 10)
	             + parseInt(computed.getPropertyValue('padding-top'), 10)
	             + field.scrollHeight
	             + parseInt(computed.getPropertyValue('padding-bottom'), 10)
	             + parseInt(computed.getPropertyValue('border-bottom-width'), 10);

	field.style.height = height + 'px';
};

function save_entries() {
	chrome.storage.sync.set({
		save_1: document.getElementById('entry_1').value,
		save_2: document.getElementById('entry_2').value,
		save_3: document.getElementById('entry_3').value
	});
}

function init_entries() {
	chrome.storage.sync.get(['save_1', 'save_2', 'save_3'], function(result) {
		document.getElementById('entry_1').value = result.save_1;
		document.getElementById('entry_2').value = result.save_2;
		document.getElementById('entry_3').value = result.save_3;
	});
}

document.addEventListener('DOMContentLoaded', function() {
    var saved = document.getElementById('save_entries');
    saved.addEventListener('click', function() {
    	save_entries();
    });

	init_entries();
});