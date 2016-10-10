
Ext.define('EossEOCatalog.view.dataset.CloudSlider',{
    extend: 'Ext.slider.Multi',
    xtype: 'cloudslider',
    requires: [
        'EossEOCatalog.view.dataset.CloudSliderController',
        'EossEOCatalog.view.dataset.CloudSliderModel'
    ],

    controller: 'dataset-cloudslider',
    viewModel: {
        type: 'dataset-cloudslider'
    },

        hideLabel: true,
        width    : 100,
        minValue : 0,
        maxValue : 100,
        values   : [0, 100],

        listeners: {
            changecomplete: 'filterDatasetsByClouds'
        }
});
