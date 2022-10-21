import { SetorModel } from "../Global/Models/Setor/SetorModel";

export interface IServices {
    getSetor: () => Promise<SetorModel>;
}