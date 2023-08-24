import { Link } from '@mui/material'
import './chartBox.scss'
import { Line,LineChart,ResponsiveContainer , Tooltip} from 'recharts'

type Props = {
  color: string;
  icon: string;
  title: string;
  dataKey: string;
  number: number | string;
  percentage: number;
  chartData: object[];
};


const ChartBox = (props: Props) => {
  return (
    <div className='chartBox'>
      {/* chartbox is divided into two parts i.e BoxInfo and chartInfo */}
      <div className="BoxInfo">
        <div className="title">
          <img src={props.icon} alt='user' />
          <span>{props.title}</span>
        </div>
        <h1>{props.number}</h1>
        <Link >View all</Link>
      </div>

      <div className="chartInfo">
        <div className='chart'>
          <ResponsiveContainer width="100%" height="100%">

            <LineChart  data={props.chartData}>
            {/* Tooltips display informative text when users hover over, focus on, or tap an element. When activated,  */}
              <Tooltip 
              contentStyle={{background:"transaprent",border: "none"}}
              labelStyle={{display:"none"}} //to hide the label i.e page A,B,C,D,E,F,G or numbers
              position={{ x:70, y: 40 }}//to change the position of tooltip
              />

              <Line 
              type="monotone" 
              dataKey={props.dataKey} 
              stroke={props.color}
              strokeWidth={2} 
              dot={false}
              />
            </LineChart>

          </ResponsiveContainer>

        </div>
        <div className='texts'>
          <span className='percentage'  style={{ color: props.percentage < 0 ? "tomato" : "limegreen" }}> {props.percentage}%</span>
          <span className='duration'>this month</span>
        </div>
      </div>
    </div>
  )
}

export default ChartBox
