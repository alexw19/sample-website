import React from "react";
import styles from "../components/Dropdown.module.css";

var $ = require("jquery");
if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});

const Responsive = {
    0: {
        items: 1.5,
        margin: 5
    },
    768: {
        items: 2.5,
        margin: 10
    },
    1024: {
        items: 3.5,
        margin: 20
    }
}

export default function Slider() {
    return (
    <OwlCarousel
    response={Responsive}
    >
            {/* <div class="owl-carousel owl-theme" id="owl-demo"> */}
            <div className={styles.item}>
                                <img src="/Group-172.png" alt="slide1"/>
                            </div>
            <div className={styles.item}>
                                <img src="/Group-173.png" alt="slide2"/>
                            </div>
            <div className={styles.item}>
                                <img src="/Group-174.png" alt="slide3"/>
                            </div>
                        {/* </div> */}
    </OwlCarousel>
        )
}