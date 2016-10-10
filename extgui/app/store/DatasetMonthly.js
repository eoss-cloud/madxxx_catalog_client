/**
 * Created by sgebhardt on 07.09.16.
 */




Ext.define('EossEOCatalog.store.DatasetMonthly', {
    extend: 'Ext.data.Store',
    alias: 'store.datasetmonthly',
    model: 'EossEOCatalog.model.DatasetMonthly',
    data: { datasets: [
        {yearmonth: '2016-06', landsat: 4, sentinel: 2 },
        {yearmonth: '2016-07', landsat: 1, sentinel: 3, rapideye: 8 }
        ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'datasets'
        }
    }

});