sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";
  return Controller.extend("myapp.controller.ProjectList", {
    onInit: function () {
      // Datele proiectului
      var oData = {
        projects: [
          {
            name: "License Automation Process",
            description:
              "Reports and customization tables for customer contracts. Trigger, delete, list license based on parameters introduced by the customer in Jira.",
            technologies: "ABAP, JIRA, DB, openSQL, APIs, Customization tables",
          },
          {
            name: "Interface Manager Maintenance",
            description:
              "ATC checks to adapt existing code to HANA requirements. Maintenance and new development of Interface Manager.",
            technologies: "ABAP FMs, Forms and Subroutines",
          },
          {
            name: "CHARM Migration",
            description:
              "Reports to define attributes into the product's db tables. Report to extract the information from CHARM",
            technologies: "ABAP OOP Reports, Smartforms",
          },
          {
            name: "SAP FIORI License",
            description:
              "Small application to get data from SAP Database tables into the Ui. Other operations: sort, filter, search, filter range",
            technologies:
              "ABAP OOP, ODATA Services, SAP Gateway Services, Ui5 - javaScript, XML",
          },
          {
            name: "SAP IBPP Calculator",
            description:
              "Ui5 project with SAP: IBPP calculator GTS, duration 6 months, just front end.",
            technologies: "Ui5, Routing, XML, jsPDF",
          },
          {
            name: "Separate small React JS applications",
            description:
              "Counters, state manangement, react components knowledge",
            technologies: "React",
          },
          {
            name: "Small Ui5 applications",
            description: "MVC, Routing",
            technologies: "Ui5",
          },
          {
            name: "CDS course",
            description:
              "Using HANA SAP system and ABAP Development Tools: experience with creating views, publishing odata serivces, annotations, basic, composite, consumption views",
            technologies: "ABAP new syntax, CDS views, Eclipse ADT",
          },
          {
            name: "ABAP OOP course",
            description:
              "Different exercises with ABAP Object Oriented as in many cases in the project we didn't agree on using new syntax or ABAP OO.",
            technologies: "ABAP OOP",
          },
        ],
      };

      var oModel = new sap.ui.model.json.JSONModel(oData);
      this.getView().setModel(oModel, "projects");
    },

    // Funcția pentru butonul "Back"
    onNavBack: function () {
      var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
      oRouter.navTo("main"); // Navighează înapoi la pagina principală
    },
  });
});
