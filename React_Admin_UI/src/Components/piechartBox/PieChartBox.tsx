import './piechartBox.scss'
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
const data = [
  { name: "Mobile", value: 400, color: "#0088FE" },
  { name: "Desktop", value: 300, color: "#00C49F" },
  { name: "Laptop", value: 300, color: "#FFBB28" },
  { name: "Tablet", value: 200, color: "#FF8042" },
];

const PieChartBox = () => {
  return (
    <div className='pieChartBox'>

      <h1>Lead by Source</h1>
      <div className="chart">

      <ResponsiveContainer width="99%" height={300}>

        <PieChart width={800} height={400} >
          <Tooltip
            contentStyle={{ background: "white", borderRadius: "5px" }}
          />
          <Pie
            data={data}

            innerRadius={'60%'}
            outerRadius={"80%"}
            paddingAngle={15}
            dataKey="value"
          >
            {data.map((item) => (
              <Cell key={item.name} fill={item.color} />
            ))}
          </Pie>

        </PieChart>
      </ResponsiveContainer>
    </div>

{/* //this is for the another part of the piechart */}
    <div className="options">
        {data.map((item) => (
          <div className="option" key={item.name}>
            <div className="title">
              <div className="dot" style={{ backgroundColor: item.color }} />
              <span>{item.name}</span>
            </div>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>


  )
}

export default PieChartBox
