import express from 'express';
import { Project } from './models/Project.js';
import mongoose from 'mongoose';
const app = express();
// To extract JSON body quickly
app.use(express.json());
const port = process.env.PORT || 3000;
// Connect to MongoDB using Mongoose
mongoose
    .connect('mongodb+srv://loickcherimont:test123@cluster0.rktks.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('Connected with SUCCESS!'))
    .catch(() => console.error('Connection failed!'));
// Sample data
// const projects: Project[] = [
//     {
//         id: 1,
//         title: "delectus aut autem",
//         description: "quis ut nam facilis et officia qui"
//     },
//     {
//         id: 2,
//         title: "delectus aut autem",
//         description: "quis ut nam facilis et officia qui"
//     },
//     {
//         id: 3,
//         title: "delectus aut autem",
//         description: "quis ut nam facilis et officia qui"
//     },
// ];
// *** Routes
// CREATE
// Add a new project
// /!\ Need a minimal front-end project to run correctly /!\
app.post('/api/projects', (req, res) => {
    // delete req.body._id;
    console.log(req.body._id);
    const project = new Project({
        ...req.body
    });
    project
        .save()
        .then(() => res.status(201).json({
        message: 'New project added!',
        myid: req.body._id
    }))
        .catch((err) => res.status(404).json({ err }));
});
// READ
// 1. Show projects
app.get('/api/projects', (req, res) => {
    // Use "find" to fetch all projects from the database
    Project
        .find()
        .then(projects => res.status(200).json({
        message: 'All projects',
        projects
    }))
        .catch(err => res.status(400).json(err));
});
// 2. Show a specific project using its ID
app.get('/api/projects/:id', (req, res) => {
    // Use "findOne" to fetch a specific project from the database
    const targetID = parseInt(req.params.id);
    Project
        .findOne({ _id: req.params.id })
        .then(project => res.status(200).json({
        message: `Show project with ID: ${targetID}`,
        project
    }))
        .catch(err => res.status(400).json({ err }));
    // res.status(200).json({
    //     message: `READ PROJECT ${targetID}`,
    //     // project: projects.find(project => project.id === targetID) || "No project"
    // });
});
// UPDATE
// Modify an existing project
app.put('/api/projects/:id', (req, res) => {
    res.status(200).json({
        message: `UPDATE PROJECT ${req.params.id}`
    });
});
// DELETE
// Delete an existing project using its ID
app.delete('/api/projects/:id', (req, res) => {
    const targetID = parseInt(req.params.id);
    res.status(200).json({
        message: `DELETE PROJECT ${req.params.id}`,
        // projects: projects.filter(project => project.id !== targetID)
    });
});
app.listen(port, () => {
    console.log(`Server is listening`);
});
