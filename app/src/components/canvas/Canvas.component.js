import React, {Component, createRef} from 'react';
import './styles.css'

class CanvasComponent extends Component{
	constructor(props) {
		super(props);
		
		this.state = {
			width: window.screen.width > window.screen.height ? window.screen.width/2 : window.screen.width,
			height: window.screen.height/2,
			dpi: 2,
			data: [0, 100, 250, 150, 300, 320, 100, 460, 50]
		}
		
		this.canvas = createRef()
	}
	componentDidMount() {
		const {current: canvas} = this.canvas;
		canvas.style.width = this.state.width + 'px';
		canvas.style.height = this.state.height + 'px';
		canvas.width = this.state.width * this.state.dpi;
		canvas.height = this.state.height * this.state.dpi;
		this.updateCanvas();
	}
	
	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('update');
		this.updateCanvas();
	}
	
	updateCanvas() {
		const ctx = this.canvas.current.getContext('2d');
		const step = Math.floor(this.state.width * this.state.dpi / this.state.data.length);
		const dpi_height = Math.floor(this.state.dpi * this.state.height);
		ctx.fillStyle = '#000000';
		ctx.beginPath();
		let x = 0;
		for (const y of this.state.data) {
			ctx.lineTo(x, dpi_height - y);
			x += step;
		}
		ctx.stroke();
		ctx.closePath();
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
		console.log(this.props.data);
		return (
			<canvas ref={this.canvas} width={this.state.width} height={this.state.height}/>
		)
	}
}

export default CanvasComponent;
