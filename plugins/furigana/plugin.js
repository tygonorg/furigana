CKEDITOR.plugins.add( 'furigana', {
    icons: 'furigana',
    init: function( editor ) {
        // Plugin logic goes here...
        editor.addCommand( 'furigana', new CKEDITOR.dialogCommand( 'furiganaDialog' ) );
            editor.ui.addButton( 'Furigana', {
            label: 'Insert furigana',
            command: 'furigana',
            toolbar: 'insert'
        });
    }
});
CKEDITOR.dialog.add( 'furiganaDialog', 'plugins/furigana/dialogs/furigana.js' );