import React from "react"
import "./style.scss"
import { Link } from "react-router-dom"

class Login extends React.Component {
  state = {}

  render() {
    return (
      <div className="login-signup-page">
        <div className="login-page">
          <div className="login-main">
            <div className="login-title">Đăng Nhập</div>
            <div className="frame-login">
              <div className="from-group">
                <label className="from-label">Tên đăng nhập hoặc Email</label>
                <input className="from-input" type="text"></input>
              </div>
              <div className="from-group">
                <label className="from-label">Mật khẩu</label>
                <input className="from-input" type="password"></input>
              </div>
              <div>
                <input
                  type="submit"
                  value="Bạn quên mật khẩu?"
                  className="btn-forget-password"
                ></input>
              </div>
              <div>
                <input
                  type="submit"
                  value="Đăng nhập"
                  className="btn-login"
                ></input>
              </div>
            </div>
          </div>
          <div className="login-main2">
            <div className="question1">Hoặc đăng nhập bằng:</div>
            <div className="group-login-social">
              <button className="btn-login-social">
                <i className="fa-brands fa-facebook fa-2xl"></i>
              </button>
              <button className="btn-login-social">
                <i className="fa-brands fa-google fa-2xl"></i>
              </button>
              <button className="btn-login-social">
                <i className="fa-brands fa-twitter fa-2xl"></i>
              </button>
            </div>
            <div className="question2">Bạn chưa có tài khoản? Hãy đăng ký</div>
            <Link to="/signup" className="link-to-signup">
              Đăng ký
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
