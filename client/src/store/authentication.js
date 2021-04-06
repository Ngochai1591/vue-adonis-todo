import HTTP from '../http';
import router from '../router'

export default {
    namespaced: true,
    state: {
        registerUsername: null,
        registerEmail:  null,
        registerPassword: null,

        loginUsername: null,
        loginPassword: null,

        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjQsImlhdCI6MTYxNzY4MzM0M30.BgGk63qxCSTvHoN5v1c63Q0d1ysSfb_XzRrSHevgSMo",
        registerError: null,
        loginError: null,

    },
    actions:{
        logout({commit}){
            commit('setLoginUsername', null)
            commit('setLoginPassword', null)
            commit('setLoginError', null)
            commit('setRegisterError', null)
            commit('setRegisterUsername', null)
            commit('setRegisterEmail', null)
            commit('setRegisterPassword', null)
            commit('setToken', null)
            router.push('/login')
        },
        register({commit, state}){
            commit('setRegisterError', null)
            HTTP().post('auth/register',{
                username: state.registerUsername,
                email: state.registerEmail,
                password: state.registerPassword
            }).then(({data})=>{
                commit('setToken', data.token)
                router.push('/')
            }).catch(({response})=>{
                let error = response.data.error
                commit('setRegisterError', error)
            })
        },
        login({commit, state}){
            commit('setLoginError', null)
            HTTP().post('/auth/login', {
                username: state.loginUsername,
                password: state.loginPassword
            }).then(({data})=>{
                commit('setToken', data.token)
                router.push('/')
            }).catch(({response})=>{
                let error = response.data.error
                commit('setLoginError', error)
            })
        },
        resetState({commit}){
            commit('setLoginUsername', null)
            commit('setLoginPassword', null)
            commit('setLoginError', null)
            commit('setRegisterError', null)
            commit('setRegisterUsername', null)
            commit('setRegisterEmail', null)
            commit('setRegisterPassword', null)
            commit('setToken', null)
        }
    },
    getters:{
        isLogginedIn(state){
            console.log(state.token)
            console.log(!!state.token)
            return !!state.token
        }
    },
    mutations: {
        setLoginUsername(state, username){
            state.loginUsername = username
        },
        setLoginPassword(state, password){
            state.loginPassword = password
        },
        setLoginError(state, error){
            state.loginError = error
        },
        setRegisterError(state, error ){
            state.registerError = error
        },
        setRegisterUsername(state, username){
            state.registerUsername = username
        },
        setRegisterEmail(state, email){
            state.registerEmail = email
        },
        setRegisterPassword(state, password){
            state.registerPassword = password
        },
        setToken(state, token){
            state.token = token
        },
    },
}