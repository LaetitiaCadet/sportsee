import {BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip,Legend, ResponsiveContainer} from "recharts";
import "../../../scss/components/Activity.scss"
const Activity = ({data}) => {   
    return (
        <ResponsiveContainer width="100%" height={400}>
            <BarChart  width={900} height={400}  data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical="false" height={1} />
                <XAxis dataKey= 'day'/>
                <YAxis
                    datakey='kilogram'
                    orientation='left'
                    type='number'
                    width={30}
                    stroke='#000'   
                />
                <YAxis 
                    datakey='calories'
                    orientation='right'
                    type='number'
                    width={30}
                    stroke='#FF0000' 
                />
                <Tooltip />
                <Legend verticalAlign="top" height={36} iconType="circle" align="right" />
                <Bar dataKey='kilogram' barSize={20} fill="#000" />
                <Bar dataKey='calories'  barSize={20} fill="#FF0000" />
            </BarChart> 
        </ResponsiveContainer>

    )
}

export default Activity;