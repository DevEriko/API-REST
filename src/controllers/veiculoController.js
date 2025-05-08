import { proprietario } from "../models/Proprietario.js";
import veiculo from "../models/Veiculo.js";

class VeiculoController {
  static async listarVeiculos(req, res) {
    try {
      const veiculos = await veiculo.find({});
      res.status(200).json(veiculos);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na requisição` });
    }
  }

  static async listarVeiculoPorId(req, res) {
    try {
      const id = req.params.id;
      const veiculoEncontrado = await veiculo.findById(id);
      res.status(200).json(veiculoEncontrado);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na requisição do veiculo` });
    }
  }

  static async cadastrarVeiculo(req, res) {
    const novoVeiculo = req.body;
    try {
      const proprietarioEncontrado = await proprietario.findById(
        novoVeiculo.proprietario
      );
      const veiculoCompleto = {
        ...novoVeiculo,
        proprietario: { ...proprietarioEncontrado._doc },
      };
      const veiculoCriado = await veiculo.create(veiculoCompleto);
      res.status(201).json({
        message: "Veiculo cadastrado com sucesso!",
        veiculo: veiculoCriado,
      });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha ao cadastrar veiculo` });
    }
  }

  static async atualizarVeiculo(req, res) {
    try {
      const id = req.params.id;
      await veiculo.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Veiculo atualizado com sucesso!" });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na requisição do veiculo` });
    }
  }

  static async deletarVeiculo(req, res) {
    try {
      const id = req.params.id;
      await veiculo.findByIdAndDelete(id);
      res
        .status(200)
        .json({ message: "Veiculo cadastrado DELETADO com sucesso!" });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na exclusão do veiculo` });
    }
  }
}

export default VeiculoController;
