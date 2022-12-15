import React , { Component } from "react";
class Footer extends Component {
    render(){
        return(
            <div>
                <div className={`footer-area ${this.props.horizontal}`} id="support">
                    <div className="footer-bg"/>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--40" style={{marginTop:"30px"}}>
                                    <h2 className="text-white">Contacta <span className="theme-color"> con nosotros</span></h2>
                                    <img className="image-1" src={require('../assets/images/app/title-icon.png').default} alt="App Landing"/>
                                    <img className="image-2" src={require('../assets/images/app/title-icon-2.png').default} alt="App Landing"/>
                                    <img className="image-3" src={require('../assets/images/app/title-icon-3.png').default} alt="App Landing"/>
                                    <p className="text-white">There are many variations of passages of Lorem Ipsum available, but the majorityhave suffered alteration in some form, by injected humour,available</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-5 col-xl-4 offset-xl-1">
                                <div className="contact-inner">
                                    <h3 className="title">Saludanos</h3>
                                    <form className="contact-form" action="/">
                                        <div className="input-box">
                                            <input type="text" placeholder="Nombre"/>
                                        </div>

                                        <div className="input-box">
                                            <input type="text" placeholder="Correo"/>
                                        </div>

                                        <div className="input-box">
                                            <textarea placeholder="Mensaje"></textarea>
                                        </div>

                                        <div className="input-box">
                                            <button className="submite-button" type="submit">Enviar</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-5 offset-lg-2 col-xl-4 offset-xl-2 mt_md--40 mt_sm--40">
                                <div className="contact-inner">
                                    <h3 className="title">Contáctanos</h3>
                                    <div className="conatct-info">
                                        <div className="single-contact-info">
                                            <div className="contact-icon">
                                                <i className="zmdi zmdi-phone"></i>
                                            </div>
                                            <div className="contact-text">
                                                <span>+569 710 81 496<br />
                                                +56 9 5783 1315<br/>
                                                +56 9 7573 5786</span>
                                            </div>
                                        </div>
                                        <div className="single-contact-info">
                                            <div className="contact-icon">
                                                <i className="zmdi zmdi-globe-alt"></i>
                                            </div>
                                            <div className="contact-text">
                                                <span>mailto:f.gonzalez2@duocuc.cl<br />
                                               </span>
                                            </div>
                                        </div>
                                        <div className="single-contact-info">
                                            <div className="contact-icon">
                                                <i className="zmdi zmdi-pin"></i>
                                            </div>
                                            <div className="contact-text">
                                                <span><br /> Avenida siempre viva 2202</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
                                <div className="newsletter text-center">
                                    <h3 className="text-white title">Suscríbete a nuestras noticias</h3>
                                    <p className="text-white">TAquí encontraras neuvas novedades de la aplicación<br />
                                       solo inscribe tu correo para recibir nuevas noticias</p>
                                    <form action="/" method="post" id="newsletter">
                                        <div className="newsletter-content">
                                            <input type="text" name="email" placeholder="Tipea tu correo" />
                                            <button type="submit" className="button"><span>Subscribir!</span></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 col-xl-4 offset-xl-4">
                                <div className="footer-links text-center">
                                    <a href="/"><i className="zmdi zmdi-facebook"></i></a>
                                    <a href="/"><i className="zmdi zmdi-twitter"></i></a>
                                    <a href="/"><i className="zmdi zmdi-google"></i></a>
                                    <a href="/"><i className="zmdi zmdi-linkedin"></i></a>
                                    <a href="/"><i className="zmdi zmdi-pinterest"></i></a>
                                    <a href="/"><i className="zmdi zmdi-youtube"></i></a>
                                </div>
                                <div className="footer-text text-center">
                                    <span>Copyright © {new Date().getFullYear()} <a href="https://hasthemes.com">Pibes Chorros</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tap-top">
                    <div>
                        <i className="zmdi zmdi-long-arrow-up"></i>
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer







