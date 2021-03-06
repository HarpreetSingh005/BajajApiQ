const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }));

app.get("/",(req,res) =>{
	res.send("Hello");
})

app.post("/bfhl",(req,res) => {
    const data = req.body.data;

    const num = [];
    const alp = [];

    data.forEach((k) => {
        if(isNaN(k))
            alp.push(k);
        else
            num.push(k);
    })

    const result ={
        is_success: true,
        user_id: "john_doe_17091999",
        email : "john@xyz.com",
        roll_number:"ABCD123",
        numbers: num,
        alphabets: alp
    }

    res.send(JSON.stringify(result));
})

app.listen(port, () => {
	console.log(`App listening at http://localhost:${port}`)
})
