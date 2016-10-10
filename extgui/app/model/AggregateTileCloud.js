/**
 * Created by sgebhardt on 19.09.16.
 */


Ext.define('EossEOCatalog.model.AggregateTileCloud', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'tile_identifier',  type: 'string'},
        {name: 'span', type: 'int'},
        {name: 'scenes_perc_-1', type: 'float'},
        {name: 'scenes_perc_20', type: 'float'},
        {name: 'scenes_perc_40', type: 'float'},
        {name: 'scenes_perc_60', type: 'float'},
        {name: 'scenes_perc_80', type: 'float'},
        {name: 'scenes_perc_100', type: 'float'},
        {name: 'scenes_abs_-1', type: 'int'},
        {name: 'scenes_abs_20', type: 'int'},
        {name: 'scenes_abs_40', type: 'int'},
        {name: 'scenes_abs_60', type: 'int'},
        {name: 'scenes_abs_80', type: 'int'},
        {name: 'scenes_abs_100', type: 'int'}
    ]
});

