//@ui5-bundle myapp/Component-preload.js
sap.ui.predefine("myapp/Component", ["sap/ui/core/UIComponent"],function(t){"use strict";return t.extend("myapp.Component",{metadata:{manifest:"json"},init:function(){t.prototype.init.apply(this,arguments)}})});
sap.ui.require.preload({
	"myapp/Main.js":function(){

},
	"myapp/manifest.json":'{"sap.app":{"id":"myapp","type":"application","title":"My First UI5 App"},"sap.ui5":{"rootView":{"viewName":"myapp.view.Main","type":"XML","async":true}}}'
});
//# sourceMappingURL=Component-preload.js.map
