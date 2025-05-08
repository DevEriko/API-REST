import mongoose from "mongoose";
import { proprietarioSchema } from "./Proprietario.js";

const veiculoSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    nome_veiculo: { type: String, required: true },
    ano: { type: Number, required: true },
    cor: { type: String, required: true },
    proprietario: proprietarioSchema,
  },
  { versionKey: false }
);

const veiculo = mongoose.model("veiculos", veiculoSchema);

export default veiculo;
