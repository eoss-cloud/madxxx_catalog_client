/**
 * EOSS catalog system
 *
 * @summary   About window panel holding the info grid
 *
 * @author     Steffen Gebhardt, Thilo Wehrmann
 * @copyright  Copyright 2016, EOSS GmbH
 * @version    1.0.0
 * @license    GPL
 */

Ext.define('EossEOCatalog.view.help.HelpWindow', {
    extend: 'Ext.window.Window',
    xtype: 'helpwindow',

    requires: [
        'EossEOCatalog.view.help.HelpView'
    ],


    title: 'ABOUT',
    iconCls: 'fa fa-info-circle',
    width: 500,
    //autoHeight: true,
    layout: 'fit',


    items: [
        {
            xtype: 'helpview'
        }
    ]


});
