import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  equipamento: string,
  combustivel: string,
  janeiro: string,
  fevereiro: string,
  marco: string,
  abril: string,
  maio: string,
  junho: string,
  julho: string,
  agosto: string,
  setembro: string,
  outubro: string,
  novembro: string,
  dezembro: string,
  total: string,
  fechado: string,
  diferenca: string
) {
  return {
    equipamento,
    combustivel,
    janeiro,
    fevereiro,
    marco,
    abril,
    maio,
    junho,
    julho,
    agosto,
    setembro,
    outubro,
    novembro,
    dezembro,
    total,
    fechado,
    diferenca,
  };
}

const rows = [
  createData(
    "BICO COMBOIO 101130",
    "DIESEL",
    "94.140,443",
    "66.537,090",
    "34.573,891",
    "34.458,973",
    "70.217,742",
    "59.363,476",
    "33.742,608",
    "66.599,517",
    "115.374,423",
    "118.522,656",
    "126.445,147",
    "122.660,701",
    "942.636,667",
    "824.188,09",
    "118.448,58"
  ),
  createData(
    "BICO COMBOIO 101131",
    "DIESEL",
    "94.140,443",
    "66.537,090",
    "34.573,891",
    "34.458,973",
    "70.217,742",
    "59.363,476",
    "33.742,608",
    "66.599,517",
    "115.374,423",
    "118.522,656",
    "126.445,147",
    "122.660,701",
    "942.636,667",
    "824.188,09",
    "0"
  ),
  createData(
    "BICO COMBOIO 101132",
    "DIESEL",
    "94.140,443",
    "66.537,090",
    "34.573,891",
    "34.458,973",
    "70.217,742",
    "59.363,476",
    "33.742,608",
    "66.599,517",
    "115.374,423",
    "118.522,656",
    "126.445,147",
    "122.660,701",
    "942.636,667",
    "824.188,09",
    "0"
  ),
  createData(
    "BOMBA 1",
    "DIESEL",
    "94.140,443",
    "66.537,090",
    "34.573,891",
    "34.458,973",
    "70.217,742",
    "59.363,476",
    "33.742,608",
    "66.599,517",
    "115.374,423",
    "118.522,656",
    "126.445,147",
    "122.660,701",
    "942.636,667",
    "824.188,09",
    "0"
  ),
  createData(
    "BOMBA 5",
    "DIESEL",
    "94.140,443",
    "66.537,090",
    "34.573,891",
    "34.458,973",
    "70.217,742",
    "59.363,476",
    "33.742,608",
    "66.599,517",
    "115.374,423",
    "118.522,656",
    "126.445,147",
    "122.660,701",
    "942.636,667",
    "824.188,09",
    "0"
  ),
  createData(
    "BOMBA 6",
    "DIESEL",
    "94.140,443",
    "66.537,090",
    "34.573,891",
    "34.458,973",
    "70.217,742",
    "59.363,476",
    "33.742,608",
    "66.599,517",
    "115.374,423",
    "118.522,656",
    "126.445,147",
    "122.660,701",
    "942.636,667",
    "824.188,09",
    "0"
  ),
  createData(
    "BOMBA 8",
    "DIESEL",
    "94.140,443",
    "66.537,090",
    "34.573,891",
    "34.458,973",
    "70.217,742",
    "59.363,476",
    "33.742,608",
    "66.599,517",
    "115.374,423",
    "118.522,656",
    "126.445,147",
    "122.660,701",
    "942.636,667",
    "824.188,09",
    "0"
  ),

  createData(
    "TOTAL",
    "",
    "796.741,920",
    "518.267,598",
    "228.370,883",
    "213.082,355",
    "301.500,961",
    "316.292,916",
    "290.944,317",
    "351.782,832",
    "839.375,225",
    "966.503,165",
    "999.990,887",
    "861.667,151",
    "6.684.520,210",
    "6.566.071,64",
    "118.448,58"
  ),
];

export default function Tabelas() {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <span>CONSUMO MÊS A MÊS 2021</span>
            <TableRow>
              <TableCell>EQUIPAMENTO</TableCell>
              <TableCell align="right">Produto&nbsp;(L)</TableCell>
              <TableCell align="right">Janeiro&nbsp;(L)</TableCell>
              <TableCell align="right">Fevereiro&nbsp;(L)</TableCell>
              <TableCell align="right">Marco&nbsp;(L)</TableCell>
              <TableCell align="right">Abril&nbsp;(L)</TableCell>
              <TableCell align="right">Maio&nbsp;(L)</TableCell>
              <TableCell align="right">Junho&nbsp;(L)</TableCell>
              <TableCell align="right">Julho&nbsp;(L)</TableCell>
              <TableCell align="right">Agosto&nbsp;(L)</TableCell>
              <TableCell align="right">Setembro&nbsp;(L)</TableCell>
              <TableCell align="right">Outubro&nbsp;(L)</TableCell>
              <TableCell align="right">Novembro&nbsp;(L)</TableCell>
              <TableCell align="right">Dezembro&nbsp;(L)</TableCell>
              <TableCell align="right">TOTAL ANO 2021&nbsp;(L)</TableCell>
              <TableCell align="right">Consumo fechado&nbsp;(L)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.equipamento}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.equipamento}
                </TableCell>
                <TableCell align="right">{row.combustivel}</TableCell>
                <TableCell align="right">{row.janeiro}</TableCell>
                <TableCell align="right">{row.fevereiro}</TableCell>
                <TableCell align="right">{row.marco}</TableCell>
                <TableCell align="right">{row.abril}</TableCell>
                <TableCell align="right">{row.maio}</TableCell>
                <TableCell align="right">{row.junho}</TableCell>
                <TableCell align="right">{row.julho}</TableCell>
                <TableCell align="right">{row.agosto}</TableCell>
                <TableCell align="right">{row.setembro}</TableCell>
                <TableCell align="right">{row.outubro}</TableCell>
                <TableCell align="right">{row.novembro}</TableCell>
                <TableCell align="right">{row.dezembro}</TableCell>
                <TableCell align="right">{row.total}</TableCell>
                <TableCell align="right">{row.fechado}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <span>Relatorio Consumo Ano fechado</span>
            <TableRow>
              <TableCell>EQUIPAMENTO</TableCell>
              <TableCell align="right">Consumo&nbsp;(L)</TableCell>
              <TableCell align="right">Diferença&nbsp;(L)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.equipamento}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.equipamento}
                </TableCell>
                <TableCell align="right">{row.total}</TableCell>
                <TableCell align="right">{row.diferenca}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

// equipamento,
// combustivel,
// janeiro,
// fevereiro,
// marco,
// abril,
// maio,
// junho,
// julho,
// agosto,
// setembro,
// outubro,
// novembro,
// dezembro,
// total,
// fechado,
