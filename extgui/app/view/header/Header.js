/**
 * EOSS catalog system
 *
 * Header container widget
 *
 * @summary   Header container widget
 *
 * @author     Steffen Gebhardt, Thilo Wehrmann
 * @copyright  Copyright 2016, EOSS GmbH
 * @version    1.0.0
 * @license    GPL
 */

document.title = 'EOSS Image Catalog';
document.subtitle = 'Get the images that suit your project';

Ext.define('EossEOCatalog.view.header.Header', {
    extend: 'Ext.Container',

    xtype: 'app-header',

    title: document.title,
    cls: 'app-header',
    height: 52,

    layout: {
        type: 'hbox',
        align: 'middle'
    },

    items: [{
        xtype: 'panel',
        html: ' ',
        width: 50
    },{
        xtype: 'component',
        cls: 'app-header-logo',
        width: 150
    },{
        xtype: 'component',
        cls: 'app-header-title',
        html: document.title,
        flex: 0.3
    }
    // ,{
    //     xtype: 'component',
    //     cls: 'app-header-subtitle',
    //     html: 'hrlp',
    //     flex: .1
    // }
    ]
});
