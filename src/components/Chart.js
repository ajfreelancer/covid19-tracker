import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

export default function Chart({data}) {
    let graphRequiredData = [];
    console.log(data);
    if(Array.isArray(data)){
        data.map( (v, i) => {
            graphRequiredData.push({
                name: v.Date.slice(8, 10),
                Active: v.Active
            })
        } )
    }
    return (
      <LineChart
        width={750}
        height={230}
        data={graphRequiredData}
        margin={{
          top: 5, right: 30, left: 0, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        {/* <Legend /> */}
        <Line type="monotone" dataKey="Active" stroke="#F23847" activeDot={{ r: 8 }} strokeWidth={3}/>
      </LineChart>
    );
}
