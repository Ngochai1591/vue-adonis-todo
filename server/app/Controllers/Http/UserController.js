'use strict'

const User = use('App/Models/User')

class UserController {
    async login({request, auth}){
        const {email, password} =  request.all()
        const token = await auth.attempt(email, password)
        return token
    }

    
    async register({request}){
        const {email, password} = request.all()

        const user = new User()

        user.fill({
            email,
            password,
            username: email
        })
        await user.save();

        return this.login(...arguments)
         
        
        
    }
}

module.exports = UserController
