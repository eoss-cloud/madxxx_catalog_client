/**
 * EOSS catalog system
 *
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
        {name: 'identifier',  type: 'string'},
        {name: 'sensor', type: 'int'},
        {name: 'level', type: 'string'},
        {name: 'tile', type: 'string'},
        {name: 'acq_date', type: 'date' },
        {name: 'daynight', type: 'string'},
        {name: 'cloud_cover', type: 'float', flex: 1 },
        {name: 'nodata_cover', type: 'float', flex: 1 },
        {name: 'quicklook', mapping: 'resources.quicklook', type: 'string', flex: 1 },
        {name: 'google_link', mapping: 'resources.google.link', type: 'string', flex: 1 },
        {name: 'ls_aws_link', mapping: 'resources.aws.link', type: 'string', flex: 1 },
        {name: 'aws_link', mapping: 'resources.s3public.zip', type: 'string', flex: 1 },
        {name: 'aws_tile', mapping: 'resources.s3public.tile', type: 'string', flex: 1 },
        {name: 'usgs_link', mapping: 'resources.usgs.link', type: 'string', flex: 1 },
        {name: 'scihub_link', mapping: 'resources.scihub.link', type: 'string', flex: 1 }

    ]
});


