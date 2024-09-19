sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
  ],
  function (Controller, JSONModel, MessageToast) {
    "use strict";

    return Controller.extend("myapp.controller.AddProject", {
      onInit: function () {
        var oData = {
          projects: [],
          newProject: {
            name: "",
            description: "",
            startDate: "",
          },
        };

        var oModel = new JSONModel(oData);
        this.getView().setModel(oModel, "projects");
        this.getView().setModel(oModel, "newProject");
      },

      onSaveProject: function () {
        var oModel = this.getView().getModel("projects");
        var aProjects = oModel.getProperty("/projects");

        var oNewProject = this.getView()
          .getModel("newProject")
          .getProperty("/newProject");

        // Validare
        if (
          !oNewProject.name.trim() ||
          !oNewProject.description.trim() ||
          !oNewProject.startDate
        ) {
          MessageToast.show("Please fill in all fields before saving.");
          return;
        }

        // Adăugare proiect
        aProjects.push({
          name: oNewProject.name,
          description: oNewProject.description,
          startDate: oNewProject.startDate,
        });

        // Actualizare model
        oModel.setProperty("/projects", aProjects);

        // Resetare câmpuri
        this.getView().getModel("newProject").setProperty("/newProject", {
          name: "",
          description: "",
          startDate: "",
        });

        MessageToast.show("Project saved successfully!");
      },

      onNavBack: function () {
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter.navTo("main");
      },
    });
  }
);
