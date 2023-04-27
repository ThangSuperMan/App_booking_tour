import { DatePicker } from "@mui/x-date-pickers"
import React, { Fragment } from "react"

const Component3: React.FC = () => {
  return (
    <Fragment>
      <div className="p-5 ml-4 mr-4 mt-3 bd">
        <div>
          <div>
            <strong>Nhận phòng</strong>
          </div>
          <DatePicker />
        </div>
        <div style={{ marginTop: "1rem" }}>
          <div>
            <strong>Trả phòng</strong>
          </div>
          <DatePicker />
        </div>
        <a href="/payment">
          <button style={{ marginTop: "1rem" }} className="btn btn-primary">
            Book Tour
          </button>
        </a>
      </div>
    </Fragment>
  )
}

export default Component3
