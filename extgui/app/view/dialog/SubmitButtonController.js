/**
 * EOSS catalog system
 *
 * Controller for the search parameter form submit button triggering search query
 *
 * @summary   Controller for the search parameter form submit button triggering search query
 *
 * @author     Steffen Gebhardt, Thilo Wehrmann
 * @copyright  Copyright 2016, EOSS GmbH
 * @version    1.0.0
 * @license    GPL
 */

Ext.define('EossEOCatalog.view.dialog.SubmitButtonController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.dialog-submitbutton',
    requires: ['EossEOCatalog.store.Dataset','EossEOCatalog.utilities.Util'],

    doSubmit: function () {
        EossEOCatalog.utilities.Util.submit_datasetquery();
    }

});
