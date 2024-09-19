sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
  function (Controller, JSONModel) {
    "use strict";
    return Controller.extend("myapp.controller.Main", {
      onInit: function () {
        // Modelul inițial
        var oData = {
          recipient: {
            name: "John Doe",
            profession: "Software Developer",
            hobbies: ["Reading", "Traveling", "Coding"],
            education: "MSc Computer Science",
            photo: "https://via.placeholder.com/150",
          },
        };
        var oModel = new JSONModel(oData);
        this.getView().setModel(oModel);
      },

      onNavigateToAddProject: function () {
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter.navTo("addProject");
      },

      onNavigateToProjectList: function () {
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter.navTo("projectList");
      },
    });
  }
);
