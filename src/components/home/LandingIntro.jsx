import React from "react";
import "aos/dist/aos.css";

const LandingIntro = () => {

  return (
    <section id="section-intro" className="no-top no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-sm-30">
            <div className="feature-box f-boxed style-3">
              <i className="bg-color-2 i-boxed icon_wallet" data-aos="slide-up" data-aos-delay="150"></i>
              <div className="text">
                <h4 data-aos="slide-up" data-aos-delay="0" className="">Set up your wallet</h4>
                <p data-aos="slide-up" data-aos-delay="300" >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem.
                </p>
              </div>
              <i className="wm icon_wallet"></i>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-sm-30">
            <div className="feature-box f-boxed style-3">
              <i className="bg-color-2 i-boxed icon_cloud-upload_alt" data-aos="slide-up" data-aos-delay="150"></i>
              <div className="text">
                <h4 data-aos="slide-up" data-aos-delay="0" className="">Add your NFT's</h4>
                <p data-aos="slide-up" data-aos-delay="300"> 
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem.
                </p>
              </div>
              <i className="wm icon_cloud-upload_alt"></i>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-sm-30">
            <div className="feature-box f-boxed style-3">
              <i className="bg-color-2 i-boxed icon_tags_alt" data-aos="slide-up" data-aos-delay="150"></i>
              <div className="text">
                <h4 data-aos="slide-up" data-aos-delay="0" className="">Sell your NFT's</h4>
                <p data-aos="slide-up" data-aos-delay="300">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem.
                </p>
              </div>
              <i className="wm icon_tags_alt"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingIntro;
