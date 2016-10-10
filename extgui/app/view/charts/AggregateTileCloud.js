Ext.define('EossEOCatalog.view.charts.AggregateTileCloud', {
    extend: 'Ext.panel.Panel',
    xtype: 'aggregatetilecloudpanel',
    id: 'aggregatetilecloudpanel',
    requires: [
        'EossEOCatalog.view.charts.AggregateTileCloudController',
        'EossEOCatalog.store.AggregateTileCloud'
    ],

    controller: 'charts-aggregatetilecloud',

    margin: '5 5 5 25',

    items: [
        {

            xtype: 'polar',
            id: 'aggregatetilecloudpolarchart',
            reference: 'chart',
            highlight: true,
            width: '100%',
            height: 470,
            store: {
                type: 'aggregatetilecloud'
            },
            insetPadding: '40 80 40 120',
            animation: false,
            background: 'white',
            hidden: true,
            sprites: [
                {
                    type: 'rect',
                    x: 20,
                    y: 30,
                    width: 25,
                    height: 20,
                    fillStyle: 'green'
                },
                {
                    type: 'rect',
                    x: 20,
                    y: 51,
                    width: 25,
                    height: 20,
                    fillStyle: 'lightgreen'
                },
                {
                    type: 'rect',
                    x: 20,
                    y: 72,
                    width: 25,
                    height: 20,
                    fillStyle: 'yellow'
                },
                {
                    type: 'rect',
                    x: 20,
                    y: 93,
                    width: 25,
                    height: 20,
                    fillStyle: 'orange'
                },
                {
                    type: 'rect',
                    x: 20,
                    y: 114,
                    width: 25,
                    height: 20,
                    fillStyle: 'red'
                },
                {
                    type: 'rect',
                    x: 20,
                    y: 137,
                    width: 25,
                    height: 20,
                    fillStyle: 'lightgrey'
                },
                {
                    type: 'text',
                    text: 'Scene distribution per tile and cloud interval',
                    textAlign: 'left',
                    font: 'normal 12px Charter, Tahoma',
                    fillStyle: 'black',
                    x: 20,
                    y: 20
                },{
                    type: 'text',
                    text: '<100%',
                    textAlign: 'left',
                    font: 'normal 12px Charter, Georgia, "Droid Serif"',
                    fillStyle: 'black',
                    x: 50,
                    y: 40
                },
                {
                    type: 'text',
                    text: '<80%',
                    textAlign: 'left',
                    font: 'normal 12px Charter, Georgia, "Droid Serif"',
                    fillStyle: 'black',
                    x: 50,
                    y: 62
                },
                {
                    type: 'text',
                    text: '<60%',
                    textAlign: 'left',
                    font: 'normal 12px Charter, Georgia, "Droid Serif"',
                    fillStyle: 'black',
                    x: 50,
                    y: 84
                },
                {
                    type: 'text',
                    text: '<40%',
                    textAlign: 'left',
                    font: 'normal 12px Charter, Georgia, "Droid Serif"',
                    fillStyle: 'black',
                    x: 50,
                    y: 106
                },
                {
                    type: 'text',
                    text: '<20%',
                    textAlign: 'left',
                    font: 'normal 12px Charter, Georgia, "Droid Serif"',
                    fillStyle: 'black',
                    x: 50,
                    y: 128
                },
                {
                    type: 'text',
                    text: 'no image',
                    textAlign: 'left',
                    font: 'normal 12px Charter, Georgia, "Droid Serif"',
                    fillStyle: 'black',
                    x: 50,
                    y: 150
                }
            ],

            series: [{
                type: 'pie',
                angleField: 'span',
                donut: 90,
                //rotation: -Math.PI / 90,
                subStyle: {
                    strokeStyle: 'white',
                    lineWidth: 1
                },
                label: {
                    field: 'tile_identifier',
                    display: 'inside',
                    orientation: '',
                    fillStyle: 'black',
                    fontWeight: 'bold',
                    fontSize: 9,
                    fontFamily: 'Tahoma, "Trebuchet MS", "Droid Sans"',
                    renderer: 'onLabelRender100'
                },
                renderer: 'onSliceRender100'

            }, {
                type: 'pie',
                angleField: 'span',
                donut: 80,
                radiusFactor: 90,
                //rotation: -Math.PI / 110,
                subStyle: {
                    strokeStyle: 'white',
                    lineWidth: 1
                },
                label: {
                    field: 'tile_identifier',
                    display: 'inside',
                    orientation: '',
                    fillStyle: 'white',
                    fontWeight: 'bold',
                    fontSize: 9,
                    fontFamily: 'Tahoma, "Trebuchet MS", "Droid Sans"',
                    renderer: 'onLabelRender80'
                },
                renderer: 'onSliceRender80'

            }, {
                type: 'pie',
                angleField: 'span',
                donut: 70,
                radiusFactor: 80,
                //rotation: -Math.PI / 110,
                subStyle: {
                    strokeStyle: 'white',
                    lineWidth: 1
                },
                label: {
                    field: 'tile_identifier',
                    display: 'inside',
                    orientation: '',
                    fillStyle: 'white',
                    fontWeight: 'bold',
                    fontSize: 9,
                    fontFamily: 'Tahoma, "Trebuchet MS", "Droid Sans"',
                    renderer: 'onLabelRender60'
                },
                renderer: 'onSliceRender60'

            }, {
                type: 'pie',
                angleField: 'span',
                donut: 60,
                radiusFactor: 70,
                //rotation: -Math.PI / 110,
                subStyle: {
                    strokeStyle: 'white',
                    lineWidth: 1
                },
                label: {
                    field: 'tile_identifier',
                    display: 'inside',
                    orientation: '',
                    fillStyle: 'white',
                    fontWeight: 'bold',
                    fontSize: 9,
                    fontFamily: 'Tahoma, "Trebuchet MS", "Droid Sans"',
                    renderer: 'onLabelRender40'
                },
                renderer: 'onSliceRender40'

            }, {
                type: 'pie',
                angleField: 'span',
                donut: 50,
                radiusFactor: 60,
                //rotation: -Math.PI / 110,
                subStyle: {
                    strokeStyle: 'white',
                    lineWidth: 1
                },
                label: {
                    field: 'tile_identifier',
                    display: 'inside',
                    orientation: '',
                    fillStyle: 'white',
                    fontWeight: 'bold',
                    fontSize: 9,
                    fontFamily: 'Tahoma, "Trebuchet MS", "Droid Sans"',
                    renderer: 'onLabelRender20'
                },
                renderer: 'onSliceRender20'

            }, {
                type: 'pie',
                //rotation: -Math.PI / 110,
                angleField: 'span',
                donut: 40,
                radiusFactor: 100,
                subStyle: {
                    fillStyle: 'none', // not visible unless highlighted
                    strokeStyle: 'none',
                    lineWidth: 1
                },
                highlight: {
                    fillStyle: 'rgba(54,140,90,0.2)',
                    margin: 6
                }

            }

            ],
            listeners: {
                itemhighlight: 'onItemHighlight'
                ,
                storechange: 'onStoreChange'
            }


        },
        {
            xtype: 'cartesian',
            reference: 'cartesian',
            id: 'aggregatetilecloudcartesianchart',
            hidden: true,
            margin: '15 0 0 0',
            insetPadding: '40 10 10 10',
            width: '100%',
            height: 250,
            animation: false,
            background: 'white',
            axes: [
                {
                    type: 'numeric',
                    position: 'left',
                    title: {
                        text: 'Scenes count',
                        fillStyle: 'black',
                        fontWeight: 'bold',
                        fontSize: 12,
                        fontFamily: 'Tahoma, "Trebuchet MS", "Droid Sans"',
                    },
                    label: {
                        fillStyle: 'black'
                    },
                    style: {
                        strokeStyle: 'black'
                    },
                    titleMargin: 16

                },
                {
                    type: 'category',
                    position: 'bottom',
                    title: {
                        text: 'Cloud cover',
                        fillStyle: 'black',
                        fontWeight: 'bold',
                        fontSize: 12,
                        fontFamily: 'Tahoma, "Trebuchet MS", "Droid Sans"',
                    },
                    label: {
                        fillStyle: 'black'
                    },
                    style: {
                        strokeStyle: 'black'
                    }
                }
            ],
            series: {
                type: 'bar',
                xField: 'cloudcover',
                yField: 'scenes',
                style: {
                    strokeStyle: 'none',
                    minGapWidth: 40
                },

                label: {
                    field: 'scenes',
                    display: 'insideEnd'
                },
                renderer: 'onBarRender'
            }
        }
    ]
})
;
