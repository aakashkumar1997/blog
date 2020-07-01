import React from 'react';

function ImageTile(props) {
	const styles = {
		width: "200px",
		height: "200px",
		border: "1px solid black",
		borderRadius: "4px",
		margin: "0 30px"
	};

	const imgStyles = {
		maxWidh: "100px",
		maxHeight: "100px"
	};

	return (
		<div style = {styles}>
			<img src = {props.imgUrl} alt = "img_alt" style = {imgStyles}/>
			<div> {props.name} </div>
		</div>
	);
}

export default ImageTile