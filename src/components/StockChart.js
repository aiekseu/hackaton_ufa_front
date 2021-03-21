import React from "react";
import {
  LineChart,
  Line
} from "recharts";


const data = [
  {
    name: "Page A",
    pv: 2400,
  },
  {
    name: "Page B",
    pv: 1398,
  },
  {
    name: "Page C",
  
    pv: 9800,

  },
  {
    name: "Page D",
  
    pv: 3908,
 
  },
  {
    name: "Page E",
  
    pv: 4800,
  
  },
  {
    name: "Page F",
   
    pv: 3800,
  
  },
  {
    name: "Page G",

    pv: 4300,
    
  }
];

export default function StockChart() {
  return (
    <LineChart width={360} height={200} data={data} style={{margin: "0 auto"}}>
      <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
    </LineChart>
  );
}



/*<AreaChart
      width={500}
      height={400}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
        <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
        </defs>
        
      {/*<CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
    </AreaChart> */