import React, { Component } from "react";


class HeroOlive extends Component {
    render(){
        return(
            <div className={`slider-area bg-color ${this.props.horizontal} ${this.props.bgshape}`} id="home"  style={{background:'#2d3e50'}}>
                <div className="container h-100">
                    <div className="row">
                        <div className="col-lg-4 h-100">
                            <div className="banner-text">
                                <div className="banner-table-cell">
                                    <h1>ASISTENTE<span className="theme-color">APP</span> </h1>
                                    <p>Te invitamos a innovar con la forma de cómo tomar la asistencia de una manera moderna, sencilla y precisa. Utiliza AsistenciAPP</p>
                                    <div className="banner-buttons">
                                        {/*<button type="button"  className="button-default button-olive">Download</button>*/}
                                        <a className="button-default button-white" href="app-release.apk" role="button">Descargar</a>
                                        {/* <a className="button-default button-white" href="https://dw.uptodown.com/dwn/2FJv7ZlDsBnjDW7ByrVykMhSlIeQbCLR0659U7GuYefxaXXj8VXwppNbQ0w3CPdOwbMF7oegE73YN3VScBeosqY_vqB3A38h6c-gy306D1zbjotn3oimn2pLgYJywtdo/6nta0J2aPLpC566XsQ5gMINlK6UFWvD4LVNoJvMLy2Bw2E8dPBaQ4xhbWhak5vlodSd0xRjcoopFhnkd8c8v9-lJrxTyY053CS5Y29TMqOYdQk22pGmVsiy1UFtits8s/dh48zMdFVGOaU_f7QIG66L7Y0BurDmtdyTY79iASStanNtQ0vxfB1EmVfEiKj-qBp3pXpSho7YDtM_Zl6TzbVhAoF5KrJoFmnbxKd3LZw0jpqvr3ODOv2SL_ivgFlmaT/G78k5WC7OA-cUkk-jbQSvg==/" role="button">Descargar</a> */}
                                    </div>
                                </div>
                            </div>

                            <div className="banner-apps">
                                {/* Start Sinhle app */}
                                <div className="single-app">
                                    <div className="single-app-table-cell">
                                        <i className="zmdi zmdi-apple"></i>
                                        <h4>ios</h4>
                                        <h6 style={{color:'#ffff'}}>Proximamente</h6>
                                    </div>
                                </div>

                                {/* Start Sinhle app */}
                                <div className="single-app">
                                    <div className="single-app-table-cell">
                                        <i className="zmdi zmdi-cloud-download"></i>
                                        <h4>Download</h4>
                                        <h3>102K</h3>
                                    </div>
                                </div>

                                {/* Start Single app */}
                                <div className="single-app">
                                    <div className="single-app-table-cell">
                                        <i className="zmdi zmdi-android"/>
                                        <h4>Android</h4>
                                        <h3>102K</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="banner-product-image text-right">
                                <img className="image-1" style={{marginLeft:'20%'}} src={require('../assets/images/pngwing.com.png').default} alt="App Landing"/>
                                <img className="image-2" src={require('../assets/images/app/banner-mobile-2.png').default} alt="App Landing"/>
                                <img className="image-3" src={require('../assets/images/app/banner-mobile-3.png').default} alt="App Landing"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HeroOlive;








