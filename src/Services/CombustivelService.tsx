import { callPromiseWrapper } from "../Utils/Utils";
import { CServices } from "./Inerfaces";

class CombustivelServicesImpl implements CServices {
  async setCombustivel(file: any, mes: number) {
    return await callPromiseWrapper(
      "http://localhost:8000/api/combustivel/add",
      {
        file: file,
        mes: mes,
      }
    );
  }
  async setCombustivelMES(mes: number) {
    return await callPromiseWrapper(
      "http://localhost:8000/api/combustivel/add",
      {
        mes: mes,
      }
    );
  }
}

const CombustivelService: CServices = new CombustivelServicesImpl();

export default CombustivelService;
