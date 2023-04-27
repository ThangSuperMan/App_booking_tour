// import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import "./style.css"
import { userData } from "../../dummyData"
import Chart from "./components/Chart/chart"
import WidgetLg from "../../components/WidgetLg/widgetLg"
import FeaturedInfo from "./components/FeaturedInfo"
// import WidgetSm from "../../components/widgetSm/WidgetSm"

export default function Home() {
  return (
    <div className="admin">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetLg />
      </div>
    </div>
  )
}
