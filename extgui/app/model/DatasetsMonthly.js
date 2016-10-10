/**
 * Created by sgebhardt on 07.09.16.
 */


Ext.define('EossEOCatalog.model.DatasetMonthly', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'yearmonth',  type: 'string'},
        {name: 'sentinel', type: 'float'},
        {name: 'landsat', type: 'float'},
        {name: 'rapideye', type: 'float'}
    ]
});