import React, { Fragment, useState } from "react";
import "./style.css"
import { FaSwimmingPool, FaSwimmer, FaTaxi, FaCoffee, FaGlassMartini } from "react-icons/fa";

const Component2: React.FC = () => {

    const [infos, setInfos] = useState([
        {id: '1', title: <FaSwimmingPool/>, info: 'Có hồ bơi riêng'},
        {id: '2', title: <FaSwimmer/>, info:'Bơi ngoài biển thoải mái'},
        {id: '3', title: <FaTaxi/>, info:'Chỗ đậu xe miễn phí'},
        {id: '4', title: <FaCoffee/>, info:'Nhiều tiệm cà phê ngon'},
        {id: '5', title: <FaGlassMartini/>, info:'Nhiều cửa hàng rượu chất lượng'}
    ]);

    return(
        <Fragment>
            <div className="h3 text-dark"><span className="color-red">Nơi </span>này có những gì cho bạn</div>
            <div className="row">
                <div className="col-6">
                    <div className="mt-3">
                        <FaSwimmingPool className="icon-cpn2 mr-3"/>
                        <span>Có hồ bơi riêng</span>
                    </div>
                    <div className="mt-3">
                        <FaSwimmer className="icon-cpn2 mr-3"/>
                        <span>Bơi ngoài biển thoải mái</span>
                    </div>
                    <div className="mt-3">
                        <FaTaxi className="icon-cpn2 mr-3"/>
                        <span>Chỗ đậu xe miễn phí</span>
                    </div>
                </div>
                <div className="col-6">
                    <div className="mt-3">
                        <FaCoffee className="icon-cpn2 mr-3"/>
                        <span>Nhiều tiệm cà phê ngon</span>
                    </div>
                    <div className="mt-3">
                        <FaGlassMartini className="icon-cpn2 mr-3"/>
                        <span>Nhiều cửa hàng rượu chất lượng</span>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Component2