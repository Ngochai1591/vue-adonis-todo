import Vue from 'vue'
import HTTP from '../http'

export default {
    namespaced: true,
    state:{
        projects: [],
        newProjectName: null,
    },
    actions:{
        deleteProject({commit}, project){
            console.log("DELETE PROJECTS")
            return HTTP().delete(`/projects/${project.id}`)
            .then(()=>{
                commit('removeProject', project)
            })
        },
        saveProject({commit}, project){
            console.log('SAVING PROJECTS')
            return HTTP().patch(`/projects/${project.id}`, project)
            .then(()=>{
                commit('unsetEditMode', project)
            })
        },
        fetchProjects({commit}){
            console.log("FETCHING PROJECTS")
            return HTTP().get('/projects')
            .then(({data})=>{
                commit('setProjects', data)
            })
        },
        createProject({commit,state}){
            return HTTP().post('/projects', {
                title: state.newProjectName,
            }).then(({data}) =>{
                commit('appendProject', data)
                commit('setNewProjectName', null)

            })
        }
    },
    getters:{

    },
    mutations:{
        setNewProjectName(state, name){
            state.newProjectName = name
        },
        appendProject(state, project){
            state.projects.push(project)
        },
        setProjects(state, projects){
            state.projects = projects
        },
        setEditMode(state, project){
            Vue.set(project, 'isEditMode', true)
        },
        unsetEditMode(state, project){
            Vue.set(project, "isEditMode", false)
        },
        setProjectTitle(state, {project, title}){
            project.title = title
        },
        removeProject(state, project){
            state.projects.splice(state.projects.indexOf(project), 1);
        }
    }
}