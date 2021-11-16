import React from 'react'
import{Carousel} from 'react-bootstrap'
import './Carrusel.scss'
import Img01 from '../../images/img_carrusel1.webp'
import Img02 from '../../images/img_carrusel2.webp'
import Img03 from '../../images/img_carrusel3.webp'

export const Carrusel = () => {
    return (
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Img01}
              alt="First slide"
            />
          </Carousel.Item>
          
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Img02}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Img03}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
    )
}

