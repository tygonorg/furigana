/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	 config.language = 'en';
	 config.allowedContent = true;
   // config.extraAllowedContent = 'ruby(*)[*]{*};rt(*)[*]{*};ruby rt';
    CKEDITOR.dtd.$removeEmpty.i = 0;
    config.fontSize_defaultLabel = '18';   
    config.extraPlugins = 'furigana';
};
