
Ext.define('EossEOCatalog.view.feedback.FeedbackWindow',{
    extend: 'Ext.window.Window',
    xtype: 'feedbackwindow',

    requires: [
        'EossEOCatalog.view.feedback.FeedbackWindowController','EossEOCatalog.view.feedback.FeedbackForm'
    ],

    controller: 'feedback-feedbackwindow',

    title: 'Feedback',
    iconCls: 'fa fa-comment-o',
    width: 500,
    layout: 'fit',
    items: [{
        xtype: 'feedbackformpanel'
    }]

});
