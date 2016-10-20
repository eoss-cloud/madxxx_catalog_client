/**
 * Class with functions for OpenLayers vector layer styling
 *
 * @summary   Class with functions for OpenLayers vector layer styling
 *
 * @author     Steffen Gebhardt, Thilo Wehrmann
 * @copyright  Copyright 2016, EOSS GmbH
 * @version    1.0.0
 * @license    GPL
 */

/**
 * Created by sgebhardt on 14.09.16.
 */



Ext.define('EossEOCatalog.utilities.Map', {
    requires: [],
    singleton: true,

    simple_vector_style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'black',
            width: 1
        }),
        fill: new ol.style.Fill({
            color: 'rgba(100, 120, 140, 0.3)'
        })
    }),


    dataset_vector_style: function (feature, resolution) {
        var styles = [
            new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: '#14911c',
                    width: 2
                }),
                fill: new ol.style.Fill({
                    color: 'rgba(0, 0, 255, 0.1)'
                }),
                text: new ol.style.Text({
                    text: feature.get('count').toString(),
                    font: '18px Calibri,sans-serif',
                    fill: new ol.style.Fill({
                        color: '#fff'
                    }),
                    stroke: new ol.style.Stroke({
                        color: '#fff',
                        width: 0
                    })
                })
            }),

            new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: 'black',
                    width: 1
                })
            }),

            new ol.style.Style({
                image: new ol.style.Circle({
                    radius: 15,
                    stroke: new ol.style.Stroke({
                        color: '#14911c',
                        width: 4
                    }),
                    fill: new ol.style.Fill({
                        color: 'rgba(0, 100, 0, 0.4)'
                    }),
                }),
                geometry: function (feature) {
                    var extent = feature.getGeometry().getExtent();
                    var center = ol.extent.getCenter(extent);
                    return new ol.geom.Point(center)
                }
            })
        ];

        return styles;
    },

    dataset_selection_style: function (feature, resolution) {
        var styles = [
            new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: '#ff0000',
                    width: 2
                }),
                fill: new ol.style.Fill({
                    color: 'rgba(255, 0, 0, 0.1)'
                }),
                text: new ol.style.Text({
                    text: feature.get('count').toString(),
                    font: '18px Calibri,sans-serif',
                    fill: new ol.style.Fill({
                        color: '#fff'
                    }),
                    stroke: new ol.style.Stroke({
                        color: '#fff',
                        width: 0
                    })
                })
            }),

            new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: '#610B0B',
                    width: 1
                })
            }),

            new ol.style.Style({
                image: new ol.style.Circle({
                    radius: 15,
                    stroke: new ol.style.Stroke({
                        color: '#ff0000',
                        width: 4
                    }),
                    fill: new ol.style.Fill({
                        color: 'rgba(255, 0, 0, 0.4)'
                    }),
                }),
                geometry: function (feature) {
                    var extent = feature.getGeometry().getExtent();
                    var center = ol.extent.getCenter(extent);
                    return new ol.geom.Point(center)
                }
            })
        ];

        return styles;

    }


})
