import React from 'react'
import { Container } from  './style'
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar} from 'recharts'

export default function Skills() {
    const data = [
        {
          "name": "Reactjs",
          "uv": 4000,
          "pv": 80,
          "amt": 2400
        },
        {
            "name": "Angular",
            "uv": 4000,
            "pv": 80,
            "amt": 2400
        },
        {
            "name": "Sass",
            "uv": 4000,
            "pv": 80,
            "amt": 2400
        },
        {
        "name": "HTML",
        "uv": 4000,
        "pv": 80,
        "amt": 2400
        },
        {
            "name": "CSS",
            "uv": 4000,
            "pv": 80,
            "amt": 2400
        },
        {
            "name": "Javascript",
            "uv": 4000,
            "pv": 80,
            "amt": 2400
        },
        {
            "name": "Nodejs",
            "uv": 4000,
            "pv": 80,
            "amt": 2400
        },
        {
            "name": "React-Native",
            "uv": 4000,
            "pv": 80,
            "amt": 2400
        },
        {
            "name": "Styled-Components",
            // "uv": 4000,
            "pv": 80,
            // "amt": 2400
        },
      ]
      
    return (
        <Container>
            <ResponsiveContainer width="80%" height="80%">
            <BarChart  height={250} data={data}>
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
