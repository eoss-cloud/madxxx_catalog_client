/**
 * EOSS catalog system
 *
 * Form panel widget for search parameter definition and request submission
 *
 * @summary   Form panel widget for search parameter definition and request submission
 *
 * @author     Steffen Gebhardt, Thilo Wehrmann
 * @copyright  Copyright 2016, EOSS GmbH
 * @version    1.0.0
 * @license    GPL
 */

Ext.define('EossEOCatalog.view.dialog.Dialog', {
    extend: 'Ext.form.Panel',
    xtype: 'projectdialog',
    requires: [


        'EossEOCatalog.view.dialog.GeoAutoText',
        'Ext.slider.*',
        'EossEOCatalog.view.dialog.SensorCombo',
        'EossEOCatalog.view.dialog.SubmitButton'
    ],

    bodyPadding: 10,
    margin: '5 5 5 5',
    border: false,
    bodyBorder: false,
    items: [
        {
            xtype: "panel",
            layout: 'hbox',
            items: [
                {
                    xtype: 'fieldset',
                    title: 'Type Country/Division Name',
                    height: 50,
                    width: 200,
                    //flex: .15,
                    //layout: 'fit',
                    items: [{
                        xtype: 'geoautotext',
                        flex: 1
                    }]
                }, {
                    xtype: 'fieldset',
                    title: 'Select Sensor',
                    height: 50,
                    //flex: .15
                    width: 200,
                    //layout: 'fit',
                    margin: '0 0 0 5',
                    items: [{

                        xtype: 'sensorcombo',
                        flex: 1
                    }]
                },
                {
                    xtype: 'fieldset',
                    layout: 'hbox',
                    title: 'Define Date Range',
                    //flex: .3,
                    width: 300,
                    height: 50,
                    margin: '0 0 0 5',
                    items: [{
                        xtype: 'datefield',
                        name: 'datefrom',
                        //format: 'd-m-Y',
                        value: new Date(new Date().setDate(new Date().getDate() - 30)),
                        flex: 1
                    }, {
                        xtype: 'datefield',
                        name: 'dateto',
                        //format: 'd-m-Y',
                        value: new Date(),
                        flex: 1
                    }]
                },
                {
                    xtype: 'fieldset',
                    layout: 'hbox',
                    height: 50,
                    width: 200,
                    //flex: .3,
                    margin: '0 0 0 5',
                    title: 'Set Cloud Cover Percentage',
                    items: [{
                        xtype: 'slider',
                        name: 'cloudslider',
                        increment: 5,
                        minValue: 0,
                        maxValue: 100,
                        value: 60,
                        flex: 1
                    }]
                }, {
                    xtype: "fieldset",
                    layout: 'fit',
                    title: 'Search',
                    margin: '0 0 0 5',
                    width: 100,
                    height: 50,
                    bottom: 30,
                    items: [
                        {
                            xtype: 'submitbutton',
                            flex: 1
                        }]
                }

            ]
        }
        // ,
        // {
        //     xtype: "panel",
        //     layout: 'hbox',
        //     items: [
        //         {
        //             xtype: 'fieldset',
        //             layout: 'hbox',
        //             title: 'Define Date Range',
        //             items: [{
        //                 xtype: 'datefield',
        //                 name: 'datefrom',
        //                 value: new Date(new Date().setDate(new Date().getDate() - 90)),
        //                 flex: 1
        //             }, {
        //                 xtype: 'datefield',
        //                 name: 'dateto',
        //                 value: new Date(),
        //                 flex: 1,
        //                 layout: 'fit'
        //             }],
        //             flex: 1
        //         },
        //         {
        //             xtype: 'fieldset',
        //             layout: 'hbox',
        //             title: 'Set Cloud Cover Percentage',
        //             items: [{
        //                 xtype: 'slider',
        //                 name: 'cloudslider',
        //                 increment: 5,
        //                 minValue: 0,
        //                 maxValue: 100,
        //                 value: 60,
        //                 flex: 1
        //             }],
        //             flex: 1
        //         }
        //     ]
        // }, {
        //     xtype: "fieldset",
        //     layout: 'fit',
        //     title: 'Search',
        //     bottom: 30,
        //     items: [
        //         {
        //             xtype: 'submitbutton',
        //             flex: 1
        //         }]
        // }
    ]


});


