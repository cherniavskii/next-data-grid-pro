import * as React from "react";
import { DataGridPro, GridActionsCellItem } from "@mui/x-data-grid-pro";
import { useDemoData } from "@mui/x-data-grid-generator";
import {} from "./license";

export default function BasicColumnPinning() {
  const { data } = useDemoData({
    dataSet: 'Employee',
    rowLength: 4,
    maxColumns: 6,
  });

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGridPro
        {...data}
        initialState={{ pinnedColumns: { left: ["name"], right: ["actions"] } }}
      />
    </div>
  );
}
