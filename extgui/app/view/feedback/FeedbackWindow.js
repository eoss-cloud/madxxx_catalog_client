/**
 * EOSS catalog system
 *
 * @summary   Feedback form window
 *
 * @author     Steffen Gebhardt, Thilo Wehrmann
 * @copyright  Copyright 2016, EOSS GmbH
 * @version    1.0.0
 * @license    GPL
 */

Ext.define('EossEOCatalog.view.feedback.FeedbackWindow',{
    extend: 'Ext.window.Window',
    xtype: 'feedbackwindow',

    requires: [
        'EossEOCatalog.view.feedback.FeedbackForm'
    ],

    title: 'Feedback',
    iconCls: 'fa fa-comment-o',
    width: 500,
    layout: 'fit',
    items: [{
        xtype: 'feedbackformpanel'
    }]

});
