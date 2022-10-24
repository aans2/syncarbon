import { SetorModel } from "../Global/Models/Setor/SetorModel";

export interface IServices {
  getSetor: () => Promise<SetorModel>;
}

export interface CServices {
  setCombustivel: (file: any, mes: number) => Promise<void>;
  setCombustivelMES: (mes: number) => Promise<void>;
}
