import { RadarChart, PolarGrid, PolarAngleAxis, RadialBar, Radar, ResponsiveContainer } from "recharts";
import PropTypes from 'prop-types'

/**
 * It's a function that takes in a data object and returns a div with a RadarChart inside of it.
 * @returns A React component.
 */
const Performance = ({data}) => {
    return (
        <div className="bgd-black rounded">
            <ResponsiveContainer width='100%' height={263}>
                <RadarChart outerRadius={90} width={258} height={263} data={data}>
                    <RadialBar background/>
                    <PolarGrid radialLines={false} fill="#FFFFFF"/>
                    <PolarAngleAxis dataKey="kind" stroke='#FFFFFF' tickLine={false} axisLine={false}  tick={{ fontSize: 12 }} />
                    <Radar dataKey="value" stroke="#FF0000" fill="#FF0000" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </div>

    )
}

Performance.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object)
}
export default Performance; 