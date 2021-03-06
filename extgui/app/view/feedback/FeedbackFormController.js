/**
 * EOSS catalog system
 *
 * @summary   Controller of the feedback form window realising feadback post
 *
 * @author     Steffen Gebhardt, Thilo Wehrmann
 * @copyright  Copyright 2016, EOSS GmbH
 * @version    1.0.0
 * @license    GPL
 */

Ext.define('EossEOCatalog.view.feedback.FeedbackFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.feedback-feedbackform',

    submitFeedback: function () {

        var form = Ext.ComponentQuery.query("feedbackformpanel")[0];
        if (form.isValid()) {

            form.submit({
                method: 'POST',
                url: EossEOCatalog.utilities.BaseUrls.doorbell,
                waitMsg: 'Send feedback...',

                success: function (form, action) {
                    Ext.Msg.alert('Success', action.response.responseText);

                },

                failure: function (form, action) {
                    if (action.response.status == '201') {

                        Ext.Msg.alert('Success', action.response.responseText);
                        var win = Ext.ComponentQuery.query("feedbackwindow")[0];
                        win.close()


                    }
                    else {
                        Ext.Msg.alert('Error', action.response.responseText);
                    }



                }
            });
        }
    }

});
