import React from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { GraphData } from '../types';

interface GraphDisplayProps {
    data: GraphData;
    graphType: string;
}

const GraphDisplay: React.FC<GraphDisplayProps> = ({ data, graphType }) => {
    const chartData = {
        labels: data.labels,
        datasets: [
            {
                label: data.label,
                data: data.values,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
            },
        ],
    };

    switch (graphType) {
        case 'line':
            return <Line data={chartData} />;
        case 'bar':
            return <Bar data={chartData} />;
        case 'pie':
            return <Pie data={chartData} />;
        default:
            return <div>Select a graph type</div>;
    }
};

export default GraphDisplay;