import "./style.css"

export default function WidgetLg() {
  const Button = ({ type }: { type: any }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>
  }
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="logo.png" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Phuong Vi</span>
          </td>
          <td className="widgetLgDate">2 Jun 2023</td>
          <td className="widgetLgAmount">12.000.000 VND</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="logo.png" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Phuong Vi</span>
          </td>
          <td className="widgetLgDate">15 Jun 2023</td>
          <td className="widgetLgAmount">15.000.000 VND</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="logo.png" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Phuong Vi</span>
          </td>
          <td className="widgetLgDate">20 Jun 2023</td>
          <td className="widgetLgAmount">25.000.000 VND</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="logo.png" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Phuong Vi</span>
          </td>
          <td className="widgetLgDate">30 Jun 2021</td>
          <td className="widgetLgAmount">15.000.000 VND</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  )
}
