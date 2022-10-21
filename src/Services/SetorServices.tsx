import { callPromiseWrapper } from "../Utils/Utils";
import { IServices } from "./Inerfaces";

class SetorServicesImp implements IServices {
    async getSetor() {
        return (await callPromiseWrapper("/api/setor")).data;
    }
}

const SetorServices: IServices = new SetorServicesImp();

export default SetorServices;

