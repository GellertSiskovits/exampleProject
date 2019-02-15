sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("stack.stack.controller.View1", {
		oRouter:undefined,
		onInit: function () {
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		},

		onNav: function() {
			this.oRouter.navTo("main");
		}
	});
});