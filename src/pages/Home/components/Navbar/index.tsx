import React from "react"
// @ts-ignore
import { Logo, EarthIcon, HumburgerIcon, ProfileIcon } from "#components"
// @ts-ignore
import { SearchIcon } from "#components"
import "./style.css"

const DropdownMenu: React.FC = () => {
  return (
    <div className="profile__dropdown">
      <ul className="dropdown__list">
        <li className="list__item">
          <button>Đăng ký</button>
        </li>
        <li className="list__item">
          <button>Đăng nhập</button>
        </li>
      </ul>
      <div className="dropdown__sep"></div>
      <ul className="dropdown__list">
        <li className="list__item list__item-nohighlight">
          <button>Cho thuê chỗ ở qua Airbnb</button>
        </li>
        <li className="list__item">
          <button>Tổ chức trải nghiệm</button>
        </li>
        <li className="list__item">
          <button>Trợ giúp</button>
        </li>
      </ul>
    </div>
  )
}

const Navbar: React.FC = () => {
  const [isShowDropdown, setIsShowDropdown] = React.useState<boolean>(false)

  const handleOnClickButtonAnyLocation = () => {
    setIsShowDropdown((prev) => !prev)
  }

  const handleOpenProfileMenu = () => {
    console.log("handleOpenProfileMenu")
    setIsShowDropdown((prev) => !prev)
  }

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <Logo />
      </div>
      <div className="navbar__middle">
        <div className="middle__features">
          <button onClick={handleOnClickButtonAnyLocation}>
            Địa điểm bất kỳ
          </button>
          <button>tuần bất kỳ</button>
          <button>Thêm khách</button>
        </div>
        <div className="middle__search">
          <div className="search__icon">
            <SearchIcon />
          </div>
        </div>
      </div>
      <div className="navbar__right">
        <button className="right__button">Cho thuê chỗ ở qua Airbnb</button>
        <button className="right__button right__button-circle">
          <EarthIcon />
        </button>
        <div className="right__profile">
          <button onClick={handleOpenProfileMenu}>
            <HumburgerIcon />
            <div className="profile__icon">
              <ProfileIcon width="30px" height="30px" />
            </div>
          </button>
          {isShowDropdown && <DropdownMenu />}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
