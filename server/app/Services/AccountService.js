const AccountException = use('App/Exceptions/AccountException')

const User = use('App/Models/User')
class AccountService{
    async isExisted(userData){
        if (await User.findBy("username", userData.username)){
            console.log("Username is existed")
            throw new AccountException("Username is existed, please try new one", 403)
        }
        if (await User.findBy("email", userData.email)){
            console.log('Email is existed')
            throw new AccountException("Email is existed, please try new one", 403)
        }
    }

    async checkLogin(username, password , auth){
        try{
            let token = await auth.attempt(username, password)
            return token
        }
        catch(error){
            // console.log("ERORR",error)
            // console.log("MESSAGE", error.message)
            throw new AccountException("Login failed, please try again", 403)
        }
    }
}


module.exports = new AccountService