const canvasSettings = {
		width:window.screen.width > window.screen.height ? window.screen.width/2 : window.screen.width,
		height:window.screen.height/2,
		dpi:2,
		lineWidth:4,
}


canvasSettings.dpiWidth = canvasSettings.width * canvasSettings.dpi;
canvasSettings.dpiHeight = canvasSettings.height * canvasSettings.dpi;

export default canvasSettings;
