var xhr        = new XMLHttpRequest();
var stylesheet = 'stable.css';

// Place super minified of stable.css here when ready to release (gets fastest reload).
var releaseCSS    = false;

// Load the DEV styles.
if ( ! releaseCSS ) {
	xhr.open( "GET", "/" + stylesheet, false );
	xhr.send();

	chrome.devtools.panels.applyStyleSheet( xhr.responseText );
}

chrome.devtools.panels.applyStyleSheet( releaseCSS );
