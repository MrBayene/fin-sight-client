import React, { useEffect, useState } from "react";
import GraphDisplay from "./components/GraphDisplay";
import GraphSelector from "./components/GraphSelector";
import { fetchData } from "./api";
import PieChart from "./components/PieChart";

// List your pie JSON files here
const pieFiles = ["expensesPie.json", "incomePie.json"];

const App: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [graphType, setGraphType] = useState<string>("line");
  const [selectedGraph, setSelectedGraph] = useState("pie");

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData("https://api.example.com/data");
      setData(result);
    };
    getData();
  }, []);

  const handleGraphTypeChange = (type: string) => {
    setGraphType(type);
  };

  return (
    <div className="App">
      <h1>Graphing Client</h1>
      <GraphSelector selected={selectedGraph} onChange={setSelectedGraph} />
      {selectedGraph === "pie" &&
        pieFiles.map((file) => <PieChart key={file} filename={file} />)}
      {data && <GraphDisplay data={data} graphType={graphType} />}
    </div>
  );
};

export default App;
