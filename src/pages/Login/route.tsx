import React from "react"
import Login from "."

interface Props {
  path: string
  componenet: React.ReactNode
}

const route: Props = {
  path: "/login",
  componenet: <Login />,
}

export default route
