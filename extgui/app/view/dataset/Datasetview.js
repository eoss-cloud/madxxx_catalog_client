
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
                        '<td rowspan="7"><img width="200" height="200" src="{quicklook}" /></td>',
                        '<th><strong>Sensor</strong></th>',
                        '<td>{sensor}</td>',
                      '</tr>',
                      '<tr height="10">',
                        '<th>Date</th>',
                        '<td>{acq_time:date("d-m-Y")}</td>',
                      '</tr>',
                      '<tr height="10">',
                        '<th>Tile</th>',
                        '<td>{tile_identifier}</td>',
                      '</tr>',
                      '<tr height="10">',
                        '<th>Level</th>',
                        '<td>{level}</td>',
                      '</tr>',
                      '<tr height="10">',
                        '<th>Clouds</th>',
                        '<td>{clouds}%</td>',
                      '</tr>',
                      '<tr height="10">',
                        '<th>Overpass</th>',
                        '<td>{daynight}</td>',
                      '</tr>',
                      '<tr>',
                        '<th>Download</th>',
                        '<td>',
                            '<tpl if="this.hasLink(google_link)">',
                                '<a href={google_link}><div id="google_thumbnailimage"></div></a>',
                            '</tpl>',
                            '<tpl if="this.hasLink(usgs_link)">',
                                '<a href={usgs_link} target="_blank"><div id="usgs_thumbnailimage"></div></a>',
                            '</tpl>',
                            '<tpl if="this.hasLink(aws_link)">',
                                '<a href={aws_link}><div id="aws_thumbnailimage"></div></a>',
                            '</tpl>',
                            '<tpl if="this.hasLink(aws_tile)">',
                             '<a href={[EossEOCatalog.utilities.BaseUrls.aws_sentinel_baseurl]}{aws_tile} target="_blank"><div id="awsbucket_thumbnailimage"></div></a>',
                            '</tpl>',
                        '</td>',
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
        select: 'onSelect',
        itemmouseenter: 'onMouseEnter',
        itemmouseleave: 'onMouseLeave'
        // ,
        // selectionchange: 'onSelect'
    }
});
