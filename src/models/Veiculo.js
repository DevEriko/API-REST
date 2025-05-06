import mongoose from "mongoose";

const veiculoSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    marca: { type: String, required: true },
    nome_veiculo: { type: String, required: true },
    ano: { type: Number, required: true },
    cor: { type: String, required: true },
  },
  { versionKey: false }
);

const veiculo = mongoose.model("veiculos", veiculoSchema);

export default veiculo;
