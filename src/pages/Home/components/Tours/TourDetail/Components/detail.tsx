import React, { Fragment } from "react";
import "./style.css"
import { FaChild, FaMapMarkerAlt, FaWater } from "react-icons/fa";
import Component1 from "./Detail/component1";
import Component2 from "./Detail/component2";
import Component3 from "./Detail/component3";

const DetailTourdetail: React.FC = () => {

    return(
        <Fragment>
            <div className="container detail mt-4">
                <div className="row">
                    <div className="col-7 pl-0">
                        <div className="h3 text-dark mb-0">Toàn bộ căn hộ dịch vụ • chủ nhà Nghĩa</div>
                        <div className="p">5 khách • 2 phòng ngủ • 2 giường • 2 phòng tắm</div>
                        <hr />
                        <div>
                            <div className="row">
                                <div className="col-1 pr-0">
                                    <FaChild className="icon"></FaChild>
                                </div>
                                <div className="col-11 pl-0">
                                    <span className="h5">Nghĩa là chủ nhà siêu cấp</span>
                                    <div className="text-secondary p">Chủ nhà siêu cấp là những chủ nhà có kinh nghiệm, được đánh giá cao và là những người cam kết mang lại quãng thời gian ở tuyệt vời cho khách.</div>
                                </div>                                
                            </div>
                            <div className="row mt-3">
                                <div className="col-1 pr-0">
                                    <FaMapMarkerAlt className="icon"></FaMapMarkerAlt>
                                </div>
                                <div className="col-11 pl-0">
                                    <span className="h5">Địa điểm tuyệt vời</span>
                                    <div className="text-secondary p">90% khách gần đây đã xếp hạng 5 sao cho vị trí này.</div>
                                </div>                                
                            </div>
                            <div className="row mt-3">
                                <div className="col-1 pr-0">
                                    <FaWater className="icon"></FaWater>
                                </div>
                                <div className="col-11 pl-0">
                                    <span className="h5">Bể bơi</span>
                                    <div className="text-secondary p">Đây là một trong số ít chỗ ở có bể bơi tại khu vực này</div>
                                </div>                                
                            </div>
                        </div>
                        <hr/>
                        <Component1></Component1>
                        <hr/>
                        <Component2></Component2>
                    </div>
                    <div className="col-5 pr-0">
                        <Component3></Component3>
                    </div>
                </div>
            </div>           
        </Fragment>
    )
}

export default DetailTourdetail