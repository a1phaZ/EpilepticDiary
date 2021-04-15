import React, {Component, createRef} from 'react';
import canvasSettings from "./canvas.settings";

import './styles.css';
import {Col} from "react-bootstrap";

class CanvasComponent extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			width: canvasSettings.width,
			height: canvasSettings.height,
			x: null,
			details: null,
			timeOut: null
		}
		
		this.canvas = createRef()
		this.handleTouch = this.handleTouch.bind(this);
		this.handleTouchLeave = this.handleTouchLeave.bind(this);
	}
	
	componentDidMount() {
		const {current: canvas} = this.canvas;
		canvas.style.width = canvasSettings.width + 'px';
		canvas.style.height = canvasSettings.height + 'px';
		canvas.width = canvasSettings.dpiWidth;
		canvas.height = canvasSettings.dpiHeight;
		canvas.style.marginLeft = canvasSettings.margin + 'px';
		canvas.style.marginRight = canvasSettings.margin + 'px';
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
			
			const yLineData = columns.filter((col) => types[col[0]] === 'line');
			const yBlockData = columns.filter((col) => types[col[0]] === 'block');
			const xData = columns.filter((col) => types[col[0]] !== 'line' && types[col[0]] !== 'block')[0];
			
			if (!yMin && !yMax) {
				ctx.fillText('Нет данных для отображения', 20, 50);
				return;
			}
			this.drawHelperYLines(ctx, yMin, yMax);
			this.drawHelperXText(ctx, xData, xRatio);
			
			yLineData.map(this.toLineCoords(xRatio, yRatio)).forEach((coords, idx) => {
				// this.drawHelperXLine(ctx, this.state.x);
				const color = colors[yLineData[idx][0]];
				this.line(ctx, coords, {color});
			});
			
			yBlockData.map(this.toBlockCoords(xRatio, yRatio)).forEach((coords, idx) => {
				const color = colors[yBlockData[idx][0]];
				this.block(ctx, coords, {color});
			});
			
			if (this.state.x) {
				this.drawHelperXLine(ctx, this.state.x);
			}
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
		ctx.lineWidth = 1;
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
	
	drawHelperXLine(ctx, x) {
		ctx.save();
		ctx.beginPath();
		ctx.strokeStyle = '#bbb';
		ctx.lineWidth = 1;
		
		ctx.moveTo(x, 0);
		ctx.lineTo(x, canvasSettings.dpiHeight);
		
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
	
	handleTouch(e) {
		if (this.state.timeOut) {
			this.setState({timeOut: clearTimeout(this.state.timeOut)})
		}
		const clientX = e.touches ? e.touches[0].clientX : e.clientX;
		const x = (clientX - canvasSettings.margin) * canvasSettings.dpiWidth / canvasSettings.width;
		const viewWidth = canvasSettings.dpiWidth;
		const xRatio = viewWidth / (this.props.data.columns[0].length - 1);
		const index = Math.round(this.props.data.columns[0].length - ((canvasSettings.dpiWidth - x + (xRatio / 2)) / xRatio));
		this.setState({
			x: x,
			details:
				(index !== 0 && index <= this.props.data.columns[0].length - 1) ?
					{
						date: this.props.data.columns[0][index],
						attack: this.props.data.columns[1][index],
						strength: this.props.data.columns[2][index],
					} :
					null
		});
	}
	
	handleTouchLeave() {
		if (!this.state.timeOut){
			this.setState({
				timeOut: setTimeout(() => {
					this.setState({x: null, details: null});
				}, 2000)
			});
		}
	}
	
	render() {
		const {details} = this.state;
		return (
			<div>
				<canvas
					ref={this.canvas}
					width={this.state.width}
					height={this.state.height}
					onTouchStart={this.handleTouch}
					onTouchMove={this.handleTouch}
					onTouchCancel={this.handleTouchLeave}
					onTouchEnd={this.handleTouchLeave}
					onMouseEnter={this.handleTouch}
					onMouseMove={this.handleTouch}
					onMouseLeave={this.handleTouchLeave}
				/>
				<Col>
					{
						details ?
							<>
								<p>Дата: {details.date}</p>
								<p>Кол-во приступов: {details.attack}</p>
								<p>Средняя сила: {details.strength} из 3</p>
							</> :
							<p>Выбирите значение на графике</p>
					}
				</Col>
			</div>
		)
	}
}

export default CanvasComponent;
