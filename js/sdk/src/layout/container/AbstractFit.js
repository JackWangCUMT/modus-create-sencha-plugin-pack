/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

Commercial Usage
Licensees holding valid commercial licenses may use this file in accordance with the Commercial Software License Agreement provided with the Software or, alternatively, in accordance with the terms contained in a written agreement between you and Sencha.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
/**
 * @class Ext.layout.container.AbstractFit
 * @extends Ext.layout.container.Container
 *
 * This is a base class for layouts that contain **a single item** that automatically expands to fill the layout's
 * container.  This class is intended to be extended or created via the `layout:'fit'` {@link Ext.container.Container#layout}
 * config, and should generally not need to be created directly via the new keyword.
 *
 * FitLayout does not have any direct config options (other than inherited ones).  To fit a panel to a container
 * using FitLayout, simply set layout:'fit' on the container and add a single panel to it.  If the container has
 * multiple panels, only the first one will be displayed.  Example usage:
 *
 *     @example
 *     Ext.create('Ext.panel.Panel', {
 *         title: 'Fit Layout',
 *         layout: 'fit',
 *         items: {
 *             title: 'Inner Panel',
 *             html: '<p>This is the inner panel content</p>',
 *             border: false
 *         },
 *         renderTo: Ext.getBody()
 *     });
 */
Ext.define('Ext.layout.container.AbstractFit', {

    /* Begin Definitions */

    extend: 'Ext.layout.container.Container',

    /* End Definitions */

    itemCls: Ext.baseCSSPrefix + 'fit-item',
    targetCls: Ext.baseCSSPrefix + 'layout-fit',
    type: 'fit'
});
