import React from 'react'
import Rajesh from "../../assets/Home/Testimony/Rajesh K.png"
import Meera from "../../assets/Home/Testimony/Meera S.png"

function Testimony() {
    return (
        <div className='home-section'>
            <div className="home-section-heading">
                <h2>What Our  <span>Clients Say</span></h2>
                <p>Delivering tailored industrial solutions with innovation, expertise, and a commitment to excellence</p>
            </div>
            <div className='testimony'>
                <div className='testimony-card'>
                    <section>
                        <p>Fourstor Solutions transformed our production line with their innovative automation services.</p>
                        <div className='testimony-line'></div>
                    </section>
                    <div className='testimony-info'>
                        <img src={Rajesh} />
                        <section>
                            <h3>Rajesh K</h3>
                            <p>Manufacturing Head</p>
                        </section>
                    </div>
                </div>
                <div className='testimony-card'>
                    <section>
                        <p>Their 3D printing expertise helped us prototype quickly and efficiently.</p>
                        <div className='testimony-line'></div>
                    </section>
                    <div className='testimony-info'>
                        <img src={Meera} />
                        <section>
                            <h3>Meera S</h3>
                            <p>Product Manager</p>
                        </section>
                    </div>
                </div>
                <div className='testimony-card'>
                    <section>
                        <p>Fourstor Solutions transformed our production line with their innovative automation services.</p>
                        <div className='testimony-line'></div>
                    </section>
                    <div className='testimony-info'>
                        <img src={Rajesh} />
                        <section>
                            <h3>Rajesh K</h3>
                            <p>Manufacturing Head</p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimony