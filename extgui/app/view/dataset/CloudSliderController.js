Ext.define('EossEOCatalog.view.dataset.CloudSliderController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.dataset-cloudslider',

    filterDatasetsByClouds: function(slider){

        var values  = slider.getValues();

        var store = Ext.ComponentQuery.query("datasetview")[0].getStore();
        store.getFilters().replaceAll({
            fn: function(record) {
                return record.get('clouds') >= values[0] && record.get('clouds') <= values[1];
            }
        });
        store.sort('tile_identifier', 'ASC');

        var filtered_count = store.getCount();
        var total_count = store.getTotalCount();

        Ext.ComponentQuery.query("datasetcounter")[0].setHtml(filtered_count + ' out of ' + total_count + ' found datasets')
    }
    
});
