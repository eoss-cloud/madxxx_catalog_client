/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */
Ext.application({
    name: 'EossEOCatalog',

    extend: 'EossEOCatalog.Application',

    requires: [
        'EossEOCatalog.view.main.Main'
    ],

    // The name of the initial view to create. With the classic toolkit this class
    // will gain a "viewport" plugin if it does not extend Ext.Viewport. With the
    // modern toolkit, the main view will be added to the Viewport.
    //
    mainView: 'EossEOCatalog.view.main.Main',
	
    //-------------------------------------------------------------------------
    // Most customizations should be made to EossEOCatalog.Application. If you need to
    // customize this file, doing so below this section reduces the likelihood
    // of merge conflicts when upgrading to new versions of Sencha Cmd.
    //-------------------------------------------------------------------------

        // create a reference in Ext.application so we can access it from multiple functions
    splashscreen: {},

    init: function() {
        // start the mask on the body and get a reference to the mask
         splashscreen = Ext.getBody().mask('Loading EOSS Image Catalog', 'splashscreen');
    },

    launch: function() {

        Ext.tip.QuickTipManager.init();
        var task = new Ext.util.DelayedTask(function() {

            // fade out the body mask
            splashscreen.fadeOut({
                duration: 500,
                remove: true
            });

            // fade out the message
            splashscreen.next().fadeOut({
                duration: 500,
                remove: true
            });

       });

       task.delay(1000);

    }

});
