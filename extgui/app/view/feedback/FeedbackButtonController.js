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
