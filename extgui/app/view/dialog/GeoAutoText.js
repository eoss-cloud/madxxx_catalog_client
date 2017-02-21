/**
 * EOSS catalog system
 *
 * Combo text widget for auto complete of geographic names
 *
 * @summary   Combo text widget for auto complete of geographic names
 *
 * @author     Steffen Gebhardt, Thilo Wehrmann
 * @copyright  Copyright 2016, EOSS GmbH
 * @version    1.0.0
 * @license    GPL
 */

Ext.define('EossEOCatalog.view.dialog.GeoAutoText', {
    extend: 'Ext.form.field.ComboBox',
    xtype: 'geoautotext',

    requires: [
        'EossEOCatalog.view.dialog.GeoAutoTextController',
        'EossEOCatalog.store.GeographicNames'
    ],

    controller: 'dialog-geoautotext',
    name: 'geoautotext',
    hideTrigger: true,
    typeAhead: true,
    store: {
        type: 'geographicnames'
    },
    //displayField: 'entity_id',
    tpl: Ext.create('Ext.XTemplate',
        '<tpl for=".">',
        '<div class="x-boundlist-item" style="border-bottom:1px solid #f0f0f0;">',
        '<div>{reference}</div>',
        '<div><b>Category:</b> {reference_type}</div>',
        '</div>',
        '</tpl>'),
    displayTpl: Ext.create('Ext.XTemplate',
        '<tpl for=".">',
        '{reference}',
        '</tpl>'
    ),
    valueField: 'reference',
    listeners: {
        change: 'onTextEdit',
        select: 'onSelect'
    }


});
