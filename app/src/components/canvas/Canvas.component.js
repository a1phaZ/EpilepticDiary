import React, {Component, createRef} from 'react';
import canvasSettings from "./canvas.settings";
import {format} from 'date-fns';

import './styles.css';

class CanvasComponent extends Component{
	constructor(props) {
		super(props);
		
		this.state = {
			width: canvasSettings.width,
			height: canvasSettings.height,
			data: [
				['x', 0, 100, 250, 150, 300, 320, 100, 460, 50],
				['y0', 0, 100, 250, 150, 300, 320, 100, 460, 50],
				['y1', 100, 50, 450, 10, 200, 120, 400, 40, 250]
			]
		}
		
		this.canvas = createRef()
	}
	componentDidMount() {
		const {current: canvas} = this.canvas;
		canvas.style.width = canvasSettings.width + 'px';
		canvas.style.height = canvasSettings.height + 'px';
		canvas.width = canvasSettings.dpiWidth;
		canvas.height = canvasSettings.dpiHeight;
		canvas.style.paddingTop = '20px';
		canvas.style.paddingBottom = '20px';
		this.updateCanvas();
	}
	
	componentDidUpdate(prevProps, prevState, snapshot) {
		this.updateCanvas();
	}
	
	updateCanvas() {
		console.log(this.props.data);
		if (this.props.data) {
			// console.log(this.props.data);
			const {columns, colors} = this.props.data;
			const data = columns || [];
			const ctx = this.canvas.current.getContext('2d');
			const step = Math.floor(canvasSettings.dpiWidth / data[0].length);
			ctx.lineWidth = canvasSettings.lineWidth;
			ctx.font = "48px serif";

			data.forEach((column) => {
				let _x = 0;

				console.log(column);
				if (column[0] === 'x') {
					console.log(column.length);
					// const xStep = Math.round(column.length / 5);
					// console.log(xStep);
					for (let x = 1; x < column.length; x++) {
						ctx.fillText(format(new Date(column[x]), 'dd MMM'), x, canvasSettings.dpiHeight);
					}
				}
				// ctx.beginPath();
				// ctx.strokeStyle = colors && colors[column[0]];
				// for (const y of column) {
				// 	if (typeof y === 'string') continue;
				// 	ctx.lineTo(_x, canvasSettings.dpiHeight - y - 30);
				// 	_x += step;
				// }
				// ctx.stroke();
				// ctx.closePath();
			});
		}
		
		
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
