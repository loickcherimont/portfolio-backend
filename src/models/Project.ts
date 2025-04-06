import mongoose from 'mongoose'

// Create a schema for product
const projectSchema = new mongoose.Schema({
    title: { type: String, required: true},
    description: { type: String, required: true},
})

// export type Project = {
//     id: number
//     title: string
//     description: string
// }

export const Project = mongoose.model('Project', projectSchema)