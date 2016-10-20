/**
 * The model for a catalog dataset entity
 *
 * @summary   The model for a catalog dataset
 *
 * @author     Steffen Gebhardt, Thilo Wehrmann
 * @copyright  Copyright 2016, EOSS GmbH
 * @version    1.0.0
 * @license    GPL
 */

/**
 * Created by sgebhardt on 05.09.16.
 */


Ext.define('EossEOCatalog.model.Dataset', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'entity_id',  type: 'string'},
        {name: 'sensor', type: 'string'},
        {name: 'level', type: 'string'},
        {name: 'tile_identifier', type: 'string'},
        // {name: 'acq_time', type: 'date', dateFormat:'Y-m-dTH:i:s' },
        {name: 'acq_time', type: 'date' },
        {name: 'daynight', type: 'string'},
        {name: 'clouds', type: 'float', flex: 1 },
        {name: 'quicklook', mapping: 'resources.quicklook', type: 'string', flex: 1 },
        {name: 'google_link', mapping: 'resources.google.link', type: 'string', flex: 1 },
        {name: 'aws_link', mapping: 'resources.s3public.zip', type: 'string', flex: 1 },
        {name: 'aws_tile', mapping: 'resources.s3public.tile', type: 'string', flex: 1 },
        {name: 'usgs_link', mapping: 'resources.usgs.link', type: 'string', flex: 1 }

    ]
});


