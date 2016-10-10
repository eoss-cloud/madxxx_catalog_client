Ext.define('EossEOCatalog.view.dialog.SensorCombo', {
    extend: 'Ext.form.field.ComboBox',
    //extend: 'Ext.view.MultiSelector',
    xtype: 'sensorcombo',
    requires: [
        'EossEOCatalog.view.dialog.SensorComboController',
        'EossEOCatalog.view.dialog.SensorComboModel',
        'EossEOCatalog.store.Platform'
    ],

    controller: 'dialog-sensorcombo',
    viewModel: {
        type: 'dialog-sensorcombo'
    },

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
