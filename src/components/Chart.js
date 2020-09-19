/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';

export default function Chart({data}) {
    let graphRequiredData = [];
    let wwidth = 300;

    function updateGraphSize(){
      console.log(window.innerWidth)
      if(window.innerWidth < 510){
        wwidth = 480;
      }
      if(window.innerWidth > 510 && window.innerWidth < 626){
        wwidth = 480;
      }
      if(window.innerWidth > 626 && window.innerWidth < 1150){
        wwidth = 600;
      }
      if(window.innerWidth > 1150 && window.innerWidth < 1230){
        wwidth = 700;
      }
      if(window.innerWidth > 1230){
        wwidth = 770;
      }
      console.log(wwidth)
    }

    updateGraphSize();

    window.onresize = function(event) {
      console.log(window.innerWidth)
      updateGraphSize();
    };

    if(Array.isArray(data)){
      // console.log(data)
      if(data[0].Date){
        data.map((v, i) => {
            graphRequiredData.push({
              name: v.Date.slice(8, 10),
              Active: v.Active
            });
            return(true);
          })
      }else{
        data.map((v, i) => {
          graphRequiredData.push({
              Active: v.TotalConfirmed/1000
          })
          return(true);
        })
      }
    }else{
      return(
        <div></div>
      )
    }

    

    return (
      <LineChart
        width={wwidth}
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
        <Line type="monotone" dataKey="Active" stroke="#F23847" activeDot={{ r: 8 }} strokeWidth={3}/>
      </LineChart>
    );
}
