import React from "react"
import "./style.css"

interface CategoryItem {
  id: number
  content: string
  imageLink: string
  imageDescription: string
  isCategorySmall?: boolean
}

const CategoryItem: React.FC<CategoryItem> = ({
  content,
  imageLink,
  imageDescription,
  isCategorySmall,
}) => {
  return (
    <div
      className={
        isCategorySmall
          ? "category__item category__item-small"
          : "category__item"
      }
    >
      <img src={imageLink} alt={imageDescription} />
      <span>{content}</span>
    </div>
  )
}

const categories: CategoryItem[] = [
  {
    id: 1,
    content: "Được ưa chuộng",
    imageLink: "/images/category/trending.jpeg",
    imageDescription: "Trending tour",
  },
  {
    id: 2,
    content: "Bãi biển",
    imageLink: "/images/category/beach.jpeg",
    imageDescription: "Beach tour",
    isCategorySmall: true,
  },
  {
    id: 3,
    content: "Thật ấn tượng!",
    imageLink: "/images/category/omg.jpeg",
    imageDescription: "OMG! tour",
  },
  {
    id: 4,
    content: "Hồ",
    imageLink: "/images/category/lake.jpeg",
    imageDescription: "Lake tour",
    isCategorySmall: true,
  },
  {
    id: 5,
    content: "Ven hồ",
    imageLink: "/images/category/lakefront.jpeg",
    imageDescription: "Lakefront tour",
  },
  {
    id: 6,
    content: "Phòng riêng",
    imageLink: "/images/category/private-rooms.jpeg",
    imageDescription: "Private rooms",
  },
  {
    id: 7,
    content: "Khung cảnh tuyệt vời",
    imageLink: "/images/category/amazing-views.jpeg",
    imageDescription: "Amazing views tour",
  },
  {
    id: 8,
    content: "Nhà nhỏ",
    imageLink: "/images/category/tiny-homes.jpeg",
    imageDescription: "Tiny homes tour",
  },
  {
    id: 9,
    content: "Biệt thự",
    imageLink: "/images/category/mansions.jpeg",
    imageDescription: "Mansions tour",
  },
  {
    id: 10,
    content: "Cối xay gió",
    imageLink: "/images/category/windwills.jpeg",
    imageDescription: "Windmills tour",
  },
  {
    id: 11,
    content: "Các thành phố nổi tiếng",
    imageLink: "/images/category/iconic-cities.jpeg",
    imageDescription: "Iconic cities tour",
  },
  {
    id: 12,
    content: "Vui chơi",
    imageLink: "/images/category/play.jpeg",
    imageDescription: "Play tour",
  },
  {
    id: 13,
    content: "Công viên quốc gia",
    imageLink: "/images/category/national-parks.jpeg",
    imageDescription: "National parks tour",
  },
]

const Category: React.FC = () => {
  return (
    <div className="category">
      {categories.map((category, index) => (
        <CategoryItem
          key={index}
          id={category.id}
          content={category.content}
          imageLink={category.imageLink}
          imageDescription={category.imageDescription}
          isCategorySmall={category.isCategorySmall ? true : false}
        />
      ))}
    </div>
  )
}

export default Category
