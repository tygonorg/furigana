CKEDITOR.dialog.add( 'furiganaDialog', function( editor ) {
    return {
        title: 'Insert furigana!',
        minWidth: 400,
        minHeight: 200,

        contents: [
            {
                id: 'tab-basic',
                label: 'Basic Settings',
                elements: [
                   {
                        type: 'text',
                        id: 'id_furigana',
                        label: 'Input Furigana',
                        validate: CKEDITOR.dialog.validate.notEmpty( "value not Empty!" ),
                        setup: function( element ) {
                            var childrt = element.getChild( 1 );
                            if(childrt){
                                this.setValue( childrt.getText() );
                            } else {
                                var rt = new CKEDITOR.dom.element( 'rt' );
                                element.append( rt );
                                this.setValue( rt.getText() );
                                //childrt = element.getChild( 1 );
                                
                            }
                        },
                        commit: function( element ) {
                            var childrt = element.getChild( 1 );
                            if(childrt){
                                childrt.setText( this.getValue() );
                            } else {
                                var rt = new CKEDITOR.dom.element( 'rt' );
                                rt.setText( this.getValue()  );
                                element.append( rt );
                                //childrt = element.getChild( 1 );
                                
                            }
                        }
                    }
                ]
                
            }
            ],
            onShow: function() {
                var selection = editor.getSelection();
                var element = selection.getStartElement();
                
                if ( element )
                    element = element.getAscendant( 'ruby', true );
                if ( !element || element.getName() != 'ruby' ) {
                    element = editor.document.createElement( 'ruby' );
                    element.setText(selection.getSelectedText());
                    this.insertMode = true;
                } else
                this.insertMode = false;
                this.element = element;
                
                //if ( !this.insertMode )
                this.setupContent( this.element );
                
            },
            onOk: function() {
                    //var selection = editor.getSelection();
                    var dialog = this;
                    var abbr = this.element;
                    this.commitContent( abbr );
                    if ( this.insertMode )
                        editor.insertElement( abbr );
            }
    };
});