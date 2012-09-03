/*
 * This class defines our main view with navigation.View
 * to allow for easy switching between screens, a back button, etc.
 */
Ext.define("Screener.view.Main", {
    extend: 'Ext.Container',
    xtype: 'mainView',
    initialize: function (args) {
        var topBar = Ext.create('Topbar.view.TopToolbar', {
            docked: 'top',
	    title: 'JSS Hospital Screener System',
        });
        this.add(topBar);

    },
	config: {
        fullscreen: true,

        //don't delete views so we can switch screens quickly
        autoDestroy: false,

        items: [{
            title: "JSS Hospital Screener System",
            items: [{
                xtype: 'topmenu'
            }]
        }, ]
    }
    
});