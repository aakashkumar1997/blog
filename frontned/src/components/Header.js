import React from "react"
import randomcolor from "randomcolor"

function Header (props) {
	const [color, setColor] = React.useState("#0F0F0F")
	React.useEffect(() => {
		setInterval(() => {
			setColor(prevColor => randomcolor())
		}, 500)
	},[])
	return (
		<div className = "header" style = {{
			backgroundColor: color
		}}>
			{props.heading}
		</div>
	)
}

export default Header