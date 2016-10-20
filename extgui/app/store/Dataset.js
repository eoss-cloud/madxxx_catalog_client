/**
 * EOSS catalog system
 *
 * The store for datasets implementing the dataset model and defining the service proxy and on load behaviour
 *
 * @summary   The store for datasets
 *
 * @author     Steffen Gebhardt, Thilo Wehrmann
 * @copyright  Copyright 2016, EOSS GmbH
 * @version    1.0.0
 * @license    GPL
 */

/**
 * Created by sgebhardt on 05.09.16.
 */





Ext.define('Ext.ux.data.proxy.JsonAjaxProxy', {
    extend: 'Ext.data.proxy.Ajax',
    alias: 'proxy.jsonajax',

    actionMethods: {
        create: "POST",
        read: "POST",
        update: "POST",
        destroy: "POST"
    },

    buildRequest: function (operation) {
        var request = this.callParent(arguments);

        // For documentation on jsonData see Ext.Ajax.request
        request.jsonData = request.params;
        request.params = {};

        return request;
    },

    /*
     * @override
     * Inherit docs. We don't apply any encoding here because
     * all of the direct requests go out as jsonData
     */
    applyEncoding: function (value) {
        return value;
    }

});

Ext.define('EossEOCatalog.store.Dataset', {
    extend: 'Ext.data.Store',
    requires: ['EossEOCatalog.utilities.BaseUrls','EossEOCatalog.utilities.Util'],
    alias: 'store.dataset',
    model: 'EossEOCatalog.model.Dataset',
    autoLoad: false,

    proxy: {
        type: 'jsonajax',
        url: EossEOCatalog.utilities.BaseUrls.catalog_search_url,
        reader: {
            type: 'json',
            rootProperty: 'found_dataset',
            totalProperty: 'count',
            successProperty: 'success'
        },
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        extraParams: {
            query: 'bar'
        }
    },


    listeners: {
        load: function (store) {
            store.sort([
                {
                    property: 'tile_identifier',
                    direction: 'ASC'
                },
                {
                    property: 'acq_time',
                    direction: 'ASC'
                }
            ]);


            EossEOCatalog.utilities.Util.filtered_count = store.getCount();
            EossEOCatalog.utilities.Util.total_count = store.getTotalCount();
            EossEOCatalog.utilities.Util.update_datasetcounter();

        }

    }
    ,
    sortInfo: {
        field: 'tile_identifier',
        direction: 'ASC'
    }

});











