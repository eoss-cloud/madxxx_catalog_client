/**
 * EOSS catalog system
 *
 * @summary   OpenLayers map panel
 *
 * @author     Steffen Gebhardt, Thilo Wehrmann
 * @copyright  Copyright 2016, EOSS GmbH
 * @version    1.0.0
 * @license    GPL
 */


Ext.define('EossEOCatalog.view.map.Map', {
    extend: 'GeoExt.component.Map',
    id: 'mappanel',
    xtype: 'mappanel',


    map: new ol.Map({
        layers: [
            new ol.layer.Tile({
                source: new ol.source.Stamen({
                    layer: 'watercolor'
                })
            }),
            new ol.layer.Tile({
                source: new ol.source.Stamen({
                    layer: 'terrain-labels'
                })
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([12.499167, 51.828333]),
            //center: ol.proj.fromLonLat([Math.random() * 340 - 160, Math.random() * 160 - 80]),
            zoom: 5
        })
    })
});


