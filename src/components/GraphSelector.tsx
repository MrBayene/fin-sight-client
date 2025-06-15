import React, { useState } from 'react';

const graphTypes = [
    { value: 'line', label: 'Line Graph' },
    { value: 'bar', label: 'Bar Graph' },
    { value: 'pie', label: 'Pie Chart' },
];

const GraphSelector: React.FC<{ onSelect: (graphType: string) => void }> = ({ onSelect }) => {
    const [selectedGraph, setSelectedGraph] = useState(graphTypes[0].value);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const graphType = event.target.value;
        setSelectedGraph(graphType);
        onSelect(graphType);
    };

    return (
        <div>
            <label htmlFor="graph-selector">Select Graph Type: </label>
            <select id="graph-selector" value={selectedGraph} onChange={handleChange}>
                {graphTypes.map((graph) => (
                    <option key={graph.value} value={graph.value}>
                        {graph.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default GraphSelector;