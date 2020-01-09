import React from 'react'
import { Container } from  './style'
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar} from 'recharts'
import {LANG} from '../../shared/pt'
export default function Skills() {    
      
    return (
        <Container>
        <ResponsiveContainer width="80%" height="80%">
            <BarChart  height={250} data={LANG.skills}>
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <XAxis dataKey="name" />
                <YAxis ticks={[0,50,100]} domain={[0, 100]} type="number" />
                <Tooltip />
                {/* <Legend /> */}
                <Bar dataKey="pv" fill="#908194" />
            </BarChart>
        </ResponsiveContainer>
        </Container>
    )
}
