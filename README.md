# ggrid-time-demo (ColumnDefs only, compressed headers)

AG Grid で「出勤（時・分）」をカラムグループ（子カラム2つ）で表現し、ヘッダー高さを `groupHeaderHeight` と `headerHeight` で圧縮した最小デモです。セルレンダラーは使っていません（ColumnDefsのみ）。

- Framework: React 18 + Vite + TypeScript
- Libraries: ag-grid-community / ag-grid-react（Quartz テーマ）

## 起動

```bash
npm i
npm run dev
```

## デモのポイント
- ColumnDefs のみで「出勤→時/分」を別セルに分割
- ヘッダー圧縮
  - gridOptions.headerHeight = 28
  - gridOptions.groupHeaderHeight = 28
  - テーマCSSでフォント・パディングも微調整

## CodeSandbox（権限不要の Sandboxes 版）

https://codesandbox.io/s/github/tigako/ggrid-time-demo/tree/compress-headers?file=/src/App.tsx
