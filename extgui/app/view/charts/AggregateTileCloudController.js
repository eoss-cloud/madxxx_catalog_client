Ext.define('EossEOCatalog.view.charts.AggregateTileCloudController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.charts-aggregatetilecloud',
    requires: ['EossEOCatalog.utilities.Util'],


    onSliceRender100: function (sprite, config, data, index) {
        // Please see the comments in the KitchenSink.store.Unemployment class
        // for more info on the meaning of the record fields.
        var record = data.store.getAt(index),
            label = record.get('tile_identifier'),
            cloudpercentage = record.get('scenes_perc_100'),
            style = {};

        if (label === '') { // a separating sector
            style.fillStyle = 'none';
            style.strokeStyle = 'none';
        } else if (label === 'percentagelabel') { // a sector that shows a year
            style.fillStyle = 'rgba(70, 70, 69, 1.0)';
            style.display = 'inside';
        } else { // a sector that shows the change in unemployment with a color
            style.fillStyle = this.getFillColor(cloudpercentage);
        }
        return style;
    },

    onLabelRender100: function (text, sprite, config, data, index) {
        label = {};

        if (text === 'percentagelabel') {

            config.display = 'inside';
            label.text = '100%';
            label.fillStyle= 'white';
            return label;
        }
    },

    onSliceRender80: function (sprite, config, data, index) {
        var record = data.store.getAt(index),
            label = record.get('tile_identifier'),
            style = {};

        if (label === '') {
            style.fillStyle = 'none';
            style.strokeStyle = 'none';
        } else if (label === 'percentagelabel') {
            style.fillStyle = 'rgba(70, 70, 69, 1.0)';
        } else {
            style.fillStyle = this.getFillColor(record.get('scenes_perc_80'));
        }
        return style;
    },

    onLabelRender80: function (text, sprite, config, data, index) {
        if (text === 'percentagelabel') {
            return {
                text: '80%'
            };
        } else {
            return {
                hidden: true
            };
        }
    },

    onSliceRender60: function (sprite, config, data, index) {
        var record = data.store.getAt(index),
            label = record.get('tile_identifier'),
            style = {};

        if (label === '') {
            style.fillStyle = 'none';
            style.strokeStyle = 'none';
        } else if (label === 'percentagelabel') {
            style.fillStyle = 'rgba(70, 70, 69, 1.0)';
        } else {
            style.fillStyle = this.getFillColor(record.get('scenes_perc_60'));
        }
        return style;
    },

    onLabelRender60: function (text, sprite, config, data, index) {
        if (text === 'percentagelabel') {
            return {
                text: '60%'
            };
        } else {
            return {
                hidden: true
            };
        }
    },

    onSliceRender40: function (sprite, config, data, index) {
        var record = data.store.getAt(index),
            label = record.get('tile_identifier'),
            style = {};

        if (label === '') {
            style.fillStyle = 'none';
            style.strokeStyle = 'none';
        } else if (label === 'percentagelabel') {
            style.fillStyle = 'rgba(70, 70, 69, 1.0)';
        } else {
            style.fillStyle = this.getFillColor(record.get('scenes_perc_40'));
        }
        return style;
    },

    onLabelRender40: function (text, sprite, config, data, index) {
        if (text === 'percentagelabel') {
            return {
                text: '40%'
            };
        } else {
            return {
                hidden: true
            };
        }
    },

    onSliceRender20: function (sprite, config, data, index) {
        var record = data.store.getAt(index),
            label = record.get('tile_identifier'),
            style = {};

        if (label === '') {
            style.fillStyle = 'none';
            style.strokeStyle = 'none';
        } else if (label === 'percentagelabel') {
            style.fillStyle = 'rgba(70, 70, 69, 1.0)';
        } else {
            style.fillStyle = this.getFillColor(record.get('scenes_perc_20'));
        }
        return style;
    },

    onLabelRender20: function (text, sprite, config, data, index) {
        if (text === 'percentagelabel') {
            return {
                text: '20%'
            };
        } else {
            return {
                hidden: true
            };
        }
    },

        onSliceRender0: function (sprite, config, data, index) {
        var record = data.store.getAt(index),
            label = record.get('tile_identifier'),
            style = {};

        if (label === '') {
            style.fillStyle = 'none';
            style.strokeStyle = 'none';
        } else if (label === 'percentagelabel') {
            style.fillStyle = 'rgba(70, 70, 69, 1.0)';
        } else {
            style.fillStyle = this.getFillColor(record.get('scenes_perc_20'));
        }
        return style;
    },

    onLabelRender0: function (text, sprite, config, data, index) {
        if (text === 'percentagelabel') {
            return {
                text: 'night'
            };
        } else {
            return {
                hidden: true
            };
        }
    },

    // Returns color based on percentage change in unemployment.
    getFillColor: function (cloudpercentage) {
        if (cloudpercentage == 0) {
            //return 'rgba(220, 220, 220, 1.0)';
            return 'lightgrey'
        } else if (cloudpercentage <= 0.21) {
            //return 'rgba(245, 183, 145, 1.0)';
            return 'red'
        } else if (cloudpercentage <= 0.41) {
            //return 'rgba(231, 200, 75, 1.0)';
            return 'orange'
        } else if (cloudpercentage <= 0.61) {
            //return 'rgba( 250, 252, 77, 1.0)';
            return 'yellow'
        } else if (cloudpercentage <= 0.81) {
            //return 'rgba(178, 252, 77, 1.0)';
            return 'lightgreen'
        } else if (cloudpercentage <= 1) {
            //return 'rgba(98, 169, 2, 1.0)';
            return 'green'
        } else {
            return 'blue';
        }



    },


    onStoreChange: function (chart) {
        // console.log('heifdd')
        // chart.redraw();

    },


    onBarRender: function (sprite, config, data, index) {
        var scenes = data.store.getAt(index).get('scenes');

        return {
            fillStyle: 'green'
        };
    },

    onItemHighlight: function (chart, item) {
        var label = item.record.get('tile_identifier'),
            cartesianChart = this.lookupReference('cartesian'),
            data = item.record.data,
            i, j, ik, jk, region, sprite;

        if (!label || label === 'percentagelabel') {
            // Don't highlight the sectors that separate the regions
            // and the sector that shows the year.
            item.series.setAttributesForItem(item, {
                highlighted: false
            });
        }
        else {
            // chart.getSurface('chart').get('tile_identifier').setAttributes({
            //     text: item.record.get('tile_identifier')
            // });
            cartesianChart.setTitle('Tile summary for: ' + label);
            cartesianChart.setStore({
                fields: ['cloudcover', 'scenes'],
                data: [
                    {cloudcover: '20%', scenes: data.scenes_abs_20, perc: data.scenes_perc_20},
                    {cloudcover: '40%', scenes: data.scenes_abs_40, perc: data.scenes_perc_40},
                    {cloudcover: '60%', scenes: data.scenes_abs_60, perc: data.scenes_perc_60},
                    {cloudcover: '80%', scenes: data.scenes_abs_80, perc: data.scenes_perc_80},
                    {cloudcover: '100%', scenes: data.scenes_abs_100, perc: data.scenes_perc_100}
                ]
            });
        }


        if (!Ext.is.Desktop) {
            chart.redraw();
        }

        EossEOCatalog.utilities.Util.ol_highlightfeatures(label);
    }

});
