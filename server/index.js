const express = require("express");
const mC = require('./Controllers/messages_controller')

const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));

app.post(`/api/messages`, mC.create);
app.get(`/api/messages`, mC.read);
app.put(`"/api/messages"/:id`, mC.update);
app.delete(`"/api/messages"/:id`, mC.delete);

const port = 3001;
app.listen(port, () => {console.log(`Server listening on port ${port}`);});