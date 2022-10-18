import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TableFooter,
  TablePagination,
} from "@mui/material";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";
import { useState } from "react";

export const TableComponent = () => {
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

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <div
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
        }}
      >
        <h2>Consumo Bico Mês a Mês (2021)</h2>
        <TableContainer component={Paper}>
          <Table
            sx={{
              minWidth: 500,
            }}
            aria-label="custom pagination table"
          >
            <TableHead sx={{ background: "black" }}>
              <TableRow>
                <TableCell
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: "bold",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  Equipamento
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: "bold",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  Produto&nbsp;(L)
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: "bold",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  Janeiro&nbsp;(L)
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: "bold",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  Fevereiro&nbsp;(L)
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: "bold",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  Marco&nbsp;(L)
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: "bold",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  Abril&nbsp;(L)
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: "bold",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  Maio&nbsp;(L)
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: "bold",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  Junho&nbsp;(L)
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: "bold",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  Julho&nbsp;(L)
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: "bold",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  Agosto&nbsp;(L)
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: "bold",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  Setembro&nbsp;(L)
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: "bold",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  Outubro&nbsp;(L)
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: "bold",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  Novembro&nbsp;(L)
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: "bold",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  Dezembro&nbsp;(L)
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    fontFamily: "Inter",
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  Total 2021
                  <br />
                  &nbsp;(L)
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    fontFamily: "Inter",
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  Consumo
                  <br /> fechado
                  <br />
                  &nbsp;(L)
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{ background: "snow" }}>
              {(rowsPerPage > 0
                ? rows.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : rows
              ).map((row, index) => (
                <TableRow
                  key={row.equipamento}
                  style={
                    index % 2
                      ? { background: "snow" }
                      : { background: "#e8e3e3" }
                  }
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{
                      fontFamily: "Inter",
                      textAlign: "center",
                      fontSize: "13px",
                    }}
                  >
                    {row.equipamento}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      fontFamily: "Inter",
                      textAlign: "center",
                      fontSize: "13px",
                    }}
                  >
                    {row.combustivel}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      fontFamily: "Inter",
                      textAlign: "center",
                      fontSize: "13px",
                    }}
                  >
                    {row.janeiro}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      fontFamily: "Inter",
                      textAlign: "center",
                      fontSize: "13px",
                    }}
                  >
                    {row.fevereiro}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      fontFamily: "Inter",
                      textAlign: "center",
                      fontSize: "13px",
                    }}
                  >
                    {row.marco}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      fontFamily: "Inter",
                      textAlign: "center",
                      fontSize: "13px",
                    }}
                  >
                    {row.abril}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      fontFamily: "Inter",
                      textAlign: "center",
                      fontSize: "13px",
                    }}
                  >
                    {row.maio}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      fontFamily: "Inter",
                      textAlign: "center",
                      fontSize: "13px",
                    }}
                  >
                    {row.junho}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      fontFamily: "Inter",
                      textAlign: "center",
                      fontSize: "13px",
                    }}
                  >
                    {row.julho}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      fontFamily: "Inter",
                      textAlign: "center",
                      fontSize: "13px",
                    }}
                  >
                    {row.agosto}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      fontFamily: "Inter",
                      textAlign: "center",
                      fontSize: "13px",
                    }}
                  >
                    {row.setembro}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      fontFamily: "Inter",
                      textAlign: "center",
                      fontSize: "13px",
                    }}
                  >
                    {row.outubro}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      fontFamily: "Inter",
                      textAlign: "center",
                      fontSize: "13px",
                    }}
                  >
                    {row.novembro}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      fontFamily: "Inter",
                      textAlign: "center",
                      fontSize: "13px",
                    }}
                  >
                    {row.dezembro}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      fontFamily: "Inter",
                      textAlign: "center",
                      fontSize: "13px",
                    }}
                  >
                    {row.total}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      fontFamily: "Inter",
                      textAlign: "center",
                      fontSize: "13px",
                    }}
                  >
                    {row.fechado}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter
              sx={
                rowsPerPage % 2
                  ? { background: "snow" }
                  : { background: "#e8e3e3" }
              }
            >
              <TableRow>
                <TablePagination
                  sx={{
                    ".MuiInputBase-root": {
                      fontFamily: "Inter",
                    },
                    ".MuiTablePagination-selectLabel": {
                      fontFamily: "Inter",
                    },
                    ".MuiTablePagination-displayedRows": {
                      fontFamily: "Inter",
                    },
                  }}
                  labelRowsPerPage={"Equipamentos por página"}
                  rowsPerPageOptions={[
                    5,
                    10,
                    25,
                    { label: "Todos", value: -1 },
                  ]}
                  colSpan={16}
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: {
                      "aria-label": "Equipamentos por página",
                    },
                    native: true,
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </div>
      <div
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
        }}
      >
        <h2>Relatório Consumo Ano Fechado</h2>
        <TableContainer component={Paper}>
          <Table
            sx={{
              minWidth: 500,
            }}
            aria-label="custom pagination table"
          >
            <TableHead sx={{ background: "black" }}>
              <TableRow>
                <TableCell
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: "bold",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  Equipamento
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: "bold",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  Consumo&nbsp;(L)
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: "bold",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  Diferença&nbsp;(L)
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{ background: "snow" }}>
              {(rowsPerPage > 0
                ? rows.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : rows
              ).map((row, index) => (
                <TableRow
                  key={row.equipamento}
                  style={
                    index % 2
                      ? { background: "snow" }
                      : { background: "#e8e3e3" }
                  }
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{
                      fontFamily: "Inter",
                      textAlign: "center",
                      fontSize: "13px",
                    }}
                  >
                    {row.equipamento}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      fontFamily: "Inter",
                      textAlign: "center",
                      fontSize: "13px",
                    }}
                  >
                    {row.total}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      fontFamily: "Inter",
                      textAlign: "center",
                      fontSize: "13px",
                    }}
                  >
                    {row.diferenca}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter
              sx={
                rowsPerPage % 2
                  ? { background: "snow" }
                  : { background: "#e8e3e3" }
              }
            >
              <TableRow>
                <TablePagination
                  sx={{
                    ".MuiInputBase-root": {
                      fontFamily: "Inter",
                    },
                    ".MuiTablePagination-selectLabel": {
                      fontFamily: "Inter",
                    },
                    ".MuiTablePagination-displayedRows": {
                      fontFamily: "Inter",
                    },
                  }}
                  labelRowsPerPage={"Equipamentos por página"}
                  rowsPerPageOptions={[
                    5,
                    10,
                    25,
                    { label: "Todos", value: -1 },
                  ]}
                  colSpan={3}
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: {
                      "aria-label": "Equipamentos por página",
                    },
                    native: true,
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
