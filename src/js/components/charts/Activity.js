import {BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip,Legend,Text, ResponsiveContainer} from "recharts";
import "../../../scss/components/Activity.scss"
const Activity = ({data}) => {  
    
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload) {
          return (
            <div className="custom-tooltip">
              <p className="label">{`${payload[0].value}Kg`}</p>
              <p className="label">{`${payload[1].value}Kcal`}</p>
            </div>
          );
        }
      
        return null;
      };

    return (
        <div className=" bgd-grey rounded">
            <ResponsiveContainer width="100%" height={320}>
                <BarChart  width={835} height={320}  data={data}>
                    <Text
                        textAnchor="start"
                    />
                    <CartesianGrid strokeDasharray="3 3" height={1} vertical={false} />
                    <XAxis 
                        dataKey= 'day'
                        tickLine={false}
                        tick={{
                            fontSize: 12,
                            fontWeight: 600,
                        }}
                    />
                    <YAxis
                        datakey='kilogram'
                        orientation='right'
                        type='number'
                        width={30}
                        stroke='#9B9EAC' 
                        tickLine={false}
                        tick={{
                            fontSize: 12,
                            fontWeight: 600,
                        }}
                        // domain={['dataMin', 'dataMax']}
                    />
                    <YAxis 
                        datakey='calories'
                        orientation='right'
                        type='number'
                        width={30}
                        stroke='#9B9EAC' 
                    />
                    <Tooltip
                        content={<CustomTooltip />}
                        stroke="#FFFFFF"
                        strokeWidth={0}
                        cursor={{
                        strokeOpacity: 0.2,
                        }}
                    />
                    <Legend verticalAlign="top" height={36} iconType="circle" align="right" />
                    <Bar dataKey='kilogram' barSize={10} fill="#000" radius={[50, 50, 0, 0]} />
                    <Bar dataKey='calories'  barSize={10} fill="#FF0000" radius={[50, 50, 0, 0]} />
                </BarChart> 
            </ResponsiveContainer>
        </div>


    )
}

export default Activity;