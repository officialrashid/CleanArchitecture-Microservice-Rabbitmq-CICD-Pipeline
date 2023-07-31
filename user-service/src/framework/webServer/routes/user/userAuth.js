import userController from '../../../../adaptors/controller/user/userController.js'
import userRepositoryImp from '../../../../framework/database/mongodb/repositories/user/userRepositoryImp.js'
import userRepositoryInt from '../../../../application/repositories/user/userRepositoriInf.js'
import userSeriviceInt from '../../../../application/services/user/userServiceInf.js'
import userServiceImp from '../../../../framework/services/user/userServiceImp.js'


const authRouter=(express)=>{

    const router = express.Router()
    
    const controller = userController(userRepositoryInt,userRepositoryImp,userSeriviceInt,userServiceImp)
     //call the register api
    router.route('/register').post(controller.createUser)

    return router
}

export default authRouter