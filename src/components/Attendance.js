import React from "react";
import { Cell, Legend, Pie, PieChart, Tooltip, ResponsiveContainer } from "recharts";
class PieRechartComponent extends React.Component {
   constructor(props) {
      super(props);
   }
   CustomTooltip = ({ active, payload, label }) => {
      if (active) {
         return (
         <div
            className="custom-tooltip"
            style={{
               backgroundColor: "#ffff",
               padding: "5px",
               border: "1px solid #cccc"
            }}
         >
            <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
         </div>
      );
   }
   return null;
};
render() {
   return (
    <ResponsiveContainer  width={'100%'} height={400}>
      <PieChart >
      <Pie
         data={this.props.pieData}
         dataKey="value"
         nameKey="name"
         cx="50%"
         cy="50%"
         outerRadius={120}
      >
         {this.props.pieData.map((entry, index) => (
            <Cell
               key={`cell-${index}`}
               fill={this.props.COLORS[index % this.props.COLORS.length]}
            />
         ))}
      </Pie>
      <Tooltip content={<this.CustomTooltip />} />
      <Legend style={{marginTop:'10px'}}
/>
      </PieChart>
      </ResponsiveContainer>
      );
   }
}
export default PieRechartComponent;
