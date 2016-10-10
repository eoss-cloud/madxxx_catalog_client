Ext.define('EossEOCatalog.view.dialog.GeoAutoTextController', {
    extend: 'Ext.app.ViewController',
    requires: ['EossEOCatalog.utilities.Util','EossEOCatalog.utilities.BaseUrls'],
    alias: 'controller.dialog-geoautotext',

    onTextEdit: function (record) {

        input = record.rawValue;
        //console.log(input)
        var store = this.getView().getStore();
        store.getProxy().setExtraParam("entity_name", input);
        store.load();


    },
    onSelect: function (record) {

        //var group_id = record.value;
        var entity_id = record.rawValue;

        store = record.getStore();

        var entity = store.findRecord('entity_id', entity_id);
        var reference_id = entity.get('reference_id');
        var group_id = entity.get('group_id');

        var requesturl = entity.get('resource_geojson');
        EossEOCatalog.utilities.Util.ol_addregionlayer(requesturl,EossEOCatalog.utilities.Util.regionlayername);




    }

});
