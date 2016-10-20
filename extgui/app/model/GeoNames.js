/**
 * EOSS catalog system
 *
 * The model for a geographic name entity
 *
 * @summary   The model for a geographic name entity
 *
 * @author     Steffen Gebhardt, Thilo Wehrmann
 * @copyright  Copyright 2016, EOSS GmbH
 * @version    1.0.0
 * @license    GPL
 */

/**
 * Created by sgebhardt on 08.09.16.
 */


Ext.define('EossEOCatalog.model.GeographicNames', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'entity_id', type: 'string'},
        {name: 'reference_id', type: 'int'},
        {name: 'resource_geojson', type: 'string'},
        {name: 'resource_json', type: 'string'},
        {name: 'group_id', mapping: 'entity_group.group_id', type: 'string'},
        {name: 'group_shortcut', mapping: 'entity_group.group_shortcut', type: 'string'},
        {name: 'group_name', mapping: 'entity_group.group_name', type: 'string'},
        {name: 'group_description', mapping: 'entity_group.group_description', type: 'string'}
    ]
});