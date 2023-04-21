import React from "react";
import "./confirmtour.scss"

class ConfirmTour extends React.Component{

    render(){
        return(
            <div className="servicead">
                <div className="container mt-5">
                    <div className="h1">Xác nhận tour</div>
                    <table className="table mt-5">
                        <thead>
                        <tr>
                            <th>Mã đặt tour</th>
                            <th>Tên tour</th>
                            <th>Thông tin khách hàng</th>
                            <th>Xem chi tiết</th>
                            <th>Xác nhận</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>TH0101</td>
                            <td>Chuyến đi tham quan Đà Nẵng 2 ngày 1 đêm</td>
                            <td>Nguyễn Văn A</td>
                            <td><button className="bt">Chi tiết</button></td>
                            <td>
                                <button className="bt">Chấp nhận</button>
                                <button className="bt ml-4">Hủy bỏ</button>
                            </td>
                        </tr>
                        <tr>
                            <td>TH0101</td>
                            <td>Chuyến đi tham quan Đà Nẵng 2 ngày 1 đêm</td>
                            <td>Nguyễn Văn A</td>
                            <td><button className="bt">Chi tiết</button></td>
                            <td>
                                <button className="bt">Chấp nhận</button>
                                <button className="bt ml-4">Hủy bỏ</button>
                            </td>
                        </tr>
                        <tr>
                            <td>TH0101</td>
                            <td>Chuyến đi tham quan Đà Nẵng 2 ngày 1 đêm</td>
                            <td>Nguyễn Văn A</td>
                            <td><button className="bt">Chi tiết</button></td>
                            <td>
                                <button className="bt">Chấp nhận</button>
                                <button className="bt ml-4">Hủy bỏ</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>                  
                </div>
            </div>
        )
    }
}

export default ConfirmTour