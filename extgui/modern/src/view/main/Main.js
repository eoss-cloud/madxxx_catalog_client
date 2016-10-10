Ext.define('EossEOCatalog.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'app-main',

    requires: [
        'EossEOCatalog.view.main.MainController',
        'EossEOCatalog.view.main.MainModel',
        'EossEOCatalog.utilities.BaseUrls',
        'EossEOCatalog.view.main.LeftPanel',
        'EossEOCatalog.view.header.Header',
        'EossEOCatalog.view.header.Footer',
        'EossEOCatalog.view.main.ViewPanel'
    ],

    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },
    defaults: {
        split: false
    },

    items: [{
        region: 'north',
        items: [{
            xtype: 'app-header'
        }]
    }, {
        region: 'west',
        width: 480,
        //flex: .4,
        layout: 'fit',
        items: [
            {xtype: 'main-left'}
        ]
    }, {
        region: 'center',
        //layout: 'fit',
        width: 420,
        flex: 0.5,
        items: {
            xtype: 'aggregatetilecloudpanel',
            title: 'Summary'
        }
    }, {
        region: 'east',
        height: innerHeight * .7,
        width: innerWidth * .8,
        flex: .65,
        //flex: 1,
        layout: 'fit',
        items: [{
            xtype: 'viewpanel'
        }]
    }, {
        region: 'south',
        height: 30,
        items: [{
            xtype: 'app-footer'
        }]

    }]
});
