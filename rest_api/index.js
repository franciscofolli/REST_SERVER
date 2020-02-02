const express = require('express');
const cors = require('cors'); 
const app = express();app.use(cors());

app.listen(8866, () => console.log('API ESCUTANDO NA PORTA 8866'));

app.post('/rest/appticketdfs/v1/servicedesk/create/', (req, res) => {
    var headers = req.rawHeaders;
    console.log(headers);
    if(!headers.includes("eusoufoda")){
        res.status(400).send("token inválido");
        return;
    }
    headers = req.rawHeaders;
    console.log(headers);
    let body = req.body;
    console.log('body: ', body);
});
