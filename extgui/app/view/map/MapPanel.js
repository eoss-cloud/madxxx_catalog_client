
Ext.define('EossEOCatalog.view.map.MapPanel',{
    extend: 'Ext.panel.Panel',
    xtype: 'map-panel',
    requires: [
        'EossEOCatalog.view.map.MapPanelController',
        'EossEOCatalog.view.map.MapPanelModel',
        'EossEOCatalog.view.map.Map',
        'GeoExt.component.Map'
    ],

    controller: 'map-mappanel',
    viewModel: {
        type: 'map-mappanel'
    },
    layout: 'fit',
    margin: '5 5 5 5',
    items: {
        xtype: 'mappanel'
    }
});
