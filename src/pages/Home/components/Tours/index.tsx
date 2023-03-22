import React from "react"
// @ts-ignore
import { HeartIcon, StarIcon } from "#components"
import "./style.css"

const Tours: React.FC = () => {
  return (
    <div className="tours">
      <div className="tour">
        <div className="tour__img">
          <img src="/images/tours/tour1.webp" alt="haha" />
          <div className="tour__icon">
            <HeartIcon />
          </div>
        </div>
        <div className="tour-content">
          <div className="tour-content__title">
            <span>Balian Beach, Indonesia</span>
            <div className="rating">
              <StarIcon />
              <span>4.84</span>
            </div>
          </div>
          <span className="tour-content__viewed">
            Viewed 35,531 times last week
          </span>
          <br />
          <span className="tour-content__subtitle">Jun 4 – 9</span>
          <div className="tour-content__price">
            <strong>$117</strong>
            <span>night</span>
          </div>
        </div>
      </div>
      <div className="tour">
        <div className="tour__img">
          <img src="/images/tours/tour2.webp" alt="haha" />
          <div className="tour__icon">
            <HeartIcon />
          </div>
        </div>
        <div className="tour-content">
          <div className="tour-content__title">Balian Beach, Indonesia</div>
          <span className="tour-content__viewed">
            Viewed 35,531 times last week
          </span>
          <span className="tour-content__subtitle">Jun 4 – 9</span>
          <div className="tour-content__price">
            <strong>$117</strong>
            <span>night</span>
          </div>
        </div>
      </div>
      <div className="tour">
        <div className="tour__img">
          <img src="/images/tours/tour3.webp" alt="haha" />
          <div className="tour__icon">
            <HeartIcon />
          </div>
        </div>
        <div className="tour-content">
          <div className="tour-content__title">Balian Beach, Indonesia</div>
          <span className="tour-content__viewed">
            Viewed 35,531 times last week
          </span>
          <span className="tour-content__subtitle">Jun 4 – 9</span>
          <div className="tour-content__price">
            <strong>$117</strong>
            <span>night</span>
          </div>
        </div>
      </div>
      <div className="tour">
        <div className="tour__img">
          <img src="/images/tours/tour4.webp" alt="haha" />
          <div className="tour__icon">
            <HeartIcon />
          </div>
        </div>
        <div className="tour-content">
          <div className="tour-content__title">Balian Beach, Indonesia</div>
          <span className="tour-content__viewed">
            Viewed 35,531 times last week
          </span>
          <span className="tour-content__subtitle">Jun 4 – 9</span>
          <div className="tour-content__price">
            <strong>$117</strong>
            <span>night</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tours
