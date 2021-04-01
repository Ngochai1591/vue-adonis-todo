import HTTP from '../http';

export default {
    namespaced: true,
    state: {
        registerUsername: null,
        registerEmail: null,
        registerPassword: null,
    },
    actions:{
        register({state}){
            HTTP().post('/auth/register',{
                username: state.registerUsername,
                email: state.registerEmail,
                password: state.registerPassword
            })
        }
    },
    mutations: {
        setRegisterUsername(state, username){
            state.registerUsername = username
        },
        setRegisterEmail(state, email){
            state.registerEmail = email
        },
        setRegisterPassword(state, password){
            state.registerPassword = password
        }
    },
}