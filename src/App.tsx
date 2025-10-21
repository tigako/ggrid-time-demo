import React from "react";
import ColumnGroupCompressed from "./components/ColumnGroupCompressed";

// AG Grid のスタイル（Quartz テーマ）
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

export default function App() {
  return (
    <div className="app">
      <h1 style={{ margin: 0, fontSize: 18 }}>出勤（時・分）デモ - ColumnDefsのみ + ヘッダー圧縮</h1>
      <div style={{ flex: 1, minHeight: 0 }}>
        <ColumnGroupCompressed />
      </div>
    </div>
  );
}
