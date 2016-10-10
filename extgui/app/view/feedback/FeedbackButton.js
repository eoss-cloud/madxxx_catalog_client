
Ext.define('EossEOCatalog.view.feedback.FeedbackButton',{
    extend:'Ext.Button',
    xtype: 'feedbackbutton',

    requires: [
        'EossEOCatalog.view.feedback.FeedbackButtonController'
    ],

    controller: 'feedback-feedbackbutton',


    iconCls: 'fa fa-comment-o',
    listeners: {click: 'doFeedback'}
});
