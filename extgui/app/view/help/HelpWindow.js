Ext.define('EossEOCatalog.view.help.HelpWindow', {
    extend: 'Ext.window.Window',
    xtype: 'helpwindow',

    requires: [
        'EossEOCatalog.view.help.HelpWindowController','EossEOCatalog.view.help.HelpView'
    ],

    controller: 'help-helpwindow',
    title: 'ABOUT',
    iconCls: 'fa fa-info-circle',
    width: 500,
    //autoHeight: true,
    layout: 'fit',


    // html: '<table>' +
    // '<tr>' +
    // '<th align="right">About</th>' +
    // '<td>The EOSS Image Catalog Lite is meant to provide easy and free access to Landsat and Sentinel-2 satellite imagery by enabling simple regional and quality search parameters.</td>' +
    // '</tr>' +
    // '<tr>' +
    // '<th align="right">License</th>' +
    // '<td>The EOSS Image Catalog Lite is licensed under GPLv3 license. Source code is available at https://bitbucket.org/madxxx/madxxx</td>' +
    // '</tr>' +
    // // '<tr>' +
    // // '<th align="right">Credits</th>' +
    // // '<td>Sencha ExtJs (https://www.sencha.com/products/extjs/#overview), OpenLayers3 (), GeoExt3 (), Bla ()</td>' +
    // // '</tr>' +
    // '</table>'

    items: [
        {
            xtype: 'helpview'
        }
    ]


});
