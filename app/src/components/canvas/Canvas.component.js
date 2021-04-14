import React, {Component, createRef} from 'react';
import canvasSettings from "./canvas.settings";

import './styles.css';

class CanvasComponent extends Component {
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
		// canvas.style.paddingTop = canvasSettings.padding+'px';
		// canvas.style.paddingBottom = canvasSettings.padding+'px';
		canvas.style.marginLeft = canvasSettings.margin + 'px';
		canvas.style.marginRight = canvasSettings.margin + 'px';
		// console.log(this.props.data);
		this.updateCanvas();
	}
	
	componentDidUpdate(prevProps, prevState, snapshot) {
		this.updateCanvas();
	}
	
	updateCanvas() {
		if (this.props.data) {
			const {columns, colors, types} = this.props.data;
			const {dpiWidth, dpiHeight, viewHeight} = canvasSettings;
			const viewWidth = dpiWidth;
			const [yMin, yMax] = this.computeBoundaries(columns, types);
			const ctx = this.canvas.current.getContext('2d');
			ctx.font = "30px monospace";
			ctx.fillStyle = '#96a2aa';
			ctx.clearRect(0, 0, dpiWidth, dpiHeight);
			
			const yRatio = Math.floor(viewHeight / (yMax - yMin));
			const xRatio = viewWidth / (columns[0].length - 1);
			
			//
			
			
			const yLineData = columns.filter((col) => types[col[0]] === 'line');
			const yBlockData = columns.filter((col) => types[col[0]] === 'block');
			const xData = columns.filter((col) => types[col[0]] !== 'line' && types[col[0]] !== 'block')[0];
			
			this.drawHelperYLines(ctx, yMin, yMax);
			this.drawHelperXText(ctx, xData, xRatio);
			
			yLineData.map(this.toLineCoords(xRatio, yRatio)).forEach((coords, idx) => {
				const color = colors[yLineData[idx][0]];
				this.line(ctx, coords, {color});
			});
			
			yBlockData.map(this.toBlockCoords(xRatio, yRatio)).forEach((coords, idx) => {
				const color = colors[yBlockData[idx][0]];
				this.block(ctx, coords, {color});
			});
		}
	}
	
	toLineCoords(xRatio, yRatio) {
		return (col) =>
			col
				.map((y, idx) => [
					Math.floor((idx - 1) * xRatio + xRatio / 3),
					Math.floor(canvasSettings.dpiHeight - canvasSettings.padding - y * yRatio)
				])
				.filter((_, idx) => idx !== 0);
	}
	
	toBlockCoords(xRatio, yRatio) {
		return (col) =>
			col
				.map((y, idx) => [
					Math.floor((idx - 1) * xRatio),
					Math.floor(canvasSettings.dpiHeight - canvasSettings.padding - y * yRatio),
					xRatio / 1.5,
					y * yRatio
				])
				.filter((_, idx) => idx !== 0);
	}
	
	computeBoundaries(columns, types) {
		let min = null;
		let max = null;
		
		columns.forEach(col => {
			if (types[col[0] !== 'line' || types[col[0]] !== 'block']) return;
			
			if (typeof min !== 'number') min = col[1];
			if (typeof max !== 'number') max = col[1];
			
			if (min > col[1]) min = col[1];
			if (max < col[1]) max = col[1];
			
			for (let i = 2; i < col.length; i++) {
				if (min > col[i]) min = col[i];
				if (max < col[i]) max = col[i];
			}
		});
		
		return [min, max];
	}
	
	drawHelperXText(ctx, data, xRatio) {
		const colsCount = 6;
		const step = Math.round(data.length / colsCount);
		ctx.beginPath();
		for (let i = 1; i < data.length; i += step) {
			const text = new Date(data[i]).getDate();
			const x = (i - 1) * xRatio;
			ctx.fillText(text.toString(), x, canvasSettings.dpiHeight);
		}
		ctx.closePath();
	}
	
	drawHelperYLines(ctx, yMin, yMax) {
		const yLineStep = canvasSettings.viewHeight / canvasSettings.helperLineCount; //Шаг между вспомогательными линиями
		const textStep = (yMax - yMin) / canvasSettings.helperLineCount; //Шаг между вспомогательным текстом
		ctx.save();
		ctx.beginPath();
		ctx.strokeStyle = '#bbb';
		ctx.font = "20px monospace";
		ctx.fillStyle = '#96a2aa';
		for (let i = 1; i <= canvasSettings.helperLineCount; i++) {
			const y = yLineStep * i;
			const text = Math.round(yMax - textStep * i);
			ctx.moveTo(0, y + canvasSettings.padding);
			ctx.fillText(text.toString(), 0, y + canvasSettings.padding);
			ctx.setLineDash([15, 5]);
			ctx.lineTo(canvasSettings.dpiWidth, y + canvasSettings.padding);
		}
		
		ctx.stroke();
		ctx.closePath();
		ctx.restore();
	}
	
	line(ctx, coords, {color}) {
		ctx.beginPath();
		ctx.lineWidth = 4;
		ctx.strokeStyle = color;
		for (const [x, y] of coords) {
			ctx.lineTo(x, y);
		}
		ctx.stroke();
		ctx.closePath();
	}
	
	block(ctx, coords, {color}) {
		ctx.beginPath();
		ctx.lineWidth = 4;
		ctx.fillStyle = color;
		for (const [x, y, w, h] of coords) {
			ctx.rect(x, y, w, h);
		}
		ctx.stroke();
		ctx.fill();
		ctx.closePath();
	}
	
	render() {
		return (
			<canvas ref={this.canvas} width={this.state.width} height={this.state.height}/>
		)
	}
}

export default CanvasComponent;
