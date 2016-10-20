/**
 * EOSS catalog system
 *
 * @summary   Dataset details view panel widget
 *
 * @author     Steffen Gebhardt, Thilo Wehrmann
 * @copyright  Copyright 2016, EOSS GmbH
 * @version    1.0.0
 * @license    GPL
 */

Ext.define('EossEOCatalog.view.main.ViewPanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'viewpanel',
    id: 'viewpanel',
    requires: [
        'EossEOCatalog.view.dataset.Datasetview',
        'EossEOCatalog.view.dataset.DatasetDownload',
        'EossEOCatalog.view.dataset.DatasetCounter'
    ],

    layout: 'fit',
    autoScroll: true,
    margin: '5 5 5 25',
    title: 'Scenes',
    items: [{
        xtype: 'datasetview'
    }],
    tbar: [
        {xtype: 'datasetdownload'},
        '->',
        {xtype: 'datasetcounter'}


    ]
});
