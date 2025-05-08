import mongoose from "mongoose";

const proprietarioSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true },
    cpf: { type: Number, required: true },
  },
  { versionKey: false }
);

const proprietario = mongoose.model("proprietarios", proprietarioSchema);

export { proprietario, proprietarioSchema };
