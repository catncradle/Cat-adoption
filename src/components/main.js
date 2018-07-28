import React from 'react';

const Main = () => (
  <section className="section-about">
    <div className="u-center-text u-margin-bottom-big">
      <h2 className="heading-secondary">Exciting pets to adopt!</h2>
    </div>
    <div className="row">
      <div className="col-1-of-2">
        <h3 className="heading-tertiary u-margin-bottom-small">
          Our cats are the best
        </h3>
        <p className="paragraph">
          They're super cute, just look at them, they're so amazing
        </p>
        <h3 className="heading-tertiary u-margin-bottom-small">
          The cat you saw above is called Spark Plug
        </h3>
        <p className="paragraph">He's the best, he's such a lover</p>
        <a href="#" className="btn-text">
          Learn More! &rarr;
        </a>
      </div>
      <div className="col-1-of-2">
        <div className="composition">
          <img
            src={require('/Users/jackjack/Desktop/tours/src/img/15832671_large1300.jpg')}
            alt="photo 1"
            className="composition-photo composition-photo-p1"
          />
          <img
            src={require('/Users/jackjack/Desktop/tours/src/img/8ym5gwrs-1401687940.jpg')}
            alt="photo 2"
            className="composition-photo composition-photo-p2"
          />
          <img
            src={require('/Users/jackjack/Desktop/tours/src/img/4-ways-cheer-up-depressed-cat.jpg')}
            alt="photo 3"
            className="composition-photo composition-photo-p3"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Main;
