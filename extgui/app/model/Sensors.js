/**
 * Created by sgebhardt on 09.09.16.
 */

Ext.define('EossEOCatalog.model.Sensors', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'sensor_name', type: 'string'},
        {name: 'proc_level', type: 'string'},
        {name: 'id', type: 'int'},
        {name: 'label', type: 'string'}

    ]
});