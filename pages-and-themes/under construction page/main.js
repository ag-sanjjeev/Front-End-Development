/*
 ________________________________________________
(           Under Construction Page            ()
\-----------------------------------------------\
|                                               |
|   Copyright 2024 ag-sanjjeev                  |
|                                               |
|-----------------------------------------------|
|   The source code is licensed under           |
|   MIT-style License.                          |
|                                               |
|-----------------------------------------------|
|                                               |
|   The usage, permission and condition         |
|   are applicable to this source code          |
|   as per license.                             |
|                                               |
|-----------------------------------------------|
|                                               |
|   That can be found in LICENSE file           |
|   or at https://opensource.org/licenses/MIT.  |
(_______________________________________________(

*/

// Document ready event
$(document).ready(function() {
	// Animating message words
	// recursive call at intervals
	setInterval(function() {
		if ($('#message-words').children().hasClass('animate__fadeInDown')) {
			$('#message-words').children().removeClass('animate__fadeInDown').addClass('animate__fadeOutDown');
		} else {
			$('#message-words').children().removeClass('animate__fadeOutDown').addClass('animate__fadeInDown');
		}
	}, 5000);
});