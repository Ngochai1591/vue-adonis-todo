const InvalidAccessException = use('App/Exceptions/InvalidAccessException')
const ResourceNotExistException = use('App/Exceptions/ResourceNotExistException')

class AuthorizationService {
    verifyPermission(resource, user){
        if(!resource){
            console.log("resource is not exist")
            throw new ResourceNotExistException()
        }
        console.log("RESOUCE", resource)
    
        if (resource.user_id !== user.id){
            console.log("invalid access")
            throw new InvalidAccessException()
        }
    }

    
}
module.exports = new AuthorizationService