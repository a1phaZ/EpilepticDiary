import React, {Component, createRef} from 'react';
import canvasSettings from "./canvas.settings";
import {format} from 'date-fns';

import './styles.css';
import {getMax} from "../../_functions/stats";

class CanvasComponent extends Component{
	constructor(props) {
		super(props);
		
		this.state = {
			width: canvasSettings.width,
			height: canvasSettings.height,
		}
		
		this.canvas = createRef()
	}
	componentDidMount() {
		const {current: canvas} = this.canvas;
		canvas.style.width = canvasSettings.width + 'px';
		canvas.style.height = canvasSettings.height + 'px';
		canvas.width = canvasSettings.dpiWidth;
		canvas.height = canvasSettings.dpiHeight;
		canvas.style.paddingTop = canvasSettings.padding+'px';
		canvas.style.paddingBottom = canvasSettings.padding+'px';
		canvas.style.marginLeft = canvasSettings.margin+'px';
		canvas.style.marginRight = canvasSettings.margin+'px';
		this.updateCanvas();
	}
	
	componentDidUpdate(prevProps, prevState, snapshot) {
		this.updateCanvas();
	}
	
	updateCanvas() {
		if (this.props.data) {
			const {columns, colors} = this.props.data;
			const {dpiWidth, dpiHeight, helperLineCount, padding, lineWidth} = canvasSettings;
			const ctx = this.canvas.current.getContext('2d');
			
			const yLineStep = dpiHeight / helperLineCount;
			const valueStep = Math.round(getMax(columns[1]) / helperLineCount);
			
			this.drawHelperYlines(ctx, helperLineCount, dpiHeight, padding, yLineStep, valueStep, dpiWidth);
			
			ctx.save();
			ctx.lineWidth = lineWidth;
			ctx.font = "25px monospace";
			
			const step = Math.floor(canvasSettings.dpiWidth / columns[0].length);
			const delta = canvasSettings.dpiHeight / getMax(columns[1]);
			columns.forEach((column) => {
				let _x = 0;
				if (column[0] === 'x') {
					const xStep = Math.round(column.length / 5);
					for (let x = 1; x < column.length; x = x+xStep) {
						ctx.fillText(format(new Date(column[x]), 'dd MMM'), ((x-1) * step), canvasSettings.dpiHeight - padding);
					}
				}
				ctx.beginPath();
				ctx.strokeStyle = colors && colors[column[0]];
				for (const y of column) {
					if (typeof y === 'string') continue;
					ctx.lineTo(_x, canvasSettings.dpiHeight - y*delta - padding * 2);
					_x += step;
				}
				ctx.stroke();
				ctx.closePath();
			});
		}
	}
	
	drawHelperYlines(ctx, helperLineCount, dpiHeight, padding, yLineStep, valueStep, dpiWidth) {
		ctx.save();
		ctx.beginPath();
		ctx.strokeStyle = 'rgb(163,163,163)';
		ctx.font = "30px monospace";
		
		for (let i = 0; i < helperLineCount; i++) {
			const y = dpiHeight - padding * 2 - yLineStep * i;
			ctx.moveTo(0, y);
			ctx.fillText((valueStep * i).toString(), 0, y);
			ctx.setLineDash([15, 5]);
			ctx.lineTo(dpiWidth, y);
		}
		
		ctx.stroke();
		ctx.closePath();
		ctx.restore();
	}
	
	render() {
		return (
			<canvas ref={this.canvas} width={this.state.width} height={this.state.height}/>
		)
	}
}

export default CanvasComponent;
