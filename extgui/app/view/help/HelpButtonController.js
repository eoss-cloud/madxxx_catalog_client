/**
 * EOSS catalog system
 *
 * Controller for the about button opening the about window widget
 *
 * @summary   Controller for the about button opening the about window widget
 *
 * @author     Steffen Gebhardt, Thilo Wehrmann
 * @copyright  Copyright 2016, EOSS GmbH
 * @version    1.0.0
 * @license    GPL
 */

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
