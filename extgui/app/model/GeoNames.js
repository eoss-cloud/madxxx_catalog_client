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

        {name: 'reference', type: 'string'},
        {name: 'reference_type', type: 'string'}

    ]
});