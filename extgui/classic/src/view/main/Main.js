Ext.define('EossEOCatalog.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'app-main',

    requires: [
        'EossEOCatalog.view.main.MainController',
        'EossEOCatalog.view.main.MainModel',
        'EossEOCatalog.utilities.BaseUrls',
        'EossEOCatalog.view.header.Header',
        'EossEOCatalog.view.header.Footer',
        'EossEOCatalog.view.main.ViewPanel',
        'EossEOCatalog.view.map.MapPanel',
        'EossEOCatalog.view.dialog.Dialog',
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

        items: [
            {
                xtype: 'panel',
                layout: 'hbox',
                items: [
                    {
                        xtype: 'app-header',
                        width: 450
                    }, {
                        xtype: 'projectdialog'
                    }
                ]
            }
        ]
    }, {
        region: 'center',
        layout: 'fit',
        flex: 1,
        items: {
            xtype: 'map-panel',
        }
    }, {
        region: 'east',
        height: innerHeight * .7,
        width: innerWidth * .8,
        flex: .83,
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
