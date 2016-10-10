Ext.define('EossEOCatalog.view.main.ViewPanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'viewpanel',
    id: 'viewpanel',
    requires: [
        'EossEOCatalog.view.main.ViewPanelController',
        'EossEOCatalog.view.main.ViewPanelModel',
        'EossEOCatalog.view.dataset.Datasetview',
        //'EossEOCatalog.view.dataset.CloudSlider',
        'EossEOCatalog.view.dataset.DatasetDownload',
        'EossEOCatalog.view.dataset.DatasetCounter'
    ],

    controller: 'main-viewpanel',
    viewModel: {
        type: 'main-viewpanel'
    },
    layout: 'fit',
    autoScroll: true,
    margin: '5 5 5 25',
    title: 'Scenes',
    items: [{
        xtype: 'datasetview'
    }],
    tbar: [
        // 'Filter results by clouds:',
        // ' ',
        {xtype: 'datasetdownload'},
        '->',
        {xtype: 'datasetcounter'}


    ]
    // ,
    // bbar: [
    //     '->',
    //     {xtype: 'button', id: 'orderbutton', text: 'Button 1', hidden: true}
    // ]
});
