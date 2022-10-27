import {BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip,Legend,Text, ResponsiveContainer} from "recharts";
import "../../../scss/components/Activity.scss"
const Activity = ({data}) => {  
    
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload) {
          return (
            <div className="custom-tooltip tooltip-activity">
              <p className="label">{`${payload[0].value}Kg`}</p>
              <p className="label">{`${payload[1].value}Kcal`}</p>
            </div>
          );
        }
      
        return null;
      };

    return (
        <div className="position-relative bgd-grey rounded">
            <div className="legends-activity position-absolute d-flex mt-4 px-5">
                    <h5 className='legend-title'>Activité quotidienne</h5>

                    <div className="legend-values d-flex">
                        <div className="legend-kilogram d-flex">
                            <div className="bubble-black mx-3 my-2"></div>
                            <p>Poids (kg)</p>
                        </div>
                        <div className="legend-calories d-flex">
                            <div className="bubble-red mx-3 my-2"></div>
                            <p>Calories brûlées (kCal)</p>
                        </div>
                    </div>
            </div>
            <ResponsiveContainer width="100%" height={320}>
                <BarChart  width={835} height={310}  data={data} barGap={15}  margin={{ top: 95, right: 48, bottom: 15, left: 48 }} >

                    <CartesianGrid strokeDasharray="3" height={1} vertical={false} />
                    <XAxis 
                        dataKey='day'
                        tickLine={false}
                        tick={{
                            fontSize: 12,
                            fontWeight: 600,
                        }}
                    />
                    <YAxis 
                        datakey='calories'
                        yAxisId="left"
                        orientation='left'
                        hide={true}
                        type='number'
                        width={30}
                        stroke='#9B9EAC'
                        tickLine={false}
                        domain={[0, "dataMax + 50"]}
                    />
                    <YAxis
                        datakey='kilogram'
                        yAxisId="right"
                        orientation='right'
                        type='number'
                        width={30}
                        stroke='#9B9EAC' 
                        tickLine={false}
                        tick={{ 
                            fontSize: 12,
                            fontWeight: 600,
                        }}
                        domain={["dataMin - 1", "dataMax + -6"]}
                        allowDecimals={false}
                        dx={48}
                    /> 

                    <Tooltip
                        content={<CustomTooltip />}
                        stroke="#FFFFFF"
                        strokeWidth={0}
                        cursor={{
                        strokeOpacity: 0.2,
                        }}
                    />
                    <Bar dataKey='kilogram' yAxisId="right" barSize={10} fill="#000" radius={[50, 50, 0, 0]} />
                    <Bar dataKey='calories' yAxisId="left"  barSize={10}  fill="#FF0000" radius={[50, 50, 0, 0]} />
                </BarChart> 
            </ResponsiveContainer>
        </div>


    )
}

export default Activity;