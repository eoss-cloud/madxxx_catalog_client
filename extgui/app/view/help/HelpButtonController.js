Ext.define('EossEOCatalog.view.help.HelpButtonController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.help-helpbutton',
    requires: ['EossEOCatalog.view.help.HelpWindow'],

    doHelp: function(){
        var wind = new EossEOCatalog.view.help.HelpWindow();
        wind.modal = true;
        wind.show();
    }
    
});
