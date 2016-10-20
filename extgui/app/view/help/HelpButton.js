/**
 * EOSS catalog system
 *
 * @summary   About window button
 *
 * @author     Steffen Gebhardt, Thilo Wehrmann
 * @copyright  Copyright 2016, EOSS GmbH
 * @version    1.0.0
 * @license    GPL
 */

Ext.define('EossEOCatalog.view.help.HelpButton',{
    extend:'Ext.Button',
    xtype: 'helpbutton',

    requires: [
        'EossEOCatalog.view.help.HelpButtonController'
    ],

    controller: 'help-helpbutton',
    //text: 'About',
    iconCls: 'fa fa-info-circle',
    listeners: {click: 'doHelp'}
});
