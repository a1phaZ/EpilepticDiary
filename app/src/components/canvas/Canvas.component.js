import React, {Component, createRef} from 'react';
import canvasSettings from "./canvas.settings";
import './styles.css'

console.log(canvasSettings);

class CanvasComponent extends Component{
	constructor(props) {
		super(props);
		
		this.state = {
			width: canvasSettings.width,
			height: canvasSettings.height,
			data: [['y0', 0, 100, 250, 150, 300, 320, 100, 460, 50], ['y1', 100, 50, 450, 10, 200, 120, 400, 40, 250]]
		}
		
		this.canvas = createRef()
	}
	componentDidMount() {
		const {current: canvas} = this.canvas;
		canvas.style.width = canvasSettings.width + 'px';
		canvas.style.height = canvasSettings.height + 'px';
		canvas.width = canvasSettings.dpiWidth;
		canvas.height = canvasSettings.dpiHeight;
		this.updateCanvas();
	}
	
	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('update');
		this.updateCanvas();
	}
	
	updateCanvas() {
		const {colors} = this.props.data;
		const {data} = this.state;
		const ctx = this.canvas.current.getContext('2d');
		const step = Math.floor(canvasSettings.dpiWidth / data[0].length);
		ctx.lineWidth = canvasSettings.lineWidth;
		
		data.forEach((column) => {
			ctx.beginPath();
			let x = 0;
			ctx.strokeStyle = colors && colors[column[0]];
			for (const y of column) {
				if (typeof y === 'string') continue;
				ctx.lineTo(x, canvasSettings.dpiHeight - y);
				x += step;
			}
			ctx.stroke();
			ctx.closePath();
		});
		
		
		// console.log(window.screen.width, window.screen.height);
		// const {columns, colors} = this.props.data;
		// const ctx = this.canvas.current.getContext('2d');
		// if (colors && columns) {
		//
		// 	ctx.fillStyle = '#000000'
		// 	ctx.beginPath()
		// 	ctx.lineTo(0, 50);
		// 	ctx.lineTo(50, 100);
		// 	ctx.lineTo(100, 50);
		// 	ctx.stroke();
		// 	ctx.closePath();
		// 	// ctx.strokeStyle=colors['y0'];
		// 	// console.log(ctx.strokeStyle);
		// 	// ctx.lineWidth='5px';
		// 	// ctx.beginPath();
		// 	// ctx.lineTo(100, 100);
		// 	// ctx.stroke();
		// 	// ctx.closePath();
		// }
	}
	
	render() {
		return (
			<canvas ref={this.canvas} width={this.state.width} height={this.state.height}/>
		)
	}
}

export default CanvasComponent;
