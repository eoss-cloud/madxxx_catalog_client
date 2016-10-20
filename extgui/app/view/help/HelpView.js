/**
 * EOSS catalog system
 *
 * @summary   Panel widget representing app info
 *
 * @author     Steffen Gebhardt, Thilo Wehrmann
 * @copyright  Copyright 2016, EOSS GmbH
 * @version    1.0.0
 * @license    GPL
 */

Ext.define('EossEOCatalog.view.help.HelpView', {
    extend: 'Ext.grid.Panel',
    xtype: 'helpview',

    requires: [
        'EossEOCatalog.store.About'
    ],


    store: {
        type: 'about'
    },

    width: 500,
    margin: '25 25 25 25',
    columnLines: true,
    hideHeaders: true,
    disableSelection:true,
    columns: [
        {
            flex: .3,
            dataIndex: 'category',
            xtype: 'templatecolumn',
            tpl: '<strong>{category}</strong>',
            sortable: false
        }
        ,
        {
            dataIndex: 'content',

            hidden: false,
            sortable: false,
            flex: 1,
            xtype: 'templatecolumn',
            tpl: '<div style="white-space:normal">{content}</div>',
            // renderer: function (value, metaData) {
            //      return '<div style="white-space:normal">' + value + '</div>';
            //  }


        }
    ]


});
