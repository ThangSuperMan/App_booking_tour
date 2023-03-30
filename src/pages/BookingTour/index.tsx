import React from "react"
import "./style.css"

const BookTour: React.FC = () => {
  return (
    <div>
      <div className="container">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/images/carousel/London.jpg"
                alt="London"
                className="d-block w-100 destination-image"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/images/carousel/Paris.jpg"
                alt="Paris"
                className="d-block w-100 destination-image"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        <form id="tourForm" className="mt-3">
          <div className="form-group">
            <label>Họ và tên:</label>
            <input
              type="text"
              className="form-control"
              id="ten"
              name="ten"
              required
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="form-group">
            <label>Số điện thoại:</label>
            <input
              type="tel"
              className="form-control"
              id="sdt"
              name="sdt"
              required
            />
          </div>
          <div className="form-group">
            <label>Địa chỉ:</label>
            <input
              type="text"
              className="form-control"
              id="diachi"
              name="diachi"
              required
            />
          </div>
          <div className="form-group">
            <label>Chọn tour:</label>
            <select className="form-control" id="tour" name="tour" required>
              <option value="London">London</option>
              <option value="Paris">Paris</option>
            </select>
          </div>
          <div className="form-group">
            <label>Chọn ghế ngồi:</label>
            <div id="seatContainer"></div>
            <input type="hidden" id="ghe" name="ghe" required />
          </div>
          <div className="form-group">
            <label>Ngày đi:</label>
            <input
              type="date"
              className="form-control"
              id="ngaydi"
              name="ngaydi"
              required
            />
          </div>
          <div className="form-group">
            <label>Số người:</label>
            <input
              type="number"
              className="form-control"
              id="songuoi"
              name="songuoi"
              min="1"
              max="50"
              required
            />
          </div>
          <button type="button" className="btn btn-warning">
            Kiểm tra ghế
          </button>
          <p id="thongBao" className="mt-2"></p>
          <input
            type="submit"
            className="btn btn-primary mt-2"
            value="Đặt tour"
          />
        </form>
      </div>
    </div>
  )
}

export default BookTour
