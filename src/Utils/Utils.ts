import { callAuthApiPromise } from "../App";
import { ajax } from "rxjs/ajax";

// Converte tipos de pendência para String.
export function IssueToString(issue: number) {
  if (issue === 0) {
    return "Baixa qualidade das fotos/documentos";
  } else if (issue === 1) {
    return "Documentos não compatíveis";
  } else if (issue === 2) {
    return "Bloco incompleto";
  } else {
    return "Desconhecido";
  }
}

// Converte uma string de número inteiro para preço em real
export const stringToPrice = (price: string) =>
  price === ""
    ? ""
    : "R$ " +
      (Number(price.replaceAll(/[^0-9]/g, "")) / 100).toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
      });

export const mobileSettings = () => {
  document.body.style.minWidth = "unset";
  document
    .getElementById("viewport")
    ?.setAttribute(
      "content",
      "height=device-height, width=device-width, initial-scale=1"
    );
};

export async function callPromiseWrapper(url: string, body?: any) {
  return (
    await callAuthApiPromise(
      (token: string) => () =>
        body
          ? ajax({
              url: url,
              method: "POST",
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify(body),
            }).toPromise()
          : ajax({
              url: url,
              method: "GET",
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }).toPromise()
    )
  ).response;
}
