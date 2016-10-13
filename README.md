# madxxx_catalog_client
Earth observation data catalog system

A javascript client to the EOSS catalog system supports querying all existing Landsat and Sentinel2 data. The catalog will be the entrypoint to the EOSS processing system to generate spatial high level products like land cover maps and change dynamic statistics.

## madxxx catalog
The catalog system consists of ca. 4.6 million images (Oct. 2016) on sensor tile level. The catalog implements the first EOSS dictum to provide easy and comprehensive access to available EO data (comprehensive in the meaning of sensors, user specified areas and data usability).
- LANDSAT5: 1984-2012
- LANDSAT7: 1999-now
- LANDSAT8: 2013-now
- SENTINEL2: 2015-now

## Requirements
- MADXXX catalog API (madxxx_catalog_api)
- ExtJS SDK ()
- Sencha CMD ()

## Installation
1. Clone project from github
1. Download and install dependencies
1. configure catalog API endpoints in extgui/app/utilities/BaseUrls.js
1. build sencha app with sencha CMD
1. configure ROOT directory in nginx.conf
1. start nginx docker and start catalog api
