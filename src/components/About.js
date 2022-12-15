import React ,  { Component } from "react";

class About extends Component{
    render(){
        return(
            <div className={`app-about ${this.props.horizontalabout}`}  id="about">
                <div className="container" style={{    marginBottom: '140px'}}>
                    {/*<div className="row">*/}
                    {/*    <div className="col-lg-12">*/}
                    {/*        <div className="section-title text-center mb--40">*/}
                    {/*            <h2>TECNOLOGIA <span className="theme-color">QR</span></h2>*/}
                    {/*            /!*<img className="image-1" src={require('../assets/images/app/title-icon.png').default} alt="App Landing"/>*!/*/}
                    {/*            /!*<img className="image-2" src={require('../assets/images/app/title-icon-2.png').default} alt="App Landing"/>*!/*/}
                    {/*            /!*<img className="image-3" src={require('../assets/images/app/title-icon-3.png').default} alt="App Landing"/>*!/*/}

                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className="row align-items-center">
                        <div className="col-lg-5 offset-lg-1 mt--40">
                            <div className="about-thumbnail mr--35">
                                <img className="image-1" src={require('../assets/images/instruccionqr.jpg').default} alt="App Landing"/>

                            </div>
                        </div>
                        <div className="col-lg-6 mt--40">
                            <div className="about-content">
                                <h2 className="title">TECNOLOGIA <span className="theme-color">QR</span></h2>
                                <p>Presiona el codigo boton Registrar asitencia y escanea el codigo qr con tu camara.
                                    Cuando enfoques el QR y lo escanees, aparecera un mensaje en pantalla de que estas presente en la asignatura</p>
                                <div className="about-buttons">
                                    <button type="button" className="button-default button-olive button-border">Download</button>
                                    {/*<a className="button-default button-border" href="/" role="button">Learn more</a>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;











