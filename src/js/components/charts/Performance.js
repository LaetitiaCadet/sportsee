import { RadarChart, PolarGrid, PolarAngleAxis, RadialBar, Radar, Legend, ResponsiveContainer } from "recharts";

const Performance = ({data}) => {
    return (
        <div className="bgd-black rounded">
            <ResponsiveContainer width='100%' height={263}>
                <RadarChart outerRadius={90} width={258} height={263} data={data} >
                    <RadialBar background/>
                    <PolarGrid radialLines={false} fill="#FFFFFF"/>
                    <PolarAngleAxis dataKey="kind" stroke='#FFFFFF' tickLine={false} axisLine={false}  tick={{ fontSize: 12 }} />
                    <Radar name="" dataKey="value" stroke="#FF0000" fill="#FF0000" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </div>

    )
}

export default Performance; 