import CombustivelService from "../../../../Services/CombustivelService";

export const setCombustivel = (file: any, mes: number) =>
  CombustivelService.setCombustivel(file, mes);

export const setCombustivelMES = (mes: number) =>
  CombustivelService.setCombustivelMES(mes);
