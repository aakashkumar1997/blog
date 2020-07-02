import React from 'react';

function ImageTile(props) {
	const styles = {
		width: "200px",
		height: "200px",
		border: "1px solid black",
		borderRadius: "4px",
		margin: "20px 30px"
	};

	const imgStyles = {
		width: "100%",
		objectFit: "fill"
	};

	return (
		<div style = {styles}>
			<img src = {props.imgUrl} alt = "img_alt" style = {imgStyles}/>
			<div style = {{textAlign: "center", padding: "10px"}}> {props.name} </div>
		</div>
	);
}

export default ImageTile