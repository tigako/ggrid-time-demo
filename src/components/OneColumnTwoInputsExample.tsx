import React, { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import type { ColDef } from "ag-grid-community";
import TimeCellRenderer from "./TimeCellRenderer";

type Row = {
  name: string;
  attendance: { hour: number | null; minute: number | null } | null;
};

export default function OneColumnTwoInputsExample() {
  const [rowData] = useState<Row[]>([
    { name: "田中", attendance: { hour: 9, minute: 30 } },
    { name: "佐藤", attendance: { hour: 10, minute: 0 } },
    { name: "鈴木", attendance: null },
  ]);

  const defaultColDef = useMemo<ColDef>(
    () => ({
      editable: false, // セルレンダラーで直接更新
      resizable: true,
      sortable: false,
      filter: false,
    }),
    []
  );

  const columnDefs = useMemo<ColDef[]>(
    () => [
      { headerName: "氏名", field: "name", width: 140 },
      {
        headerName: "出勤",
        field: "attendance",
        cellRenderer: TimeCellRenderer,
        width: 200,
      },
    ],
    []
  );

  return (
    <div className="ag-theme-quartz" style={{ height: "100%", width: "100%" }}>
      <AgGridReact<Row> rowData={rowData} columnDefs={columnDefs} defaultColDef={defaultColDef} />
    </div>
  );
}
