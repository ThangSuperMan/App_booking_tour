import React from "react";
import Navbar from "../../Navbar";
import "./tourdetail.scss";

class TourDetail extends React.Component{
    state = {
        showAircover: false,
    }

    handleShowHide = () => {
        this.setState({
            showAircover: !this.state.showAircover
        })
    }

    render(){
        let {showAircover} = this.state;

        return(
            <div className="tourdetail-page">
                <Navbar></Navbar>
                <div className="tour-main">
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
                                {showAircover === false && <button className="btn-aircover" onClick={() => this.handleShowHide()}>Tìm hiểu thêm</button>}
                                {showAircover &&
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
                                        <button className="btn-aircover" onClick={() => this.handleShowHide()}>Ẩn bớt</button>
                                    </div>
                                }
                            </div>
                            <hr className="hr"/>
                            <div className="tour-title4"><a className="color-red">Giới </a>thiệu về chỗ ở này</div>
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
                                <button className="btn-bookroom">
                                    ĐẶT PHÒNG
                                </button>
                            </div>
                        </div>
                    </div>
                    <hr className="hr"/>
                    <div className="footer">
                        <div className="frame-footer">
                            <div className="title-footer">Hỗ trợ</div>
                            <a>Trung tâm trợ giúp</a>
                            <a>AriCover</a>
                            <a>Hỗ trợ người khuyết tật</a>
                            <a>Các tùy chọn hủy</a>
                            <a>Biện pháp ứng phó với đại dịch COVID-19 của chúng tôi</a>
                            <a>Báo cáo lo ngại của hàng xóm</a>
                        </div>
                        <div className="frame-footer">
                            <div className="title-footer">Cộng đồng</div>
                            <a>Airbnb: nhà ở cứu trợ</a>
                            <a>Chống phân biệt đối xử</a>
                        </div>
                        <div className="frame-footer">
                            <div className="title-footer">Đón tiếp khách</div>
                            <a>Cho thuê nhà ở cứu trợ</a>
                            <a>AirCover cho chủ nhà</a>
                            <a>Xem tài nguyên đón tiếp khách</a>
                            <a>Truy cập diễn đàn cộng đồng</a>
                            <a>Đón tiếp khách có trách nhiệm</a>
                        </div>
                        <div className="frame-footer">
                            <div className="title-footer">Airbnb</div>
                            <a>Trang tin tức</a>
                            <a>tìm hiểu các tính năng mới</a>
                            <a>Thư ngỏ từ các nhà sáng lập</a>
                            <a>Cơ hội nghề nghiệp</a>
                            <a>Nhà đầu tư</a>
                            <a>Thẻ quà tặng</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TourDetail