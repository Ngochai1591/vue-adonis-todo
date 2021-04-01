const AccountExistedException = use('App/Exceptions/AccountExistedException')

const User = use('App/Models/User')
class AccountService{
    async isExisted(userData){
        if (await User.findBy("username", userData.username)){
            console.log("Username is existed")
            throw new AccountExistedException("Username is existed, please try new one", 403)
        }
        if (await User.findBy("email", userData.email)){
            console.log('Email is existed')
            throw new AccountExistedException("Email is existed, please try new one", 403)
        }
    }
}

module.exports = new AccountService