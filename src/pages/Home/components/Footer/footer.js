import React from "react";
import "./footer.scss"


class Footer extends React.Component{

    render(){
        return(
            <div className="footer mt-5">
                <footer className="bg-dark text-center text-white container-fluid">
                    <div className="container p-4">
                        <section className="">
                            <form action="">
                                <div className="row d-flex justify-content-center">
                                    <div className="col-auto">
                                        <p className="pt-2 h5 text-white">
                                        <strong>Địa chỉ email của bạn</strong>
                                        </p>
                                    </div>
                                    <div className="col-md-5 col-12">
                                        <div className="form-outline form-white mb-4">
                                            <input type="email" id="form5Example2" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <button type="submit" className="btn btn-outline-light mb-4">
                                            Subscribe
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </section>
                        <section className="mb-4">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
                                repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
                                eum harum corrupti dicta, aliquam sequi voluptate quas.
                            </p>
                        </section>
                        <section>
                            <div className="row">
                                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Hỗ trợ</h5>
                                <ul className="list-unstyled mb-0">
                                    <li>
                                    <a href="#!" className="text-white td-none">Trung tâm trợ giúp</a>
                                    </li>
                                    <li>
                                    <a href="#!" className="text-white td-none">AirCover</a>
                                    </li>
                                    <li>
                                    <a href="#!" className="text-white td-none">Các tùy chọn hủy</a>
                                    </li>
                                    <li>
                                    <a href="#!" className="text-white td-none">Báo cáo lo ngại</a>
                                    </li>
                                </ul>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Cộng đồng</h5>
                                <ul className="list-unstyled mb-0">
                                    <li>
                                    <a href="#!" className="text-white td-none">Nhà ở cứu trợ</a>
                                    </li>
                                    <li>
                                    <a href="#!" className="text-white td-none">Xem tài nguyên đón tiếp khách</a>
                                    </li>
                                    <li>
                                    <a href="#!" className="text-white td-none"></a>
                                    </li>
                                    <li>
                                    <a href="#!" className="text-white td-none"></a>
                                    </li>
                                </ul>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Đón tiếp khách</h5>
                                <ul className="list-unstyled mb-0">
                                    <li>
                                    <a href="#!" className="text-white td-none"></a>
                                    </li>
                                    <li>
                                    <a href="#!" className="text-white td-none"></a>
                                    </li>
                                    <li>
                                    <a href="#!" className="text-white td-none"></a>
                                    </li>
                                    <li>
                                    <a href="#!" className="text-white td-none">Nhà đầu tư</a>
                                    </li>
                                </ul>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Airbnb</h5>
                                <ul className="list-unstyled mb-0">
                                    <li>
                                    <a href="#!" className="text-white td-none">tìm hiểu các tính năng mới</a>
                                    </li>
                                    <li>
                                    <a href="#!" className="text-white td-none"></a>
                                    </li>
                                    <li>
                                    <a href="#!" className="text-white td-none"></a>
                                    </li>
                                    <li>
                                    <a href="#!" className="text-white td-none"></a>
                                    </li>
                                </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer