/**
 * Created by sgebhardt on 19.09.16.
 */


Ext.define('EossEOCatalog.store.AggregateTileCloud', {
    extend: 'Ext.data.Store',
    requires: ['EossEOCatalog.utilities.BaseUrls'],
    alias: 'store.aggregatetilecloud',
    model: 'EossEOCatalog.model.AggregateTileCloud',
    autoLoad: false,
    proxy: {
        type: 'ajax',
        api: {
            read: EossEOCatalog.utilities.BaseUrls.catalog_search_summary_url

        },
        reader: {
            type: 'json',
            rootProperty: 'found_tiles',
            successProperty: 'success'
        },
        actionMethods: {
            read: "GET"
        },
        headers : {
        'Content-Type' : 'application/json;charset=utf-8'
        }

    }
    ,
        listeners: {
            load: function (store) {
                Ext.getCmp('aggregatetilecloudpolarchart').redraw();
                //Ext.getCmp('aggregatetilecloudpolarchart').setVisible(true);
                Ext.getCmp('aggregatetilecloudcartesianchart').setVisible(true);

            },
            beforeload: function(){

                // Ext.getCmp('aggregatetilecloudpolarchart').getStore().clearData();
                //Ext.getCmp('aggregatetilecloudpolarchart').setVisible(false);
                // Ext.getCmp('aggregatetilecloudcartesianchart').setVisible(false);

            }
        }

});

