import React from "react";
import { Navbar } from "../Home/components";
import "./denytour.scss"

class DenyTour extends React.Component {

    handleClickDenyTour = () => {
        alert(`Bạn đã hủy thành công!`)
    }

    render() {
        return(
            <div className="page-denytour">
                <Navbar></Navbar>
                <div className="title">
                        Hủy tour du lịch
                </div>
                <div className="main-denytour">
                    <div className="frame-info">
                        <label className="label">Tên tour:</label>
                        <input className="input" type="text"></input>
                    </div>
                    <div className="frame-info">
                        <label className="label">Hướng dẫn viên:</label>
                        <input className="input" type="text"></input>
                    </div>
                    <div className="frame-info">
                        <label className="label">Mã tour:</label>
                        <input className="input" type="text"></input>
                    </div>
                    <div className="frame-info">
                        <input className="input-checkbox" type="checkbox"></input>
                        <label className="label-checkbox">Chấp nhận</label>
                    </div>
                    <div className="frame-btn-deny">
                        <button className="btn-deny" onClick={() => this.handleClickDenyTour()}>
                            Hủy tour
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default DenyTour
