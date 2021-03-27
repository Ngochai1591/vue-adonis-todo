'use strict'

const AuthorizationService = require("../../Services/AuthorizationService")

const Task = use('App/Models/Task')
const Project = use('App/Models/Project')


class TaskController {
    async index({request, auth, params}){
        const user = await auth.getUser()
        const {id} = params
        const project = await Project.find(id)
        AuthorizationService.verifyPermission(project, user)

        const task = project.tasks().fetch()
        return task
    }

    async create({request, auth, params}){
        const user = await auth.getUser()
        const {description} = request.all()
        const {id} = params
        const project = await Project.find(id)
        AuthorizationService.verifyPermission(project, user)
        
        const task = new Task()
        task.fill({
            description
        })
        await project.tasks().save(task)
        return task
    }
}

module.exports = TaskController
