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
            description,
            completed: false
        })
        await project.tasks().save(task)
        return task
    }

    async destroy({request, auth, params}){
        const user = await auth.getUser()
        const {id}  = params
        const task = await Task.find(id)
        const project = await task.project().fetch()
        AuthorizationService.verifyPermission(project, user)
        await task.delete()
        return task
    }
    async update({request, auth, params}){
        const user = await auth.getUser()
        const {id}  = params
        const task = await Task.find(id)
        const project = await task.project().fetch()

        AuthorizationService.verifyPermission(project, user)
        task.merge(request.only(['description', 'completed']))
        await task.save()
        return task
    }

}

module.exports = TaskController
