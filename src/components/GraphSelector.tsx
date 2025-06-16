import React, { useState } from "react";

interface Props {
  selected: string;
  onChange: (value: string) => void;
}

const GraphSelector: React.FC<Props> = ({ selected, onChange }) => (
  <select value={selected} onChange={(e) => onChange(e.target.value)}>
    <option value="pie">Pie Chart</option>
    {/* Add more options for other graphs */}
  </select>
);

export default GraphSelector;
