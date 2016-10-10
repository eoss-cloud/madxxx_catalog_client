Ext.define('EossEOCatalog.view.dialog.SubmitButtonController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.dialog-submitbutton',
    requires: ['EossEOCatalog.store.Dataset','EossEOCatalog.utilities.Util'],

    doSubmit: function () {
        EossEOCatalog.utilities.Util.submit_datasetquery();
    }

});
