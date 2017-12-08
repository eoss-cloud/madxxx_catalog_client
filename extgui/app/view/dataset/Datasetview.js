/**
 * EOSS catalog system
 *
 * View widget showing search result as cards with hover ans selction interactions
 *
 * @summary   View widget showing search result as cards
 *
 * @author     Steffen Gebhardt, Thilo Wehrmann
 * @copyright  Copyright 2016, EOSS GmbH
 * @version    1.0.0
 * @license    GPL
 */

Ext.define('EossEOCatalog.view.dataset.Datasetview',{
    extend: 'Ext.view.View',
    xtype: 'datasetview',
    id: 'datasetview',

    requires: [
        'EossEOCatalog.view.dataset.DatasetviewController',
        'EossEOCatalog.store.Dataset',
        'Ext.XTemplate',
        'EossEOCatalog.utilities.BaseUrls'
    ],
    controller: 'dataset-datasetview',

    title: 'Datasets',

    store: {
        type: 'dataset'
    },
    multiSelect: true,
    tpl  : Ext.create('Ext.XTemplate',
            '<tpl for=".">',
                '<div class="dataset">',
                    '<table>',
                      '<tr  height="20">',
                        // '<th><strong>Identifier</strong></th>',
                        '<th>{identifier}</th>',
                      '</tr>',
                    '</table>',

                    '<table>',
                      '<tr  height="10">',
                        '<th rowspan="7"><img width="200" height="200" src="{quicklook}" /></th>',
                      //   '<th><strong>Sensor</strong></th>',
                      //   '<td>{sensor}</td>',
                      // '</tr>',
                      // '<tr height="10">',
                        '<th>Date</th>',
                        '<td>{acq_date:date("d-m-Y")}</td>',
                      '</tr>',
                      '<tr height="10">',
                        '<th>Tile</th>',
                        '<td>{tile}</td>',
                      '</tr>',
                      '<tr height="10">',
                        '<th>Level</th>',
                        '<td>{level}</td>',
                      '</tr>',
                      '<tr height="10">',
                        '<th>Clouds</th>',
                        '<td>{cloud_cover}%</td>',
                      '</tr>',
                      '<tr height="10">',
                        '<th>No data</th>',
                        '<td>{nodata_cover}%</td>',
                      '</tr>',
                      '<tr height="10">',
                        '<th>Overpass</th>',
                        '<td>{daynight}</td>',
                      '</tr>',
                      '<tr>',
                        '<th>Download</th>',
                        '<th align="right">',
                            '<tpl if="this.hasLink(google_link)">',
                                '<a href={google_link} target="_blank"><div id="google_thumbnailimage"></div></a>',
                            '</tpl>',
                            '<tpl if="this.hasLink(usgs_link)">',
                                '<a href={usgs_link} target="_blank"><div id="usgs_thumbnailimage"></div></a>',
                            '</tpl>',
                            '<tpl if="this.hasLink(ls_aws_link)">',
                                '<a href={ls_aws_link} target="_blank"><div id="awsbucket_thumbnailimage"></div></a>',
                            '</tpl>',
                            '<tpl if="this.hasLink(scihub_link)">',
                                '<a href={scihub_link} target="_blank"><div id="scihub_thumbnailimage"></div></a>',
                            '</tpl>',
                            '<tpl if="this.hasLink(aws_tile)">',
                             '<a href={[EossEOCatalog.utilities.BaseUrls.aws_sentinel_baseurl]}{aws_tile}/ target="_blank"><div id="awsbucket_thumbnailimage"></div></a>',
                            '</tpl>',
                        '</th>',
                      '</tr>',
                    '</table>',
                '</div>',
            '</tpl>',
            {
                hasLink: function(link){
                    if(link.length > 0){
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }
            }
        ),
    id: 'datasets',
    overItemCls : 'dataset-hover',
    itemSelector: 'div.dataset',
    trackOver: true,
    overflow: 'auto',
    scrollable: true,


    listeners: {
        // select: 'onSelect',
        itemmouseenter: 'onMouseEnter',
        itemmouseleave: 'onMouseLeave'
        // ,
        // selectionchange: 'onSelect'
    }
});
