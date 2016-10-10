
Ext.define('EossEOCatalog.view.main.LeftPanel',{
    extend: 'Ext.panel.Panel',
    xtype: 'main-left',

    requires: [
        'EossEOCatalog.view.main.LeftPanelController',
        'EossEOCatalog.view.main.LeftPanelModel',
        'EossEOCatalog.view.dialog.Dialog',
        'EossEOCatalog.view.map.MapPanel',
        'EossEOCatalog.view.charts.AggregateTileCloud'
    ],

    controller: 'main-leftpanel',
    viewModel: {
        type: 'main-leftpanel'
    },

    items: [{
        xtype: 'projectdialog',
        title:'Search'
    // },{
    //     xtype: 'map-panel',
    //     title: 'Overview',
    //     height: 500,
    //     border: 1

    }]
});
