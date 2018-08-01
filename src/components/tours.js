import React from 'react';

const Tours = () => (
  <section className="section-tours">
    <div className="u-center-text u-margin-bottom-big">
      <h2 className="heading-secondary">Super stars!</h2>
    </div>
    <div className="row">
      <div className="col-1-of-3">
        <div className="card">
          <div className="card-side card-side-front">
            <div className="card-picture card-picture-1">' '</div>
            <h4 className="card-heading">
              <span className="card-heading-span card-heading-span-1">
                Jon Rosado
              </span>
            </h4>
            <div className="card-details">
              <ul>
                <li>He's cute</li>
                <li>45 Years old</li>
                <li>Has been adopted ten times</li>
                <li>Don't let that discourage you</li>
                <li>Secretly a JSON object</li>
              </ul>
            </div>
          </div>
          <div className="card-side card-side-back card-side-back-1">
            <div className="card-cta">
              <div className="card-adoption">
                <div className="card-adoption-text">only</div>
                <div className="card-adoption-price">$69</div>
              </div>
              <a href="#" className="btn btn-white">
                yerp
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-1-of-3">Col 1 of 3</div>
      <div className="col-1-of-3">Col 1 of 3</div>
    </div>
  </section>
);

export default Tours;
