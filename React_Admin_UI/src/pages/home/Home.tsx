

import "./home.scss"
import TopBox from "../../Components/topBox/TopBox"
import ChartBox from "../../Components/chartbox/ChartBox"
import { chartBoxProduct, chartBoxRevenue, chartBoxConversion, barChartBoxVisit, barChartBoxRevenue } from "../../data"
import { chartBoxUser } from "../../data"
import BarChartBox from "../../Components/barchartBox/BarChartBox"
import PieChartBox from "../../Components/piechartBox/PieChartBox"
import BigChartBox from "../../Components/bigchartBox/BigChartBox"
const Home = () => {
  return (
    <div className="home">
           
            <div className=" box box1"><TopBox/> </div>
            {/* //it fetches all the data from the related component like TopBox,chartBoxUser */}
            <div className=" box box2"> <ChartBox {...chartBoxUser}/> </div>
            <div className=" box box3"> <ChartBox {...chartBoxProduct} /> </div>
            <div className=" box box4"> <PieChartBox/></div>
            <div className=" box box5"> <ChartBox {...chartBoxConversion} /> </div>
            <div className=" box box6"> <ChartBox {...chartBoxRevenue}  /> </div>
            <div className=" box box7"> <BigChartBox/> </div>
            <div className=" box box8"> <BarChartBox {...barChartBoxVisit}/> </div>
            <div className=" box box9"> <BarChartBox {...barChartBoxRevenue}/> </div>

  </div>
  )
}

export default Home
