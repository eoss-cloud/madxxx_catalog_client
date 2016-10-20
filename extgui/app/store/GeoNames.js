/**
 * The store for geographic names implementing the geonames model and defining the service proxy
 *
 * @summary   The store for geographic names
 *
 * @author     Steffen Gebhardt, Thilo Wehrmann
 * @copyright  Copyright 2016, EOSS GmbH
 * @version    1.0.0
 * @license    GPL
 */

/**
 * Created by sgebhardt on 08.09.16.
 */

Ext.define('EossEOCatalog.store.GeographicNames', {
    extend: 'Ext.data.Store',
    requires: ['EossEOCatalog.utilities.BaseUrls'],
    alias: 'store.geographicnames',
    model: 'EossEOCatalog.model.GeographicNames',
    autoLoad: false,
    proxy: {
        type: 'ajax',
        api: {
            read: EossEOCatalog.utilities.BaseUrls.georeference_search_url

        },
        reader: {
            type: 'json',
            rootProperty: 'entities',
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