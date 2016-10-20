/**
 * The model for a sensor entity
 *
 * @summary   The model for a sensor entity
 *
 * @author     Steffen Gebhardt, Thilo Wehrmann
 * @copyright  Copyright 2016, EOSS GmbH
 * @version    1.0.0
 * @license    GPL
 */


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