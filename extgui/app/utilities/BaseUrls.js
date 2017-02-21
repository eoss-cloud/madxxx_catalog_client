/**
 * EOSS catalog system
 *
 * Class for global service base url variables
 *
 * @summary   Class for global service base url variables
 *
 * @author     Steffen Gebhardt, Thilo Wehrmann
 * @copyright  Copyright 2016, EOSS GmbH
 * @version    1.0.0
 * @license    GPL
 */

/**
 * Created by sgebhardt on 09.09.16.
 */


// var baseUrl = 'https://api.eoss.cloud/';
var baseUrl = 'http://127.0.0.1:5000/api/v1/';

Ext.define('EossEOCatalog.utilities.BaseUrls', {
    singleton: true,

    // georeference_search_url: baseUrl + 'reference/search/count',
    // georeference_geojson_url: baseUrl + 'reference/',
    // catalog_search_url: baseUrl + 'catalog/search/result.json',
    // catalog_search_geojson_url: baseUrl + 'catalog/search/result.geojson',
    // catalog_search_download_csv_url: baseUrl + 'catalog/search/result.csv',
    // catalog_search_download_xls_url: baseUrl + 'catalog/search/result.xlsx',
    // platform_url: baseUrl + 'sensors/platform',
    // //catalog_search_summary_url: 'http://localhost:8000/catalog/search/result.hist',
    // //sensors_url: 'http://localhost:8000/sensors',

    georeference_search_url: baseUrl + 'catalog/referencesearch.json',
    georeference_geojson_url: baseUrl + 'catalog/reference/',
    catalog_search_url: baseUrl + 'catalog/search.json',
    catalog_search_geojson_url: baseUrl + 'catalog/search.geojson',
    // catalog_search_download_csv_url: baseUrl + 'catalog/search/result.csv',
    // catalog_search_download_xls_url: baseUrl + 'catalog/search/result.xlsx',
    platform_url: baseUrl + 'catalog/missions',





    aws_sentinel_baseurl: 'http://sentinel-s2-l1c.s3-website.eu-central-1.amazonaws.com/#',
    doorbell: 'https://doorbell.io/api/applications/4584/submit?key=pfW1ZgHBlkp3CCtW7PzEskWsGmUVxCejoABJHxdl5L4kHbtrcGLlQ8TcOKkD3qzR'

})
;
