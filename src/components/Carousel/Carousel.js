import React, {Component} from "react";

import styles from "./Carousel.module.css";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick"

const photos = [
    {
        name: "photo 1",
        url: "https://images.unsplash.com/photo-1617170732045-80343ab14eaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNjZW5lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=300&q=40&h=120"
    },
    {
        name: "photo 1",
        url: "https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHNjZW5lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=300&q=40&h=120"
    },
    {
        name: "photo 1",
        url: "https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNjZW5lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=300&q=40&h=120"
    },
]

class carousel extends Component {
    render() {
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            arrows: true,
            slidesToScroll: 1,
        }
        return (
            <div className={styles.container}>
                <Slider {...settings} className={styles.slides}>
                    {photos.map((photo) => {
                        return (
                            <div>
                                <img src={photo.url} alt={photo.name} width="100%" />
                            </div>
                        )
                    })}
                    </Slider>
            </div>
        )
    }
};

export default carousel;