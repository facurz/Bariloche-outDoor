import React from 'react'
import LogoInstangram from '../../images/instagram.png'
import LogoMail from '../../images/gmail.png'
import LogoWhatsapp from '../../images/whatsapp.png'
import './Footer.scss'


export const Footer = () => {
    return (
        <footer id="footer">
            <div className="text-center pt-3 pb-2 bg-dark text-white-50">
                <a href=" " className="pe-4"><img src={LogoInstangram} alt="instagram" className="img-fluid" width="35"/></a>
                <a href=" " className="pe-4"><img src={LogoMail} alt="mail" className="img-fluid" width="35"/></a>
                <a href=" "><img src={LogoWhatsapp} alt="whatsapp" className="img-fluid" width="35"/></a>
                <p className="pt-3">Francisco de Biedma 125, R8400 San Carlos de Bariloche, Río Negro</p>
                <p>© 2021 Copyright: Bariloche Outdoor.</p>
            </div>
         </footer >
    )
}
