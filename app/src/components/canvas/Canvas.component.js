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
		// console.log(this.props.data);
		this.updateCanvas();
	}
	
	componentDidUpdate(prevProps, prevState, snapshot) {
		this.updateCanvas();
	}
	
	updateCanvas() {
		if (this.props.data) {
			const {columns, colors, types} = this.props.data;
			const {dpiWidth, dpiHeight, helperLineCount, padding, lineWidth} = canvasSettings;
			const ctx = this.canvas.current.getContext('2d');
			
			const yLineStep = dpiHeight / helperLineCount;
			const valueStep = Math.round(getMax(columns[1]) / helperLineCount);
			
			this.drawHelperYlines(ctx, helperLineCount, dpiHeight, padding, yLineStep, valueStep, dpiWidth);
			
			ctx.lineWidth = lineWidth;
			ctx.font = "25px monospace";
			
			const step = Math.floor(dpiWidth / columns[0].length);
			const delta = (dpiHeight-padding*2)/getMax(columns[1]);
			columns.forEach((column) => {
				let _x = 0;
				
				switch (types[column[0]]) {
					case 'x': {
						if (column.length > 2) {
							for (let x = 1; x < column.length; x++) {
								ctx.fillText(format(new Date(column[x]), 'dd MMM'), ((x-1) * step), dpiHeight - padding);
							}
						} else {
							ctx.fillText(format(new Date(column[1]), 'dd MMM'), step, dpiHeight - padding);
						}
						break;
					}
					case 'line': {
						ctx.beginPath();
						ctx.strokeStyle = colors && colors[column[0]];
						if (column.length > 2) {
							for (const y of column) {
								if (typeof y === 'string') continue;
								ctx.lineTo(_x, (dpiHeight-padding) - y*delta);
								_x += step;
							}
						} else {
							ctx.arc(_x+step, Math.round((dpiHeight-padding) - column[1]*delta), 5, 0, Math.PI*2);
						}
						ctx.stroke();
						ctx.closePath();
						break;
					}
					default: {
						break;
					}
				}
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
