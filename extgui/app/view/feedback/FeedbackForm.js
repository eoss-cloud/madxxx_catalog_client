/**
 * EOSS catalog system
 *
 * @summary   Feedback form window for submission of user feedack
 *
 * @author     Steffen Gebhardt, Thilo Wehrmann
 * @copyright  Copyright 2016, EOSS GmbH
 * @version    1.0.0
 * @license    GPL
 */

Ext.define('EossEOCatalog.view.feedback.FeedbackForm', {
    extend: 'Ext.form.Panel',
    xtype: 'feedbackformpanel',

    requires: [
        'EossEOCatalog.view.feedback.FeedbackFormController', 'EossEOCatalog.utilities.BaseUrls'
    ],

    controller: 'feedback-feedbackform',
    margin: '25 25 25 25',



    items: [{
        xtype: 'textfield',
        name: 'name',
        fieldLabel: 'Name',
        allowBlank: false  // requires a non-empty value
    }, {
        xtype: 'textfield',
        name: 'email',
        fieldLabel: 'Email Address',
        vtype: 'email'  // requires value to be a valid email address format
    }, {
        xtype: 'textarea',
        name: 'message',
        fieldLabel: 'Feedback',
        allowBlank: false,
        width: 400,
        bodyPadding: 10
    }
    ],
    buttons: [
        {
            text: 'Reset',
            handler: function () {
                this.up('form').getForm().reset();
            }
        },
        {
            text: 'Submit',
            listeners: {click: 'submitFeedback'}
        }
    ]
});
