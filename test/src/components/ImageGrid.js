import React from "react"
import ImageTile from "./ImageTile"

class ImageGrid extends React.Component {
	constructor () {
		super()
		this.state = {
			renderedImageData: []
		}
	}

	componentDidMount () {
		this.setState(prevState => {
			const renderedData = this.props.data.map(item => {
				return (<ImageTile imgUrl = {item.imgUrl} name = {item.name} />);
			})
			return {
				renderedImageData: renderedData
			}
		})
	}

	render () {
		return (
			<div style = {{display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "center"}}>
				{this.state.renderedImageData}
			</div>
		);
	}
}


export default ImageGrid