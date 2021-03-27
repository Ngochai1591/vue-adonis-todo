'use strict'

const User = use('App/Models/User')

class UserController {
    async login({request, auth}){
        const {password, username} =  request.all()
        const token = await auth.attempt(username, password)
        return token
    }

    
    async register({request}){
        const {email, password, username} = request.all()

        const user = new User()

        user.fill({
            email,
            password,
            username
        })
        await user.save();

        return this.login(...arguments)
         
        
        
    }
}

module.exports = UserController
