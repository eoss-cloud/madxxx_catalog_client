Ext.define('EossEOCatalog.view.help.HelpView', {
    extend: 'Ext.grid.Panel',
    xtype: 'helpview',

    requires: [
        'EossEOCatalog.view.help.HelpViewController',
        'EossEOCatalog.store.About'
    ],

    controller: 'help-helpview',
    //title: 'App info',


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
