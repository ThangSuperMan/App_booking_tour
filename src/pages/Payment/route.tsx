import React from "react"
import Payment from "."

interface Props {
  path: string
  componenet: React.ReactNode
}

const route: Props = {
  path: "/payment",
  componenet: <Payment />,
}

export default route
