sap.ui.define(
  ["sap/ui/core/UIComponent", "sap/ui/Device"],
  function (UIComponent, Device) {
    "use strict";

    return UIComponent.extend("myapp.Component", {
      metadata: {
        manifest: "json",
      },

      init: function () {
        // call the base component's init function
        UIComponent.prototype.init.apply(this, arguments);

        // initialize the router
        this.getRouter().initialize();
      },
    });
  }
);
