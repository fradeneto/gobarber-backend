import { Cadastro }  from '../models';

class UserController {
  async store(req,res){
    const { ativo, nome, dia } = req.body;
    await Cadastro.create({
      ativo,
      nome,
      dia
    })
    .then(cadastro => {
      return res.status(200).json(cadastro)
    })
    .catch(error => {
      return res.status(200).json(error)
    });
    
  }
}

export default new UserController();