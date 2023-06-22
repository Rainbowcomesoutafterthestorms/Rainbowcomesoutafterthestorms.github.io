(function( $ ) {
	'use strict';

	/**
	 * All of the code for your public-facing JavaScript source
	 * should reside in this file.
	 *
	 * Note: It has been assumed you will write jQuery code here, so the
	 * $ function reference has been prepared for usage within the scope
	 * of this function.
	 *
	 * This enables you to define handlers, for when the DOM is ready:
	 *
	 * $(function() {
	 *
	 * });
	 *
	 * When the window is loaded:
	 *
	 * $( window ).load(function() {
	 *
	 * });
	 *
	 * ...and/or other possibilities.
	 *
	 * Ideally, it is not considered best practise to attach more than a
	 * single DOM-ready or window-load handler for a particular page.
	 * Although scripts in the WordPress core, Plugins and Themes may be
	 * practising this, we should strive to set a better example in our own work.
	 */
	 /**
*
* wpMediaUploader v1.0 2016-11-05
* Copyright (c) 2016 Smartcat
*
*/
jQuery(document).ready(function ($) {
$('.video_url div.fes-fields,.fes_cover_photo div.fes-fields,.audio_url div.fes-fields').addClass('upload-cover-wrapper');

$.wpMediaUploader = function (options) {

var settings = $.extend({

target: '.upload-cover-wrapper', // The class wrapping the textbox
uploaderTitle: 'Select or upload File', // The title of the media upload popup
uploaderButton: 'Set File', // the text of the button in the media upload popup
multiple: false, // Allow the user to select multiple images
buttonText: 'Upload', // The text of the upload button
buttonClass: '.upload-cover-button', // the class of the upload button
previewSize: '150px', // The preview image size
modal: false, // is the upload button within a bootstrap modal ?
buttonStyle: {}, // style the button
}, options);

$(settings.target).append('<a href="#" class="' + settings.buttonClass.replace('.', '') + '">' + settings.buttonText + '</a>');
// $(settings.target).append('<div><br><img src="#" style="display: none; width: ' + settings.previewSize + '"/></div>')  // image thumbnail

$(settings.buttonClass).css(settings.buttonStyle);

$('body').on('click', settings.buttonClass, function (e) {

e.preventDefault();
var selector = $(this).parent(settings.target);
var custom_uploader = wp.media({
title: settings.uploaderTitle,
button: {
text: settings.uploaderButton
},
multiple: settings.multiple
})
.on('select', function () {
var attachment = custom_uploader.state().get('selection').first().toJSON();
selector.find('img').attr('src', attachment.url).show();
selector.find('input').val(attachment.url);
if (settings.modal) {
$('.modal').css('overflowY', 'auto');
}
})
.open();
});


}

$.wpMediaUploader();

});



})( jQuery );
