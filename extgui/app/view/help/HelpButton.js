
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
