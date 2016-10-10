
Ext.define('EossEOCatalog.view.dataset.DatasetCounter',{
    extend: 'Ext.panel.Panel',
    xtype: 'datasetcounter',

    requires: [
        'EossEOCatalog.view.dataset.DatasetCounterController',
        'EossEOCatalog.view.dataset.DatasetCounterModel'
    ],

    controller: 'dataset-datasetcounter',
    viewModel: {
        type: 'dataset-datasetcounter'
    },

    html: ''
});
