
const express = require('express');
const cors = require('cors')
const app = express();
const port = 3000;
const host = 'localhost';
const { projects } = require('./models/projects');
const { users } = require('./models/users');

app.listen(port, () => console.log(`http://${host}:${port}`))
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//******* GET APIs **********/
// Get one project by id
app.get('/api/projects/:id', (req, res) => {
    let id = Number(req.params.id);
    const project = projects[projects.findIndex(p => p.id === id)] || projects[0];
    res.send(project);
})

// Get all projects
app.get('/api/projects/', (req, res) => {
    res.send(projects)
})

// Get one user by id
app.get('/api/users/:id', (req, res) => {
    let id = Number(req.params.id);
    const user = users[users.findIndex(p => p.id === id)] || users[0];
    res.send(user);
})

// Get all users
app.get('/api/users/', (req, res) => {
    res.send(users)
})

//******* DELETE APIs **********/
// Delete one project by id
app.delete('/api/projects/:id', (req, res) => {
    let id = Number(req.params.id);
    let index = projects.findIndex(p => p.id === id);
    if (index !== -1) {
        projects.splice(index, 1);
        res.send({"status":"Project was deleted"})
    }

    res.send({"status":"Project was not found."});
})

// Delete all projects
app.delete('/api/projects/', (req, res) => {
    projects.splice(0);
    res.send({"status":"All projects deleted"})
})

// Delete one user by id
app.delete('/api/users/:id', (req, res) => {
    let id = Number(req.params.id);
    let index = users.findIndex(p => p.id === id);
    if (index !== -1) {
        users.splice(index, 1);
        res.send({"status":"User updated."})
    }

    res.send({"status":"User was not found."});
})

// Delete all users
app.delete('/api/users/', (req, res) => {
    users.splice(0);
    res.send({"status":"All users deleted"})
})

//******* PUT APIs **********/
app.put('/api/projects/:id',(req,res)=>{
    const project = req.body;
    const id = Number(req.params.id);
    const index = projects.findIndex(p => p.id === id);
    if(index !== -1){
        projects[index] = project;
        res.send({"status":"Project updated."})
    }
    res.send({"status":"Project not found. Could not update."})
})

app.put('/api/users/:id',(req,res)=>{
    const user = req.body;
    const id = Number(req.params.id);
    const index = users.findIndex(u => u.id === id);
    if(index !== -1){
        users[index] = user;
        res.send({"status":"User updated."})
    }
    res.send({"status":"User not found. Could not update."})
})

//******* POST APIs **********/
app.post('/api/projects/',(req,res)=>{
    const project = req.body;
    console.log(project);
    projects.push(project);
    res.send({"status":"Project added."})
})

app.post('/api/users/',(req,res)=>{
    const user = req.body;
    users.push(user);
    res.send({"status":"User added."})
})
