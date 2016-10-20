/**
 * EOSS catalog system
 *
 * The model for a sensor platform entity
 *
 * @summary   The model for a sensor platform entity
 *
 * @author     Steffen Gebhardt, Thilo Wehrmann
 * @copyright  Copyright 2016, EOSS GmbH
 * @version    1.0.0
 * @license    GPL
 */

/**
 * Created by sgebhardt on 15.09.16.
 */

Ext.define('EossEOCatalog.model.Platform', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'int'},
        {name: 'sensor_name', type: 'auto'},
        {name: 'proc_level', type: 'auto'},
        {name: 'type', type: 'string'},
        {name: 'label', type: 'string'}
    ]
});