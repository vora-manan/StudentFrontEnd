import React from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from 'recharts';


const BarGraph = (props) => {
	return (
		<ResponsiveContainer width={'100%'} height={600}>
			<BarChart data={props.data} style={{ marginTop: '10px' }}>
				<Bar dataKey="students" fill="grey" style={{ fontWeight: 'bold', fontFamily: 'Audiowide' }} />
				<CartesianGrid stroke="#ccc" />
				<XAxis dataKey="name" style={{ fontWeight: 'bold', fontFamily: 'Audiowide' }} />
				<YAxis />
			</BarChart>
		</ResponsiveContainer>
	);
}

export default BarGraph;
