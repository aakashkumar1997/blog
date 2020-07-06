import React from "react"
import Header from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer"
import randomWords from "random-words"

function BlogContainer () {

	const blogContent = {
		heading: "Blog Heading",
		content: randomWords(
			{
				exactly: 100,
				wordsPerString: 10,
				join: '. ',
				formatter: (word, index)=> {
					return index === 0 ? word.slice(0,1).toUpperCase().concat(word.slice(1)) : word;
				}
			}
		)
	}

	const [heading, setHeading] = React.useState("")
	const [mainContent, setmainContent] = React.useState("")

	React.useEffect( () => {
		setHeading(prevHeading => blogContent.heading)
		setmainContent(prevMainContent => blogContent.content)
	}, [])

	return (
		<div style = {{
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center"
		}}>
			<Header heading = {heading}/>
			<MainContent mainContent = {mainContent}/>
			<Footer />
		</div>
	)
}

export default BlogContainer