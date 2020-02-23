import { Cadastro }  from '../models';

class UserController {
  async store(req,res){
    const cadastro = {teste: "ok"}
    return res.status(200).json(cadastro)
  }
}

export default new UserController();