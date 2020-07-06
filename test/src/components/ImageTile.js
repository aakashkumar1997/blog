import React from 'react';

class ImageTile extends React.Component {
	
	constructor () {
		super()
		this.state = {
			styles: {
				width: "200px",
				height: "200px",
				border: "1px solid black",
				borderRadius: "4px",
				margin: "20px 30px",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center"
			},
			imgStyles: {
				width: "100%",
				height: "auto",
				objectFit: "fill"
			}			
		}
	}

	render () {
		return (
			<div style = {this.state.styles}>
				<img src = {this.props.imgUrl} alt = "img_alt" style = {this.state.imgStyles}/>
				<div style = {{textAlign: "center", padding: "10px"}}> {this.props.name} </div>
			</div>
		);
	}
}

export default ImageTile