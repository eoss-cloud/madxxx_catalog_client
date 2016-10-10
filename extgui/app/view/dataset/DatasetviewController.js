Ext.define('EossEOCatalog.view.dataset.DatasetviewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.dataset-datasetview',
    requires: ['EossEOCatalog.utilities.Util'],

    onMouseEnter: function (sender, record) {
        EossEOCatalog.utilities.Util.ol_highlightfeatures(record.get('tile_identifier'))
    },
    onMouseLeave: function (sender, record) {
        //EossEOCatalog.utilities.Util.dataset_clearFilter();
        EossEOCatalog.utilities.Util.ol_dishighlightfeatures();
    }
    // ,
    // onSelect: function(view, nodes){
    //                 var l = nodes.length,
    //                     s = l !== 1 ? 's' : '';
    //                 Ext.getCmp('orderbutton').setVisible(true);
    //     //Ext.getCmp('aggregatetilecloudpolarchart').setVisible(true);
    // }
});
