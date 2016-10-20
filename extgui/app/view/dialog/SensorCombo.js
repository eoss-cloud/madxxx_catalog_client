/**
 * EOSS catalog system
 *
 * Combo box widget for sensor selection
 *
 * @summary   Combo box widget for sensor selection
 *
 * @author     Steffen Gebhardt, Thilo Wehrmann
 * @copyright  Copyright 2016, EOSS GmbH
 * @version    1.0.0
 * @license    GPL
 */

Ext.define('EossEOCatalog.view.dialog.SensorCombo', {
    extend: 'Ext.form.field.ComboBox',
    xtype: 'sensorcombo',
    requires: [
        'EossEOCatalog.store.Platform'
    ],

    typeAhead: true,
    name: 'sensorcombo',
    store: {
        type: 'platform'
    },
    queryMode: 'remote',
    displayField: 'label',
    valueField: 'id',
    multiSelect: false,
    listeners: {
        afterrender:function(){
            this.setValue(3);
        }
    }


});
