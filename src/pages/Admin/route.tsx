import React from "react"
import Admin from "."

interface Props {
  path: string
  componenet: React.ReactNode
}

const route: Props = {
  path: "/admin",
  componenet: <Admin />,
}

export default route
