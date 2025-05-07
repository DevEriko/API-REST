import { proprietario } from "../models/Proprietario.js";

class ProprietarioController {
  static async listarProprietarios(req, res) {
    try {
      const proprietario = await proprietario.find({});
      res.status(200).json(proprietario);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na requisição` });
    }
  }

  static async listarProprietarioPorId(req, res) {
    try {
      const id = req.params.id;
      const proprietarioEncontrado = await proprietario.findById(id);
      res.status(200).json(proprietarioEncontrado);
    } catch (erro) {
      res.status(500).json({
        message: `${erro.message} - falha na requisição do proprietario`,
      });
    }
  }

  static async cadastrarProprietario(req, res) {
    try {
      const novoProprietario = await proprietario.create(req.body);
      res.status(201).json({
        message: "Proprietario cadastrado com sucesso!",
        proprietario: novoProprietario,
      });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha ao cadastrar proprietario` });
    }
  }

  static async atualizarProprietario(req, res) {
    try {
      const id = req.params.id;
      await proprietario.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Proprietario atualizado com sucesso!" });
    } catch (erro) {
      res.status(500).json({
        message: `${erro.message} - falha na requisição do proprietario`,
      });
    }
  }

  static async deletarProprietario(req, res) {
    try {
      const id = req.params.id;
      await veiculo.findByIdAndDelete(id);
      res.status(200).json({ message: "Proprietario DELETADO com sucesso!" });
    } catch (erro) {
      res.status(500).json({
        message: `${erro.message} - falha na exclusão do proprietario`,
      });
    }
  }
}

export default ProprietarioController;
