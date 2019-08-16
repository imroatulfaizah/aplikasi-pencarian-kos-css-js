/** 
	Visit: Jagowebdev.com 
*/

(function($){
	$(document).ready(function(){
		
		// Show Password
		$('#show-password').click(function()
		{
			if ($(this).hasClass('fa-eye'))
			{
				$('#login-password').attr('type', 'text');
				$(this).removeClass('fa-eye');
				$(this).addClass('fa-eye-slash');
			} else {
				$('#login-password').attr('type', 'password');
				$(this).removeClass('fa-eye-slash');
				$(this).addClass('fa-eye');
			}
		})
		
		// MENU 
		$('#bars').click(function()
		{
			$('#menu-list').slideToggle('fast');
			return false;
		});
	});
})(jQuery);


// PLACEHOLDER IE
if (window.addEventListener)
	window.addEventListener("load", replace_placeholder);
else if (window.attachEvent)
	window.attachEvent("onload", replace_placeholder);
else 
	window.onload = replace_placeholder;

function replace_placeholder () 
{
	var test_input = document.createElement('input');
	
	if (test_input.placeholder == undefined) {
		var inputs = document.getElementsByTagName('input');

		for (i=0; i <= inputs.length; i++)
		{
			var input = inputs[i];
			if (input == undefined)
				continue;

			if (input.hasAttribute('placeholder'))
			{				
				var placeholder_text = input.getAttribute('placeholder'),
					input_type = input.getAttribute('type');
					
				input.value = placeholder_text;
				input.placeholder_text = placeholder_text;
				input.input_type = input_type;
				
				if (input_type == 'password')
					input.setAttribute('type', 'text');
				
				var focus_function = function(e)
				{
					if (this.value == this.placeholder_text) {
						this.value = '';
					}
					
					if (this.input_type == 'password') {
						this.setAttribute('type', 'password');
					}
				}
				addEvent(input, 'focus', focus_function);
				
				var blur_function = function(e)
				{
					if (this.value == '') {
						this.value = this.placeholder_text;
					}
					if (this.input_type == 'password') {
						this.setAttribute('type', 'text');
					}
				}
				
				addEvent(input, 'blur', blur_function);
			}
		}
	}
}

// Source: http://ejohn.org/apps/jselect/event.html
function addEvent(elm, type, fn)
{
	if (elm.attachEvent)
	{
		elm['e'+type+fn] = fn;
		elm[type+fn] = function(){ elm['e'+type+fn]( window.event ); }
		elm.attachEvent( 'on'+type, elm[type+fn] );
	} else {
		elm.addEventListener(type, fn, false);
	}
}

function removeEvent() {
	if ( obj.detachEvent ) {
		obj.detachEvent( 'on'+type, obj[type+fn] );
		obj[type+fn] = null;
	} else {
		obj.removeEventListener( type, fn, false );
	}
}