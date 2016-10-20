/**
 * EOSS catalog system
 *
 * @summary   Feedback submit button controller opening feedback form window widget
 *
 * @author     Steffen Gebhardt, Thilo Wehrmann
 * @copyright  Copyright 2016, EOSS GmbH
 * @version    1.0.0
 * @license    GPL
 */

Ext.define('EossEOCatalog.view.feedback.FeedbackButtonController', {
    extend: 'Ext.app.ViewController',
    requires: ['EossEOCatalog.view.feedback.FeedbackWindow'],
    alias: 'controller.feedback-feedbackbutton',

     doFeedback: function(){
        var wind = new EossEOCatalog.view.feedback.FeedbackWindow();
        wind.modal = true;
        wind.show();
    }
    
});
