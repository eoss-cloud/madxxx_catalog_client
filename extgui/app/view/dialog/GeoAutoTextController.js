/**
 * EOSS catalog system
 *
 * Controller for the autocomplete text box implementing on text edit and selection callback functions
 *
 * @summary   Controller for the autocomplete text box
 *
 * @author     Steffen Gebhardt, Thilo Wehrmann
 * @copyright  Copyright 2016, EOSS GmbH
 * @version    1.0.0
 * @license    GPL
 */

Ext.define('EossEOCatalog.view.dialog.GeoAutoTextController', {
    extend: 'Ext.app.ViewController',
    requires: ['EossEOCatalog.utilities.Util','EossEOCatalog.utilities.BaseUrls'],
    alias: 'controller.dialog-geoautotext',

    onTextEdit: function (record) {

        input = record.rawValue;

        var store = this.getView().getStore();
        store.getProxy().setExtraParam("pattern", input);
        store.load();


    },
    onSelect: function (record) {

        //var group_id = record.value;
        var reference = record.rawValue;

        store = record.getStore();


        var reference = store.findRecord('reference', reference);
        var reference_name = reference.get('reference');
        var reference_type = reference.get('reference_type');
        var reference_id = reference.get('reference_id');
        Ext.state.Manager.set("reference_type",reference_type);

        var requesturl = EossEOCatalog.utilities.BaseUrls.georeference_geojson_url;
        requesturl = requesturl + reference_type + '/' + reference_id+ '.geojson'
        EossEOCatalog.utilities.Util.ol_addregionlayer(requesturl,EossEOCatalog.utilities.Util.regionlayername);



    }

});
