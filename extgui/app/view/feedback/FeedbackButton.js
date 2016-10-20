/**
 * EOSS catalog system
 *
 * @summary   Feedback window button
 *
 * @author     Steffen Gebhardt, Thilo Wehrmann
 * @copyright  Copyright 2016, EOSS GmbH
 * @version    1.0.0
 * @license    GPL
 */

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
