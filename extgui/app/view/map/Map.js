Ext.define('EossEOCatalog.view.map.Map', {
    extend: 'GeoExt.component.Map',
    id: 'mappanel',
    xtype: 'mappanel',
    requires: [
        'EossEOCatalog.view.map.MapController',
        'EossEOCatalog.view.map.MapModel'
    ],

    controller: 'map-map',
    viewModel: {
        type: 'map-map'
    },

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
            // projection: 'EPSG:4326',
            center: ol.proj.fromLonLat([12.499167, 51.828333]),
            //center: ol.proj.fromLonLat([Math.random() * 340 - 160, Math.random() * 160 - 80]),
            zoom: 5
        })
    })
});


