import React from "react";
import Siemens from "../../assets/Home/Testimony/Siemens.png"
import Schneider from "../../assets/Home/Testimony/Schneider.png"
import Duroflex from "../../assets/Home/Testimony/Duroflex.png"
import BEL from "../../assets/Home/Testimony/BEL.png"

function Testimony() {
  return (
    <div className="home-section">
      <div className="home-section-heading">
        <h2>
          What Our <span>Clients Say</span>
        </h2>
        <p>
          Delivering tailored industrial solutions with innovation, expertise,
          and a commitment to excellence
        </p>
      </div>
      <div className="testimony">
        <div className="testimony-card">
          <section>
            <p>
              We approached Fourstor Solutions for their 3D printing expertise,
              and they delivered exceptional prototypes that met our precise
              specifications. Their team’s professionalism and attention to
              detail have been impressive.
            </p>
            <div className="testimony-line"></div>
          </section>
          <div className="testimony-info">
            <img src={Siemens} />
            <section>
              <h3>Siemens Healthcare</h3>
              {/* <p>Manufacturing Head</p> */}
            </section>
          </div>
        </div>
        <div className="testimony-card">
          <section>
            <p>
              Fourstor Solutions helped us with renewable energy solutions for
              one of our key projects. Their on-grid solar systems were
              efficient and seamlessly integrated into our operations. A
              dependable team to work with.
            </p>
            <div className="testimony-line"></div>
          </section>
          <div className="testimony-info">
            <img src={Schneider} />
            <section>
              <h3>Schneider Electric</h3>
              {/* <p>Product Manager</p> */}
            </section>
          </div>
        </div>
        <div className="testimony-card">
          <section>
            <p>
              Fourstor provided tailored automation solutions for our production
              line. The improvements in efficiency and reduced downtime were
              remarkable. Their hands-on support throughout the process was
              invaluable.
            </p>
            <div className="testimony-line"></div>
          </section>
          <div className="testimony-info">
            <img src={Duroflex} />
            <section>
              <h3>Duroflex</h3>
              {/* <p>Manufacturing Head</p> */}
            </section>
          </div>
        </div>
        <div className="testimony-card">
          <section>
            <p>
              We partnered with Fourstor for pneumatic systems in our assembly
              units. Their expertise and timely delivery ensured our systems ran
              smoothly. A truly customer-focused company.
            </p>
            <div className="testimony-line"></div>
          </section>
          <div className="testimony-info">
            <img src={BEL} />
            <section>
              <h3>Bharath Electronics</h3>
              {/* <p>Manufacturing Head</p> */}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimony;
