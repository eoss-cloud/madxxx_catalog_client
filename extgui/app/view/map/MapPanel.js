/**
 * EOSS catalog system
 *
 * @summary   Panel holding map widget
 *
 * @author     Steffen Gebhardt, Thilo Wehrmann
 * @copyright  Copyright 2016, EOSS GmbH
 * @version    1.0.0
 * @license    GPL
 */

Ext.define('EossEOCatalog.view.map.MapPanel',{
    extend: 'Ext.panel.Panel',
    xtype: 'map-panel',
    requires: [
        // 'EossEOCatalog.view.map.MapPanelController',
        // 'EossEOCatalog.view.map.MapPanelModel',
        'EossEOCatalog.view.map.Map',
        'GeoExt.component.Map'
    ],

    // controller: 'map-mappanel',
    // viewModel: {
    //     type: 'map-mappanel'
    // },
    layout: 'fit',
    margin: '5 5 5 5',
    items: {
        xtype: 'mappanel'
    }
});
