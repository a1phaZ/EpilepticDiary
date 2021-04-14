const canvasSettings = {
	margin: 20,
	padding: 40,
	dpi: 2,
	lineWidth: 4,
	helperLineCount: 5,
}

canvasSettings.width = window.screen.width > window.screen.height ? (window.screen.width/2) - (canvasSettings.margin * 2) : window.screen.width - canvasSettings.margin * 2;
canvasSettings.height = window.screen.height/2;
canvasSettings.dpiWidth = canvasSettings.width * canvasSettings.dpi;
canvasSettings.dpiHeight = canvasSettings.height * canvasSettings.dpi;
canvasSettings.viewHeight = canvasSettings.dpiHeight - canvasSettings.padding * 2;

export default canvasSettings;
