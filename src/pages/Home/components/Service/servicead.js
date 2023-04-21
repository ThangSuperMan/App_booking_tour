import React from "react";
import "./servicead.scss"

class ServiceAdmin extends React.Component{

    render(){
        return(
            <div className="servicead">
                <div className="container mt-5">
                    <div className="h1">Quản lí dịch vụ - đối tác</div>
                    <table className="table mt-5">
                        <thead>
                        <tr>
                            <th>Loại đối tác</th>
                            <th>Tên đối tác</th>
                            <th>Ngày lập đối tác</th>
                            <th>Thông tin</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Hãng máy bay</td>
                            <td>Vietname Airlines</td>
                            <td>19/4/2022</td>
                            <td>Các chuyến bay xuất phát từ Sài Gòn ra Hà Nội và ngược lại</td>
                        </tr>
                        <tr>
                            <td>Hãng máy bay</td>
                            <td>Vietname Airlines</td>
                            <td>19/4/2022</td>
                            <td>Các chuyến bay xuất phát từ Sài Gòn ra Hà Nội và ngược lại</td>
                        </tr>
                        <tr>
                            <td>Hãng máy bay</td>
                            <td>BamBoo</td>
                            <td>19/4/2022</td>
                            <td>Các chuyến bay xuất phát từ Sài Gòn ra Hà Nội và ngược lại</td>
                        </tr>
                        <tr>
                            <td>Hãng máy bay</td>
                            <td>Vietname Airlines</td>
                            <td>19/4/2022</td>
                            <td>Các chuyến bay xuất phát từ Sài Gòn ra Hà Nội và ngược lại</td>
                        </tr>
                        <tr>
                            <td>Khách sạn</td>
                            <td>SaiGon Hotel</td>
                            <td>19/4/2022</td>
                            <td>Các chuyến bay xuất phát từ Sài Gòn ra Hà Nội và ngược lại</td>
                        </tr>
                        <tr>
                            <td>Khách sạn</td>
                            <td>SaiGon Hotel</td>
                            <td>19/4/2022</td>
                            <td>Các chuyến bay xuất phát từ Sài Gòn ra Hà Nội và ngược lại</td>
                        </tr>
                        <tr>
                            <td>Nhà hàng</td>
                            <td>SaiGon Restaurant</td>
                            <td>19/4/2022</td>
                            <td>Nhà hàng 5 sao tại Đà Nẵng</td>
                        </tr>
                        </tbody>
                    </table>
                    <div className="d-flex justify-content-end">
                        <button className="p-2">Cập nhật thông tin</button>
                    </div>                   
                </div>
            </div>
        )
    }
}

export default ServiceAdmin