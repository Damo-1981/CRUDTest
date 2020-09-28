jQuery.sap.declare("crudView.Component");
sap.ui.getCore().loadLibrary("sap.ui.generic.app");
jQuery.sap.require("sap.ui.generic.app.AppComponent");

sap.ui.generic.app.AppComponent.extend("crudView.Component", {
	metadata: {
		"manifest": "json"
	}
});