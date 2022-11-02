import {RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from "recharts";
import '../../../scss/components/TodayScore.scss'

import PropTypes from 'prop-types'

/**
 * I'm trying to map the data from the data.js file and display it in the RadialBarChart component.
 * @returns The data is being returned as an array of objects.
 */
const TodayScore = ({data}) => {
    let scoreValue = data.map(score => score.todayScore)
    return ( 
        <div className="position-relative bgd-grey rounded">
            <ResponsiveContainer width='100%' height={263}>
                <RadialBarChart 
                    width={258} 
                    height={263}
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={70}
                    barSize={10}
                    startAngle={180}
                    endAngle={-180}
                    fill="#0000"
                    >
                    <RadialBar
                        type="number"
                        minAngle={15}
                        clockWise
                        background = {{fill: "#FBFBFB"}}
                        fill="#FF0000"
                        dataKey='todayScore'
                    />
                    <PolarAngleAxis
                    type="number"
                    domain={[0, 100]}
                    angleAxisId={0}
                    tick={false}
                    />
                </RadialBarChart>
            </ResponsiveContainer>
            <p className="score-title">Score</p>
            <div className="score-text">
                <p>{scoreValue}%</p>
                <p>de votre</p>
                <p>objectif</p>
            </div>
            
        </div>

    )
}


TodayScore.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object)
}

export default TodayScore; 