/**
 * Created by sgebhardt on 15.09.16.
 */


Ext.define('EossEOCatalog.store.Platform', {
    extend: 'Ext.data.Store',
    requires: ['EossEOCatalog.utilities.BaseUrls'],
    alias: 'store.platform',
    model: 'EossEOCatalog.model.Platform',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        api: {
            read: EossEOCatalog.utilities.BaseUrls.platform_url
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