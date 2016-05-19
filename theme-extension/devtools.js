var xhr        = new XMLHttpRequest();
var stylesheet = 'stable.css';

// Place super minified of stable.css here when ready to release (gets fastest reload).
var release51916 = false;

// Load the DEV styles.
if ( ! release51916 ) {
	xhr.open( "GET", "/" + stylesheet, false );
	xhr.send();

	chrome.devtools.panels.applyStyleSheet( xhr.responseText );
}

chrome.devtools.panels.applyStyleSheet( release51916 );
