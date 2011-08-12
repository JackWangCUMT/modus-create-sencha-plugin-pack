/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

Commercial Usage
Licensees holding valid commercial licenses may use this file in accordance with the Commercial Software License Agreement provided with the Software or, alternatively, in accordance with the terms contained in a written agreement between you and Sencha.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
/**
 * A menu containing a Ext.picker.Color Component.
 *
 * Notes:
 *
 *   - Although not listed here, the **constructor** for this class accepts all of the
 *     configuration options of {@link Ext.picker.Color}.
 *   - If subclassing ColorMenu, any configuration options for the ColorPicker must be
 *     applied to the **initialConfig** property of the ColorMenu. Applying
 *     {@link Ext.picker.Color ColorPicker} configuration settings to `this` will **not**
 *     affect the ColorPicker's configuration.
 *
 * Example:
 *
 *     @example
 *     var colorPicker = Ext.create('Ext.menu.ColorPicker', {
 *         value: '000000'
 *     });
 *
 *     Ext.create('Ext.menu.Menu', {
 *         width: 100,
 *         height: 90,
 *         floating: false,  // usually you want this set to True (default)
 *         renderTo: Ext.getBody(),  // usually rendered by it's containing component
 *         items: [{
 *             text: 'choose a color',
 *             menu: colorPicker
 *         },{
 *             iconCls: 'add16',
 *             text: 'icon item'
 *         },{
 *             text: 'regular item'
 *         }]
 *     });
 */
 Ext.define('Ext.menu.ColorPicker', {
     extend: 'Ext.menu.Menu',

     alias: 'widget.colormenu',

     requires: [
        'Ext.picker.Color'
     ],

    /**
     * @cfg {Boolean} hideOnClick
     * False to continue showing the menu after a date is selected, defaults to true.
     */
    hideOnClick : true,

    /**
     * @cfg {String} pickerId
     * An id to assign to the underlying color picker. Defaults to null.
     */
    pickerId : null,

    /**
     * @cfg {Number} maxHeight
     * @hide
     */

    /**
     * @property {Ext.picker.Color} picker
     * The {@link Ext.picker.Color} instance for this ColorMenu
     */

    /**
     * @event click
     * @hide
     */

    /**
     * @event itemclick
     * @hide
     */

    initComponent : function(){
        var me = this;

        Ext.apply(me, {
            plain: true,
            showSeparator: false,
            items: Ext.applyIf({
                cls: Ext.baseCSSPrefix + 'menu-color-item',
                id: me.pickerId,
                xtype: 'colorpicker'
            }, me.initialConfig)
        });

        me.callParent(arguments);

        me.picker = me.down('colorpicker');

        /**
         * @event select
         * @alias Ext.picker.Color#select
         */
        me.relayEvents(me.picker, ['select']);

        if (me.hideOnClick) {
            me.on('select', me.hidePickerOnSelect, me);
        }
    },

    /**
     * Hides picker on select if hideOnClick is true
     * @private
     */
    hidePickerOnSelect: function() {
        Ext.menu.Manager.hideAll();
    }
 });
