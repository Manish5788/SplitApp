/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"fosl/foslprj/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
