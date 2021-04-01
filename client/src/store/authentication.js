import HTTP from '../http';
import router from '../router'

export default {
    namespaced: true,
    state: {
        registerUsername: 'qa.admin',
        registerEmail: 'qa.admin@gmail.com',
        registerPassword: 'asdasd123',
        token: null,
        registerError: null
    },
    actions:{
        async register({commit, state}){
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
        }
    },
    getters:{
        isLoggined(state){
            return !!state.token
        }
    },
    mutations: {
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
        }
    },
}