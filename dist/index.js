import express from 'express';
const app = express();
const port = 3000;
// Sample data
const projects = [
    {
        id: 1,
        title: "delectus aut autem",
        description: "quis ut nam facilis et officia qui"
    },
    {
        id: 2,
        title: "delectus aut autem",
        description: "quis ut nam facilis et officia qui"
    },
    {
        id: 3,
        title: "delectus aut autem",
        description: "quis ut nam facilis et officia qui"
    },
];
// CREATE
// Add a new project
app.post('/api/projects', (req, res) => {
    res.status(201).json({
        message: 'NEW PROJECT ADDED!'
    });
});
// READ
// 1. Show projects
app.get('/api/projects', (req, res) => {
    res.status(200).json({
        message: 'ALL PROJECTS',
        projects
    });
});
// 2. Show a specific project using its ID
app.get('/api/projects/:id', (req, res) => {
    const targetID = parseInt(req.params.id);
    res.status(200).json({
        message: `READ PROJECT ${targetID}`,
        project: projects.find(project => project.id === targetID) || "No project"
    });
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
        projects: projects.filter(project => project.id !== targetID)
    });
});
app.listen(port, () => {
    console.log(`Server is listening and running on http://localhost:${port}`);
});
