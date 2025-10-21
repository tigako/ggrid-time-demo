import React, { useState } from "react";
import ColumnGroupExample from "./components/ColumnGroupExample";
import OneColumnTwoInputsExample from "./components/OneColumnTwoInputsExample";

// AG Grid のスタイル（Quartz テーマ）
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

type Mode = "group" | "onecell";

export default function App() {
  const [mode, setMode] = useState<Mode>("group");

  return (
    <div style={{ padding: 16, height: "100%", display: "flex", flexDirection: "column", gap: 12 }}>
      <h1 style={{ margin: 0, fontSize: 20 }}>出勤（時・分）デモ</h1>
      <div style={{ display: "flex", gap: 8 }}>
        <button
          onClick={() => setMode("group")}
          style={{ padding: "6px 10px", background: mode === "group" ? "#222" : "#eee", color: mode === "group" ? "#fff" : "#222", border: "1px solid #ccc", borderRadius: 6 }}
        >
          方法1: カラムグループ（時/分が別セル）
        </button>
        <button
          onClick={() => setMode("onecell")}
          style={{ padding: "6px 10px", background: mode === "onecell" ? "#222" : "#eee", color: mode === "onecell" ? "#fff" : "#222", border: "1px solid #ccc", borderRadius: 6 }}
        >
          方法2: 1セル内に時/分
        </button>
      </div>

      <div style={{ flex: 1, minHeight: 0 }}>
        {mode === "group" ? <ColumnGroupExample /> : <OneColumnTwoInputsExample />}
      </div>
    </div>
  );
}
