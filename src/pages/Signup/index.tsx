import React from "react";
import './style.scss';
import { Link } from "react-router-dom"
import { FaFacebookSquare, FaGoogle, FaTwitter } from "react-icons/fa";


class Signup extends React.Component{

    state = {
        inputTenDangNhap: '',
        inputEmail: '',
        inputMatKhau: '',
        inputNhapLaiMatKhau: ''
    }
    
    handleChangeTenDangNhap = (event: any) => {
        this.setState({
            inputTenDangNhap: event.target.value
        })
    }
    handleChangeEmail = (event: any) => {
        this.setState({
            inputEmail: event.target.value
        })
    }
    handleChangeMatKhau = (event: any) => {
        this.setState({
            inputMatKhau: event.target.value
        })
    }
    handleChangeNhapLaiMatKhau = (event: any) => {
        this.setState({
            inputNhapLaiMatKhau: event.target.value
        })
    }
    handleSubmit = () => {
        if(!this.state.inputEmail || !this.state.inputMatKhau || !this.state.inputTenDangNhap || !this.state.inputNhapLaiMatKhau){
            alert(`Bạn chưa nhập đầy đủ thông tin`)
            return;
        }
        console.log(`checkdata input: `, this.state)
        this.setState({
            inputTenDangNhap: '',
            inputEmail: '',
            inputMatKhau: '',
            inputNhapLaiMatKhau: ''
        })
    }

    render() {
        return(
            <div className="signup-signup-page">           
                <div className="signup-page">
                    <div className="signup-main">
                        <div className="signup-title">
                            Đăng ký
                        </div>
                        <div className="frame-signup">
                            <div className="from-group">
                                <label className="from-label" htmlFor="inputTenDangNhap">Tên đăng nhập</label>
                                <input className="from-input"
                                type="text"
                                value={this.state.inputTenDangNhap}
                                onChange={(event) => this.handleChangeTenDangNhap(event)}></input>
                            </div>
                            <div className="from-group">
                                <label className="from-label" htmlFor="inputEmail">Email</label>
                                <input className="from-input"
                                type="email"
                                value={this.state.inputEmail}
                                onChange={(event) => this.handleChangeEmail(event)}></input>
                            </div>
                            <div className="from-group">
                                <label className="from-label" htmlFor="inputMatKhau">Mật khẩu</label>
                                <input className="from-input"
                                type="password"
                                value={this.state.inputMatKhau}
                                onChange={(event) => this.handleChangeMatKhau(event)}></input>
                            </div>
                            <div className="from-group">
                                <label className="from-label" htmlFor="inputNhapLaiMatKhau">Nhập lại mật khẩu</label>
                                <input className="from-input"
                                type="password"
                                value={this.state.inputNhapLaiMatKhau}
                                onChange={(event) => this.handleChangeNhapLaiMatKhau(event)}></input>
                            </div>
                            <div>
                                <input type="submit"
                                value="Đăng ký"
                                className="btn-signup"
                                onClick={() => this.handleSubmit()}></input>
                            </div>
                        </div>
                    </div>
                    <div className="signup-main2">
                        <div className="question1">Hoặc tạo tài khoản bằng:</div>
                        <div className="group-signup-social">
                            <button className="btn-signup-social">
                                <FaFacebookSquare className="icon"></FaFacebookSquare>
                            </button>
                            <button className="btn-signup-social">
                                <FaGoogle className="icon"></FaGoogle>
                            </button>
                            <button className="btn-signup-social">
                                <FaTwitter className="icon"></FaTwitter>
                            </button>
                        </div>
                        <div className="question2">Hãy đăng nhập nếu bạn đã có tài khoản</div>
                        <Link to="/login" className="link-to-login">Đăng nhập</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup