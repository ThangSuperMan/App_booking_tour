import React from "react"

const BookTour: React.FC = () => {
  React.useEffect(() => {
    const script = document.createElement("script")
    document.body.appendChild(script)
  }, [])

  return (
    <>
      <div className="container">
        <h1 className="mt-3">Quản trị tour du lịch</h1>
        <table id="bangQuanTri" className="table table-bordered mt-3">
          <thead>
            <tr>
              <th>Tour</th>
              <th>Hình ảnh</th>
              <th>Số người tham gia</th>
              <th>Danh sách ghế đã đặt</th>
              <th>Hướng dẫn viên</th>
              <th>Hoàn thành</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
      <div
        className="modal fade"
        id="capNhatModal"
        role="dialog"
        aria-labelledby="capNhatModalLabel"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="capNhatModalLabel">
                Cập nhật tour du lịch
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form id="capNhatForm">
                <div className="form-group">
                  <label>Tên tour:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="ten"
                    name="ten"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Hình ảnh:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="hinhAnh"
                    name="hinhAnh"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Hướng dẫn viên:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="huongDanVien"
                    name="huongDanVien"
                    required
                  />
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="hoanThanh"
                    name="hoanThanh"
                  />
                  <label className="form-check-label">Hoàn thành</label>
                </div>
                <input type="hidden" id="tourCapNhat" name="tourCapNhat" />
                <button type="submit" className="btn btn-primary">
                  Cập nhật
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        className=""
        id="capNhatModal"
        role="dialog"
        aria-labelledby="capNhatModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="capNhatModalLabel">
                Cập nhật tour du lịch
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form id="capNhatForm">
                <div className="form-group">
                  <label>Tên tour:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="ten"
                    name="ten"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Hình ảnh:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="hinhAnh"
                    name="hinhAnh"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Hướng dẫn viên:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="huongDanVien"
                    name="huongDanVien"
                    required
                  />
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="hoanThanh"
                    name="hoanThanh"
                  />
                  <label className="form-check-label">Hoàn thành</label>
                </div>
                <input type="hidden" id="tourCapNhat" name="tourCapNhat" />
                <button type="submit" className="btn btn-primary">
                  Cập nhật
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BookTour
