/**
 * EOSS catalog system
 *
 * Controller for the dataset view implementing interaction callback functions
 *
 * @summary   Form submit button for sensor selection
 *
 * @author     Steffen Gebhardt, Thilo Wehrmann
 * @copyright  Copyright 2016, EOSS GmbH
 * @version    1.0.0
 * @license    GPL
 */

Ext.define('EossEOCatalog.view.dataset.DatasetviewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.dataset-datasetview',
    requires: ['EossEOCatalog.utilities.Util'],

    onMouseEnter: function (sender, record) {
        EossEOCatalog.utilities.Util.ol_highlightfeatures(record.get('tile_identifier'))
    },
    onMouseLeave: function (sender, record) {
        EossEOCatalog.utilities.Util.ol_dishighlightfeatures();
    }
});
