const express = require('express');
const app = express();

const imageData = [
	{
		"imgUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/0/07/Codeforces_logo.png/250px-Codeforces_logo.png",
		"name": "Aakash"	
	},
	{
		"imgUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/0/07/Codeforces_logo.png/250px-Codeforces_logo.png",
		"name": "Aakash"	
	},
	{
		"imgUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/0/07/Codeforces_logo.png/250px-Codeforces_logo.png",
		"name": "Aakash"	
	},
	{
		"imgUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/0/07/Codeforces_logo.png/250px-Codeforces_logo.png",
		"name": "Aakash"	
	},
	{
		"imgUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/0/07/Codeforces_logo.png/250px-Codeforces_logo.png",
		"name": "Aakash"	
	},
	{
		"imgUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/0/07/Codeforces_logo.png/250px-Codeforces_logo.png",
		"name": "Aakash"	
	},
	{
		"imgUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/0/07/Codeforces_logo.png/250px-Codeforces_logo.png",
		"name": "Aakash"	
	},
	{
		"imgUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/0/07/Codeforces_logo.png/250px-Codeforces_logo.png",
		"name": "Aakash"	
	},
	{
		"imgUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/0/07/Codeforces_logo.png/250px-Codeforces_logo.png",
		"name": "Aakash"	
	},
	{
		"imgUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/0/07/Codeforces_logo.png/250px-Codeforces_logo.png",
		"name": "Aakash"	
	},
	{
		"imgUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/0/07/Codeforces_logo.png/250px-Codeforces_logo.png",
		"name": "Aakash"	
	},
	{
		"imgUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/0/07/Codeforces_logo.png/250px-Codeforces_logo.png",
		"name": "Aakash"	
	},
	{
		"imgUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/0/07/Codeforces_logo.png/250px-Codeforces_logo.png",
		"name": "Aakash"	
	},
	{
		"imgUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/0/07/Codeforces_logo.png/250px-Codeforces_logo.png",
		"name": "Aakash"	
	},
	{
		"imgUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/0/07/Codeforces_logo.png/250px-Codeforces_logo.png",
		"name": "Aakash"	
	},
	{
		"imgUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/0/07/Codeforces_logo.png/250px-Codeforces_logo.png",
		"name": "Aakash"	
	},
	{
		"imgUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/0/07/Codeforces_logo.png/250px-Codeforces_logo.png",
		"name": "Aakash"	
	},
	{
		"imgUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/0/07/Codeforces_logo.png/250px-Codeforces_logo.png",
		"name": "Aakash"	
	},
	{
		"imgUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/0/07/Codeforces_logo.png/250px-Codeforces_logo.png",
		"name": "Aakash"	
	},
	{
		"imgUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/0/07/Codeforces_logo.png/250px-Codeforces_logo.png",
		"name": "Aakash"	
	},
	{
		"imgUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/0/07/Codeforces_logo.png/250px-Codeforces_logo.png",
		"name": "Aakash"	
	},
	{
		"imgUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/0/07/Codeforces_logo.png/250px-Codeforces_logo.png",
		"name": "Aakash"	
	}
];

app.get('/', (req, res) => {
	return res.send('Hello World');
});

app.get('/fetchImageData', (req, res) => {
	// console.log(imageData)
	return res.send(imageData)
})

app.listen(process.env.PORT || 5000)