sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/core/UIComponent"],
  function (Controller, UIComponent) {
    "use strict";
    return Controller.extend("myapp.controller.Projects", {
      onNavigateToProfile: function () {
        UIComponent.getRouterFor(this).navTo("main");
      },

      onNavigateToAddProject: function () {
        UIComponent.getRouterFor(this).navTo("addProject");
      },
    });
  }
);
