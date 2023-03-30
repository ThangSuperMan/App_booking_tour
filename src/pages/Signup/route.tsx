import React from "react"
import Signup from "."

interface Props {
  path: string
  componenet: React.ReactNode
}

const route: Props = {
  path: "/signup",
  componenet: <Signup />,
}

export default route
