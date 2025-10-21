import React, { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import type { ColDef, ColGroupDef, ValueParserParams } from "ag-grid-community";

type Row = {
  name: string;
  startHour: number | null;
  startMinute: number | null;
};

const clampNumberParser =
  (min: number, max: number) =>
  (p: ValueParserParams): number | null => {
    if (p.newValue === null || p.newValue === undefined || p.newValue === "") return null;
    const n = Number(p.newValue);
    if (Number.isNaN(n)) return null;
    return Math.max(min, Math.min(max, Math.trunc(n)));
  };

export default function ColumnGroupExample() {
  const [rowData] = useState<Row[]>([
    { name: "田中", startHour: 9, startMinute: 30 },
    { name: "佐藤", startHour: 10, startMinute: 0 },
    { name: "鈴木", startHour: null, startMinute: null },
  ]);

  const defaultColDef = useMemo<ColDef>(
    () => ({
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
    }),
    []
  );

  const columnDefs = useMemo<(ColDef | ColGroupDef)[]>(
    () => [
      { headerName: "氏名", field: "name", width: 140 },
      {
        headerName: "出勤",
        marryChildren: true, // 子カラムを分離させない
        children: [
          {
            headerName: "時",
            field: "startHour",
            width: 100,
            type: "numericColumn",
            valueParser: clampNumberParser(0, 23),
          },
          {
            headerName: "分",
            field: "startMinute",
            width: 100,
            type: "numericColumn",
            valueParser: clampNumberParser(0, 59),
          },
        ],
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
