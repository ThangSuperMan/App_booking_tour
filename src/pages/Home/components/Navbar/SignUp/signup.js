import React from "react"
import "./signup.scss"
import { Link } from "react-router-dom"

class Signup extends React.Component {
  state = {}

  render() {
    return (
      <div className="signup-signup-page">
        <div className="signup-page">
          <div className="signup-main">
            <div className="signup-title">Đăng ký</div>
            <div className="frame-signup">
              <div className="from-group">
                <label className="from-label">Tên đăng nhập</label>
                <input className="from-input" type="text"></input>
              </div>
              <div className="from-group">
                <label className="from-label">Email</label>
                <input className="from-input" type="email"></input>
              </div>
              <div className="from-group">
                <label className="from-label">Mật khẩu</label>
                <input className="from-input" type="password"></input>
              </div>
              <div className="from-group">
                <label className="from-label">Nhập lại mật khẩu</label>
                <input className="from-input" type="password"></input>
              </div>
              <div>
                <input
                  type="submit"
                  value="Đăng ký"
                  className="btn-signup"
                ></input>
              </div>
            </div>
          </div>
          <div className="signup-main2">
            <div className="question1">Hoặc tạo tài khoản bằng:</div>
            <div className="group-signup-social">
              <button className="btn-signup-social">
                <i class="fa-brands fa-facebook fa-2xl"></i>
              </button>
              <button className="btn-signup-social">
                <i class="fa-brands fa-google fa-2xl"></i>
              </button>
              <button className="btn-signup-social">
                <i class="fa-brands fa-twitter fa-2xl"></i>
              </button>
            </div>
            <div className="question2">
              Hãy đăng nhập nếu bạn đã có tài khoản
            </div>
            <Link to="/login" className="link-to-login">
              Đăng nhập
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Signup
