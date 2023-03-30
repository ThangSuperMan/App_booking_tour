import BookTour from "."

interface Props {
  path: string
  componenet: React.ReactNode
}

const route: Props = {
  path: "/book_tour",
  componenet: <BookTour />,
}

export default route
