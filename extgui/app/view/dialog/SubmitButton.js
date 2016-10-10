
Ext.define('EossEOCatalog.view.dialog.SubmitButton',{
	extend:'Ext.Button',
	xtype:'submitbutton',

    requires: [
        'EossEOCatalog.view.dialog.SubmitButtonController',
        'EossEOCatalog.view.dialog.SubmitButtonModel'
    ],

    controller: 'dialog-submitbutton',
    viewModel: {
        type: 'dialog-submitbutton'
    },

    text: 'Find',
    listeners: {click: 'doSubmit'}

});
