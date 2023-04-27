import React, { Fragment } from "react";
import "./style.css"

const TitleTourdetail: React.FC = () => {

    return(
        <Fragment>
            <div className="container title">
                <div className="h2 text-dark mb-0">Căn hộ cao cấp trong Tòa nhà Sheraton - Mặt tiền bãi biển</div>
                <div className="p">Sơn Trà - Đà Nẵng - Việt Nam</div>
                <div className="row mt-3 imgs">
                    <img className="col-6 pl-0 pr-0 img-l" src="/images/tours/TourDetail/hinh1.webp"/>
                    <div className="col-3 row">
                        <img className="pr-0 pb-2" src="/images/tours/TourDetail/hinh2.webp"/>
                        <img className="pr-0 pt-1" src="/images/tours/TourDetail/hinh3.webp"/>
                    </div>
                    <div className="col-3 row">
                        <img className="pr-0 img-r1 pb-2" src="/images/tours/TourDetail/hinh4.webp"/>
                        <img className="pr-0 img-r2 pt-1" src="/images/tours/TourDetail/hinh5.webp"/>
                    </div>
                </div>
            </div>           
        </Fragment>
    )
}

export default TitleTourdetail