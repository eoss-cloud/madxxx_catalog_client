/**
 * Created by sgebhardt on 09.09.16.
 */

Ext.define('EossEOCatalog.store.Sensors', {
    extend: 'Ext.data.Store',
    requires: ['EossEOCatalog.utilities.BaseUrls'],
    alias: 'store.sensors',
    model: 'EossEOCatalog.model.Sensors',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        api: {
            read: EossEOCatalog.utilities.BaseUrls.sensors_url
        },
        reader: {
            type: 'json',
            //rootProperty: '',
            successProperty: 'success'
        },
        actionMethods: {
            read: "GET"
        },
        headers : {
        'Content-Type' : 'application/json;charset=utf-8'
        }
    }

});