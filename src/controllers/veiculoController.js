import veiculo from "../models/Veiculo.js";

class VeiculoController {
  static async listarVeiculos(req, res) {
    const veiculos = await veiculo.find({});
    res.status(200).json(veiculos);
  }

  static async cadastrarVeiculo(req, res) {
    try {
      const novoVeiculo = await veiculo.create(req.body);
      res.status(201).json({
        message: "Veiculo cadastrado com sucesso!",
        veiculo: novoVeiculo,
      });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha ao cadastrar veiculo` });
    }
  }
}

export default VeiculoController;
