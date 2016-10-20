/**
 * EOSS catalog system
 *
 * Footer container widget
 *
 * @summary   Footer container widget
 *
 * @author     Steffen Gebhardt, Thilo Wehrmann
 * @copyright  Copyright 2016, EOSS GmbH
 * @version    1.0.0
 * @license    GPL
 */

/**
 * Created by sgebhardt on 16.09.16.
 */

Ext.define('EossEOCatalog.view.header.Footer', {
    extend: 'Ext.Container',
    requires: ['EossEOCatalog.view.help.HelpButton', 'EossEOCatalog.view.feedback.FeedbackButton'],

    xtype: 'app-footer',
    // bodyStyle: 'margin: 10px; padding: 5px 3px;',
    title: document.title,
    cls: 'app-footer',
    //height: 52,

    layout: {
        type: 'hbox',
        align: 'middle'
    },

    items: [{
        xtype: 'panel',
        html: ' ',
        width: 50
    }, {
        xtype: 'component',
        cls: 'app-footer-logo',
        width: 50
    }, {
        xtype: 'component',
        cls: 'app-footer-text',
        html: ' &copy; Earth Observation Solutions and Services <a href="http://www.eoss.cloud" target="_blank">EOSS</a> GmbH',
        flex: 0.3
    }, {
        xtype: 'feedbackbutton',
        width: 25
    }, {
        xtype: 'tbspacer', width: 5
    }, {
            xtype: 'helpbutton',
            width: 25
    }, {
        xtype: 'tbspacer', width: 5
    }
    ]
});