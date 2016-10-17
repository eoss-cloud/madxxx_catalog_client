/**
 * Created by sgebhardt on 03.10.16.
 */


Ext.define('EossEOCatalog.store.About', {
    extend: 'Ext.data.Store',

    alias: 'store.about',
    autoload: true,

    fields: [
        'category', 'content', 'aux'
    ],

    data: {
        items: [
            {
                category: 'About',
                content: "The EOSS Image Catalog Lite is meant to provide easy and free access to Landsat and Sentinel-2 satellite imagery by enabling simple regional and quality search parameters. The free lite version allows direct scene download only.",
                aux: ""
            }, {
                category: 'License',
                content: "Code licensed under the <strong>GPLv3</strong> license. Code is available at <strong>https://bitbucket.org/madxxx/madxxx</strong>",
                aux: ""
            }, {
                category: 'Copyright',
                content: " &copy; 2016, EOSS GmbH",
                aux: ""
            }
        ]
    },

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});