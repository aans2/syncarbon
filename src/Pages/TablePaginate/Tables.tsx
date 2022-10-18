import { TableComponent } from "./Components/Table/TableComponent";

export default function Tables() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        color: "white",
        marginBottom: "4rem",
        paddingLeft: "3rem",
        paddingRight: "3rem",
      }}
    >
      <h1>Consumo Via Bomba</h1>
      <TableComponent />
    </div>
  );
}
