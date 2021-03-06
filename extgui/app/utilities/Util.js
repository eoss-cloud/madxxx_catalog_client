/**
 * EOSS catalog system
 *
 * Class with functions required in app
 *
 * @summary   Class with functions required in app
 *
 * @author     Steffen Gebhardt, Thilo Wehrmann
 * @copyright  Copyright 2016, EOSS GmbH
 * @version    1.0.0
 * @license    GPL
 */

/**
 * Created by sgebhardt on 09.09.16.
 */

Ext.define('EossEOCatalog.utilities.Util', {
    requires: ['EossEOCatalog.view.map.Map', 'EossEOCatalog.utilities.BaseUrls', 'EossEOCatalog.utilities.Map'],
    singleton: true,
    sometext: 'Hello World',
    regionlayername: 'region',
    datasetlayername: 'datasets',
    total_count: 0,
    filtered_count: 0,
    total_tiles: 0,
    selected_tiles: 0,
    doorbellid: 4584,
    doorbellkey: 'pfW1ZgHBlkp3CCtW7PzEskWsGmUVxCejoABJHxdl5L4kHbtrcGLlQ8TcOKkD3qzR',

    update_datasetcounter: function () {
        Ext.ComponentQuery.query("datasetcounter")[0].setHtml('<div class="scenecounter">' + this.filtered_count + '</div>' + '<div class="sep"> / </div>' + '<div class="scenecounterall">' + this.total_count + '</div>' + '<div class="normal"> scenes in </div>' + '<div class="tilecounter">' + this.selected_tiles + '</div>' + '<div class="sep"> / </div>' + '<div class="tilecounterall">' + this.total_tiles + '</div>' + '<div class="normal"> tiles </div>');
    },

    ol_addregionlayer: function (url, name) {
        var mp = Ext.getCmp("mappanel");
        var map = mp.getMap();
        var layers = map.getLayers();
        for (var i = 0; i < layers.getLength(); i++) {
            if (layers.getArray()[i].text === name) {
                map.removeLayer(layers.getArray()[i]);
            }
        }
        var vectorSource = new ol.source.Vector({
            url: url,
            format: new ol.format.GeoJSON(),
            projection: 'EPSG:4326',
        });
        vectorSource.once('change', function (e) {
            if (vectorSource.getState() === 'ready') {
                var extent = vectorSource.getExtent();
                // extent = ol.proj.transformExtent(extent, 'EPSG:3857', 'EPSG:4326');
                map.getView().fit(extent, map.getSize());
            }
        });
        layer = new ol.layer.Vector({
            name: name,
            source: vectorSource,
            style: EossEOCatalog.utilities.Map.simple_vector_style
        });
        mp.addLayer(layer);
        return layer;
    },

    ol_adddatasetlayer: function (url, name) {

        var mp = Ext.getCmp("mappanel");
        var map = mp.getMap();
        var layers = map.getLayers();
        for (var i = 0; i < layers.getLength(); i++) {
            if (layers.getArray()[i].text === name) {
                map.removeLayer(layers.getArray()[i]);
            }
        }

        map.getInteractions().forEach(function (interaction) {
            if (interaction instanceof ol.interaction.Select) {
                interaction.getFeatures().clear();
                map.removeInteraction(interaction);
            }
        });


        var vectorSource = new ol.source.Vector({
            url: url,
            format: new ol.format.GeoJSON(),
            projection: 'EPSG:4326',
        });
        vectorSource.once('change', function (e) {
            if (vectorSource.getState() === 'ready') {
                var extent = vectorSource.getExtent();
                map.getView().fit(extent, map.getSize());

                EossEOCatalog.utilities.Util.total_tiles = vectorSource.getFeatures().length;
                EossEOCatalog.utilities.Util.selected_tiles = vectorSource.getFeatures().length;
                EossEOCatalog.utilities.Util.update_datasetcounter();
            }
        });


        var style = EossEOCatalog.utilities.Map.dataset_vector_style;
        dslayer = new ol.layer.Vector({
            name: name,
            source: vectorSource,
            style: style
        });
        mp.addLayer(dslayer);

        var select = new ol.interaction.Select({
            condition: ol.events.condition.click,
            //toggleCondition: ol.events.condition.never,
            style: EossEOCatalog.utilities.Map.dataset_selection_style
        });

        select.on('select', function (e) {

            var store = Ext.ComponentQuery.query("datasetview")[0].getStore();
            var features = select.getFeatures();
            var tile_ids = new Array();
            if (features.getLength() > 0) {
                EossEOCatalog.utilities.Util.selected_tiles = features.getLength();
                for (var i = 0; i < features.getLength(); i++) {
                    var feature = features.item(i);
                    var tile_id = feature.get('identifier');
                    tile_ids.push(tile_id)
                }
                store.clearFilter();
                store.filterBy(function (record, id) {
                    return Ext.Array.contains(tile_ids, record.get('tile'));
                });
            } else {
                store.clearFilter();
                EossEOCatalog.utilities.Util.selected_tiles = EossEOCatalog.utilities.Util.total_tiles;

            }

            EossEOCatalog.utilities.Util.filtered_count = store.getCount();
            EossEOCatalog.utilities.Util.total_count = store.getTotalCount();

            //Ext.ComponentQuery.query("datasetcounter")[0].setHtml(this.filtered_count + ' / ' + this.total_count + ' scenes in ' +this.selected_tiles+ ' / ' +this.total_tiles+ ' tiles')
            EossEOCatalog.utilities.Util.update_datasetcounter();

        });

        map.addInteraction(select);

    },

    dataset_filterbyid: function (tile_id) {
        var store = Ext.ComponentQuery.query("datasetview")[0].getStore();
        store.getFilters().replaceAll({
            fn: function (record) {
                return record.get('tile') == tile_id;
            }
        });
        store.sort('acq_date', 'ASC');
    },


    ol_highlightfeatures: function (tile_identifier) {
        var mp = Ext.getCmp("mappanel");
        var map = mp.getMap();
        var layers = map.getLayers();
        var layer;
        for (var i = 0; i < layers.getLength(); i++) {
            if (layers.getArray()[i].text === this.datasetlayername) {
                layer = layers.getArray()[i];
            }
        }
        map.getInteractions().forEach(function (interaction) {
            if (interaction instanceof ol.interaction.Select) {
                var selectedFeatures = interaction.getFeatures();
                selectedFeatures.clear();
                var features = layer.getSource().getFeatures();
                if (features) {
                    for (i = 0; i < features.length; i++) {
                        if (features[i].get('identifier') == tile_identifier) {
                            selectedFeatures.push(features[i]);
                        }
                    }
                }
            }
        });

    },

    ol_dishighlightfeatures: function () {
        //this.dataset_clearFilter();

        var mp = Ext.getCmp("mappanel");
        var map = mp.getMap();
        map.getInteractions().forEach(function (interaction) {
            if (interaction instanceof ol.interaction.Select) {
                interaction.getFeatures().clear();
            }
        });
    },


    submit_datasetquery: function () {
        var formPanel = Ext.ComponentQuery.query("projectdialog")[0];
        var params = formPanel.getValues();
        var o = new Object();

        if (params.sensorcombo === '') {
            console.log('no sensor')

        } else {

            var clouds = params.cloudslider;
            var date_from = params.datefrom;
            var date_to = params.dateto;
            var sensors_values = formPanel.getForm().findField("sensorcombo").getValue();
            var sensors_store = formPanel.getForm().findField("sensorcombo").getStore();
            var sensors = []
            var record = sensors_store.findRecord('id', sensors_values);
            var sensorname = record.get('name');

            var reference_name = formPanel.getForm().findField("geoautotext").getRawValue();
            var reference_id = formPanel.getForm().findField("geoautotext").getValue();
            var reference_type = Ext.state.Manager.get("reference_type");


            o.start_date = date_from;
            o.end_date = date_to;
            o.mission = sensorname;
            o.clouds = clouds;
            o.reference_name = reference_name
            o.referencetype_name = reference_type
            o.reference_id = reference_id;

            var store = Ext.ComponentQuery.query("datasetview")[0].getStore();
            // store.getProxy().setExtraParam('query', Ext.JSON.encode(o));
            store.getProxy().setExtraParam('start_date', o.start_date);
            store.getProxy().setExtraParam('end_date', o.end_date);
            store.getProxy().setExtraParam('clouds', o.clouds);
            store.getProxy().setExtraParam('mission', o.mission);
            store.getProxy().setExtraParam('reference_id', o.reference_id);
            store.getProxy().setExtraParam('referencetype_name', o.referencetype_name);
            store.load();
            store.clearFilter();

            var layerurl = EossEOCatalog.utilities.BaseUrls.catalog_search_geojson_url + '?start_date=' + o.start_date + '&end_date=' + o.end_date + '&mission=' + o.mission + '&reference_id=' + o.reference_id + '&referencetype_name=' + o.referencetype_name + '&clouds=' + o.clouds;
            // var layerurl = EossEOCatalog.utilities.BaseUrls.catalog_search_geojson_url + '?start_date=' + o.start_date + '&end_date=' + o.end_date + '&mission=' + o.mission + '&reference_name=' + o.reference_name + '&referencetype_name=' + o.referencetype_name + '&clouds=' + o.clouds;
            this.ol_adddatasetlayer(layerurl, this.datasetlayername);

            //
            // var csvurl = EossEOCatalog.utilities.BaseUrls.catalog_search_download_csv_url + '?from_date=' + d.start_date + '&to_date=' + d.end_date + '&sensor=' + s.name + '&ref_group=' + region.ref_group + '&ref_id=' + region.ref_id + '&clouds=' + o.clouds;
            // var xlsurl = EossEOCatalog.utilities.BaseUrls.catalog_search_download_xls_url + '?from_date=' + d.start_date + '&to_date=' + d.end_date + '&sensor=' + s.name + '&ref_group=' + region.ref_group + '&ref_id=' + region.ref_id + '&clouds=' + o.clouds;
            //
            // Ext.ComponentQuery.query("datasetdownload")[0].setHtml('<div class="xlsdown"><a href="'+xlsurl+'">xls</a></div> <div class="csvdown"><a href="'+csvurl+'">csv</a></div>' );

        }


    }

})
;