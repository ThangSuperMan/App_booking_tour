import React from "react";
import "./service.scss"

class Service extends React.Component{

    render() {
        return(
            <div className="">
                <div className="service mt-5">
                    <hr></hr>
                    <div className="h2 mt-5">
                        Dịch vụ đối tác
                    </div>
                    <div className="row container mt-3">
                        <div className="col-sm-4 h3 list-service">
                            Hãng máy bay
                            <ul className="list-service-childer h5 mt-3">
                                <li className="mt-2"><a className="link" href="https://www.vietnamairlines.com/vn/vi/Home">Vietnam Airlines</a></li>
                                <li className="mt-2"><a className="link" href="https://www.bambooairways.com/vn-vi/?gclid=Cj0KCQjwxYOiBhC9ARIsANiEIfaBeQ6erqC7Fp4xsMg6nxSg57skRr1LJ_L6NBRqKbAP9C_s0K6b6OIaArIoEALw_wcB">BamBoo</a></li>
                                <li className="mt-2"><a className="link" href="https://www.vietjetair.com/vi/?utm_source=google-vj-vi&utm_medium=cpc&utm_campaign=ada_awoq22023_kw_rsa_1122awo_brand_name_awoq22023_cpa&gad=1&gclid=Cj0KCQjwxYOiBhC9ARIsANiEIfZxRv6Je0logbPgmOHhxLY4QUWkgvbydF79nZ7DOwXS7BVkrR77dcwaAvaAEALw_wcB">VietJetAir</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-4 h3 list-service">
                            Khách sạn
                            <ul className="list-service-childer h5 mt-3">
                                <li className="mt-2"><a className="link" href="https://vn.vinpearllandmark81hotel.com/?gclid=Cj0KCQjwxYOiBhC9ARIsANiEIfbIsXbCP3TPt-QJ7NgwbV2-zQw0BV_PInKLPcuwpbXCpGzcgJ73oBMaAlElEALw_wcB">Mường Thanh Luxury Sài Gòn</a></li>
                                <li className="mt-2"><a className="link" href="https://www.lottehotel.com/saigon-hotel/vi.html?utm_source=google&utm_medium=cpc&utm_campaign=lottehotel|saigon|globallocal|alwayson|pc|promotion|vietnam|vietnamese&utm_content=generic|none|none&utm_term=&gad=1&gclid=Cj0KCQjwxYOiBhC9ARIsANiEIfau5Wlknhz1fm1ni_7duUi36351QGznxq-TWjaIA0WVmiLKNyPRLcwaAprkEALw_wcB">Lotte Hotels</a></li>
                                <li className="mt-2"><a className="link" href="https://www.intercontinental.com/hotels/gb/en/find-hotels/hotel/list?fromRedirect=true&qSrt=sBR&qIta=99617302&icdv=99617302&qDest=Hanoi,%20Vietnam&setPMCookies=true&dp=true&gclid=Cj0KCQjwxYOiBhC9ARIsANiEIfZxrgU6WBRShk_J7Jq25kKX98BfRpF-NCFhKJWnK9WrpyW5X5Cb7MEaAozFEALw_wcB&cm_mmc=PDSEA-_-G_F-SEAK_FS-SEA_H-SEAK_HS-VNM_IC_NBI_EXM_HOTEL-HANHB&srb_u=1">Intercontinental</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-4 h3 list-service">
                            Nhà hàng
                            <ul className="list-service-childer h5 mt-3">
                                <li className="mt-2"><a className="link" href="https://legiaseafood.com/">Lê Gia Đà Nẵng</a></li>
                                <li className="mt-2"><a className="link" href="https://www.saigon.park.hyattrestaurants.com/vn/Square-one.html/?utm_source=Square.one.vn&utm_medium=SEM&utm_campaign=bsd&utm_term=cpc&utm_content=Vietnam">Square One</a></li>
                                <li className="mt-2"><a className="link" href="https://gubistronomy.com/nha-hang-fine-dining/?gclid=Cj0KCQjwxYOiBhC9ARIsANiEIfaV5ut0lxvCnH8vXt0bx7RwS7z7w_tXE4tRFeu8P7Zm2OAb6kxs0DgaAvg0EALw_wcB">Fine Dining</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Service