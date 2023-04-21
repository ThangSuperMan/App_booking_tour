import React from "react";
import Navbar from "../../Navbar";
import "./tourdetail.scss";
import Footer from "../../Footer/footer";

class TourDetail extends React.Component{
    state = {
        showAircover: false
    }


    handleShowHide = () => {
        this.setState({
            showAircover: !this.state.showAircover
        })
    }
    handleClickBookRoom = () => {
        alert(`Bạn đã đặt thành công`)
    }

    render(){
        let {showAircover} = this.state;

        return(
            <div className="tourdetail-page">
                <Navbar></Navbar>
                <div className="tour-main container">
                    <div className="tour-title">Biệt thự tuyệt đẹp bên rìa ĐẦM XANH</div>
                    <a className="link-address" href="https://vi.wikipedia.org/wiki/X%C3%A3_White_Lake,_Michigan">White Lake charter Township, Michigan, Hoa Kỳ</a>
                    <div className="list-picture">
                        <div className="picture-main">
                            <img src="/images/tours/tour1.webp" alt="haha" />
                            <div className="list-picture-cover">
                                <img className="picture-cover" src="/images/tours/tour2.webp" alt="haha" />
                                <img className="picture-cover" src="/images/tours/tour3.webp" alt="haha" />
                            </div>
                        </div>
                    </div>
                    <div className="tour-title2">Toàn bộ nhà nghỉ thôn dã. Chủ nhà Dylan</div>
                    <div className="tour-title3">5 khách - 2 phòng ngủ - 2 giường - 2 phòng tắm</div>
                    <hr className="hr"/>
                    <div className="aircover">
                        <div className="aircover-left">
                            <div className="tour-title4"><a className="color-red">Air</a>cover</div>
                            <p className="paragraph">Mọi đặt phòng đều được bảo vệ miễn phí trong trường hợp chủ nhà hủy, thông tin nhà/phòng cho thuê không chính xác và những vấn đề khác như sự cố trong quá trình nhận phòng</p>
                            <div>
                                
                                    <div className="btn-hide">
                                        <div className="frame-aricover">
                                            <p className="title-children">Bảo vệ việc đặt phòng</p>
                                            <p className="paragraph">Trong trường hợp hãn hữu khi Chủ nhà cần hủy đặt phòng của bạn trong vòng 30 ngày trước ngày nhận phòng, chúng tôi sẽ tìm cho bạn một chỗ ở tương tự hoặc tốt hơn, hoặc sẽ hoàn tiền cho bạn.</p>
                                        </div>
                                        <div className="frame-aricover">
                                            <p className="title-children">Bảo đảm nhận phòng</p>
                                            <p className="paragraph">Nếu bạn không thể nhận phòng và Chủ nhà không thể giải quyết vấn đề này, chúng tôi sẽ tìm cho bạn một chỗ ở tương tự hoặc tốt hơn có thời gian ở tương đương, hoặc chúng tôi sẽ hoàn tiền cho bạn.</p>
                                        </div>
                                        <div className="frame-aricover">
                                            <p className="title-children">Bảo đảm chi phí tương xứng</p>
                                            <p className="paragraph">Trong thời gian ở, nếu bạn nhận thấy chỗ ở không đúng như quảng cáo, ví dụ như tủ lạnh ngừng hoạt động và Chủ nhà không thể dễ dàng khắc phục vấn đề này, hoặc số phòng ngủ ít hơn so với thông tin trên mục cho thuê, thì bạn sẽ có 3 ngày để báo cáo vấn đề. Khi đó, chúng tôi sẽ tìm cho bạn một chỗ ở tương tự hoặc tốt hơn, hoặc chúng tôi sẽ hoàn tiền cho bạn.</p>
                                        </div>
                                        <div className="frame-aricover">
                                            <p className="title-children">Đường dây an toàn 24 giờ</p>
                                            <p className="paragraph">Nếu cảm thấy không an toàn, bạn sẽ được ưu tiên liên hệ với nhân viên hỗ trợ an toàn được đào tạo đặc biệt của chúng tôi, bất kể ngày đêm.</p>
                                        </div>
                                    </div>
                                
                            </div>
                            <hr className="hr"/>
                            <div className="tour-title4"><a className="color-red">Giới thiệu</a> về chỗ ở này</div>
                            <p className="paragraph">MỚI 8/2022! Nhà nghỉ thôn dã mô tả trên ALL-SPORTS riêng, Hồ Cooley. Toàn bộ ngôi nhà là của bạn! Không gian được cải tạo gần đây và có trang trí màu cam/xanh thú vị mang lại cảm giác sôi động cho ngôi nhà nhỏ quanh năm. Một boong tuyệt đẹp với lò nướng ga nhìn ra hồ với đồ nội thất để nghỉ ngơi + tắm nắng. Tận hưởng ánh nắng mặt trời/bộ đồ lặt vặt Michigan tinh khiết. Những tháng mùa hè chúng tôi cung cấp một chiếc thuyền Pontoon (vớigiá $ thông tin tham quan)! Tháng mùa đông; tận hưởng trải nghiệm trượt băng/câu cá. Nằm gần công viên, khu mua sắm, ăn uống golf..v.v.!</p>
                        </div>
                        <div className="aircover-right">
                            <div className="frame-pay">
                                <div className="price">6.999.000đ <a className="paragraph">đêm</a></div>
                                <div className="book-tour">
                                    <div className="set-room">
                                        <div className="frame-day">
                                            <label className="label-day">Nhận phòng</label>
                                            <input type="date" className="input-day"></input>
                                        </div>
                                        <div className="frame-day">
                                            <label className="label-day">Trả phòng</label>
                                            <input type="date" className="input-day"></input>
                                        </div>
                                    </div>
                                    <div className="customer">
                                        <div className="frame-customer">
                                            <label className="label-customer">Khách</label>
                                            <input type="number" className="input-customer"></input>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    {showAircover === false && <button className="btn-aircover" onClick={() => this.handleShowHide()}>Xem tình trạng tour</button>}
                                    {showAircover &&
                                        <div className="btn-hide">
                                            <div className="frame-aricover">
                                                <p className="title-children">Hướng dẫn viên: Nguyễn Thị Ngọc Duyên (20 tuổi)</p>
                                            </div>
                                            <div className="frame-aricover">
                                                <p className="title-children">Số người tham gia: 20 người</p>
                                            </div>
                                            <div className="frame-aricover">
                                                <p className="title-children">Số chỗ còn trống: 6 chỗ</p>
                                            </div>
                                            <div className="frame-aricover">
                                                <p className="title-children">Thời gian dự kiến bắt đầu: 6 giờ ngày 29 tháng 3 năm 2023<br/>Thời gian kết thúc: 18 giờ ngày 31 tháng 3 năm 2023</p>
                                            </div>
                                            <button className="btn-aircover" onClick={() => this.handleShowHide()}>Ẩn bớt</button>
                                        </div>
                                    }
                                </div>
                                <button className="btn-bookroom"onClick={() => this.handleClickBookRoom()} >
                                    ĐẶT PHÒNG
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}

export default TourDetail