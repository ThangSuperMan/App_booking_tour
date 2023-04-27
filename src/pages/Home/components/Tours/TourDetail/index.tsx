import React, { Fragment } from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer/footer";
import TitleTourdetail from "./Components/title";
import DetailTourdetail from "./Components/detail";

const TourDetail: React.FC = () => {

        return(
            <Fragment>
                <Navbar></Navbar>
                <TitleTourdetail></TitleTourdetail>
                <DetailTourdetail></DetailTourdetail>
                <Footer></Footer>
            </Fragment>
        )
    
}

export default TourDetail