const Project = require('../models/project')

const initialProjects = [
  {
    name: 'This is project 1',
    current: true
  },
  {
    name: 'This is project 2',
    current: false
  }
]

const nonExistingId = async () => {
  const project = new Project({ content: 'willremovethissoon' })
  await project.save()
  await project.remove()

  return project._id.toString()
}

const projectsInDb = async () => {
  const projects = await Project.find({})
  return projects.map(project => project.toJSON())
}

module.exports = {
  initialProjects, nonExistingId, projectsInDb
}
