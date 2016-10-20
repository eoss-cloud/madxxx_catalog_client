/**
 * EOSS catalog system
 *
 * Form submit button for sensor selection
 *
 * @summary   Form submit button for sensor selection
 *
 * @author     Steffen Gebhardt, Thilo Wehrmann
 * @copyright  Copyright 2016, EOSS GmbH
 * @version    1.0.0
 * @license    GPL
 */

Ext.define('EossEOCatalog.view.dialog.SubmitButton',{
	extend:'Ext.Button',
	xtype:'submitbutton',

    requires: [
        'EossEOCatalog.view.dialog.SubmitButtonController'
    ],

    controller: 'dialog-submitbutton',


    text: 'Find',
    listeners: {click: 'doSubmit'}

});
