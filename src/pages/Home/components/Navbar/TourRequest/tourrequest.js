import React from "react";
import "./tourrequest.scss";
import Navbar from "../../Navbar";
import Footer from "../../Footer/footer";
import {Link} from "react-router-dom"

class TourRequest extends React.Component{
    state = {
        CustomerRequest: ""
    }

    render() {
        return(
        <div className="tour-request-page">
            <Navbar></Navbar>
            <div style={{marginTop: "70px"}}>      
                <img className="img-fluid" src="/images/tours/TourRequest/TourRequest2.png" width="100%"></img>
            </div>
            <div className="mt-5 mb-5 text-center title"><span className="red-color">Đặt</span> tour theo yêu cầu của bạn</div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-7">
                        <img className="img-fluid img-thumbnail" src="/images/tours/TourRequest/TourRequest.jpg"></img>
                    </div>
                    <div className="col-sm-5 p-3">
                        <p className="h2">Tour theo yêu cầu</p>
                        <hr />
                        <p>Với các tour có sẵn tại Airbnb thì luôn luôn có những vị trí Quý khách hàng muốn đến, để thuận tiện và làm hài lòng khách hàng, chúng tôi luôn năng động tư vấn chuyển đổi lịch trình đặc biệt cho các khách hàng theo yêu cầu.</p>
                        <p>Với tiêu chí "tiếp đón khách hàng như người thân" Du Lịch Việt luôn không ngừng nâng cao chất lượng dịch vụ, quan tâm đến mong muốn của từng khách hàng. Hãy đến với Du Lịch Việt để trải nghiệm chất lượng hoàn hảo song song với giá cả tốt nhất trên thị trường.</p>
                        <p>Nhận định được điều đó, chúng tôi luôn có những Tour đặc biệt phục vụ được các khách hàng khó tính nhất. </p>                  
                    </div>
                </div>
                <hr/>
                <div className="row mt-5 mb-5">
                    <span className="col-sm-2 request-input">Nhập yêu cầu của bạn</span>
                    <input className="col-sm-8 request-input" type="text"></input>
                    <button className="col-sm-2">Gửi</button>
                </div>
                <hr/>
                <div className="card mt-4 mb-5">
                    <div className="card-header h3 bg-info card">Mô tả chi tiết</div>
                    <div className="card-body">
                        <p className="">Một số lí do bạn nên chọn <span className="red-color">Airbnb</span> làm bạn đồng hành cho các hành trình:</p>
                        <ul className="b">
                            <li>Luôn lắng nghe, tiếp nhận thông tin và nhiệt tình tư vấn nhu cầu du lịch của khách hàng.</li>
                            <li>Xây dựng ý tưởng và thiết kế các chương trình tour phù hợp với yêu cầu của quý khách.</li>
                            <li>Cung cấp các dịch vụ: khách sạn, nhà hàng, điểm tham quan,… theo sở thích của quý khách với chi phí tối ưu nhất.</li>
                            <li>Tổ chức thiết kế các sự kiện: Teambuilding, Gala Dinner,… theo mong muốn của khách.</li>
                            <li>Quản lí, điều hành nghiêm ngặt tránh xảy ra sơ xuất trong suốt quá trình tour diễn ra.</li>
                            <li>Hướng dẫn viên nhiệt tình chăm sóc khách hàng trong suốt chặng đi.</li>
                            <li>Cung cấp các chương trình với giá đảm bảo phù hợp với ngân sách mà bạn đưa ra.</li>
                        </ul>
                        <p>Với tiêu chí "tiếp đón khách hàng như người thân" Du Lịch Việt luôn không ngừng nâng cao chất lượng dịch vụ, quan tâm đến mong muốn của từng khách hàng. Hãy đến với Du Lịch Việt để trải nghiệm chất lượng hoàn hảo song song với giá cả tốt nhất trên thị trường.</p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
        )
    }
}

export default TourRequest