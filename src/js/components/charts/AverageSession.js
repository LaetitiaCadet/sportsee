import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts"
import "../../../scss/components/Average.scss"
const AverageSession = ({data}) => {
/**
 * If the tooltip is active and there is a payload, return a div with a class of custom-tooltip and a
 * paragraph with a class of label. If the tooltip is not active or there is no payload, return null
 * @returns The CustomTooltip component is being returned.
 */
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${payload[0].value} min`}</p>
        </div>
      );
    }
  
    return null;
  };

    return (
      <div className="position-relative bgd-red rounded">
        <div className="average-title">
          <p>Durée moyenne des
            <br />
            sessions
          </p>
        </div>
        <ResponsiveContainer width="100%" height={263}>
          <LineChart
            width={258}
            height={263}
            data={data}
            margin={{
              top:0,
              right: 12,
              left: 8,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="" vertical={false} horizontal={false}  fill="#FF0000"/>
            <XAxis 
             dataKey="day"
             stroke="rgba(255, 255, 255, 0.5)"
             fill="#FFFFFF"
             tick={{
              fontSize: 12,
              fontWeight: 500,
            }}
             tickLine={false}
             axisLine={false}
              />
            <YAxis hide />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{
                stroke:"#000",
                strokeOpacity: 0.2,
                strokeWidth:80,
              }}

              fill="#FFFFFF"
            />
            <Line 
             type="monotone"
             dataKey="sessionLength"
             dot={false}
             activeDot={{
                stroke: "rgba(255,255,255, 0.3)",
                strokeWidth: 8,
                r: 6,
              }}
             stroke="rgb(255, 255, 255, 0.5)" 
             strokeWidth={2} />
          </LineChart>
         </ResponsiveContainer>
      </div>

    )

}

export default AverageSession