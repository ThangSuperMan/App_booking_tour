import StateTour from "."

interface Props {
  path: string
  componenet: React.ReactNode
}

const route: Props = {
  path: "/state_tour",
  componenet: <StateTour />,
}

export default route
