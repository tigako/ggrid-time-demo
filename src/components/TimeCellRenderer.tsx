import React, { useCallback } from "react";
import type { ICellRendererParams } from "ag-grid-community";

type TimeValue = { hour: number | null; minute: number | null } | null;

function clamp(v: number | null, min: number, max: number): number | null {
  if (v === null || Number.isNaN(v)) return null;
  return Math.max(min, Math.min(max, v));
}

export default function TimeCellRenderer(props: ICellRendererParams<any, TimeValue>) {
  const value = props.value ?? { hour: null, minute: null };

  const setValue = useCallback(
    (next: TimeValue) => {
      props.node.setDataValue(props.colDef.field!, next);
    },
    [props]
  );

  const onChangeHour = (e: React.ChangeEvent<HTMLInputElement>) => {
    const n = e.target.value === "" ? null : clamp(parseInt(e.target.value, 10), 0, 23);
    setValue({ hour: n, minute: value.minute });
  };

  const onChangeMinute = (e: React.ChangeEvent<HTMLInputElement>) => {
    const n = e.target.value === "" ? null : clamp(parseInt(e.target.value, 10), 0, 59);
    setValue({ hour: value.hour, minute: n });
  };

  // グリッド選択と競合しないようにイベント伝播を止める
  const stop = (e: React.SyntheticEvent) => {
    e.stopPropagation();
  };

  return (
    <div style={{ display: "flex", gap: 6, alignItems: "center" }} onMouseDown={stop} onClick={stop}>
      <input
        style={{ width: 56 }}
        type="number"
        min={0}
        max={23}
        value={value.hour ?? ""}
        placeholder="時"
        onChange={onChangeHour}
      />
      <span>:</span>
      <input
        style={{ width: 56 }}
        type="number"
        min={0}
        max={59}
        value={value.minute ?? ""}
        placeholder="分"
        onChange={onChangeMinute}
      />
    </div>
  );
}
