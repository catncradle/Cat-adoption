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
                Adopt now!
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-1-of-3">
        <div className="card">
          <div className="card-side card-side-front">
            <div className="card-picture card-picture-2">' '</div>
            <h4 className="card-heading">
              <span className="card-heading-span card-heading-span-2">
                Nabil Yafai
              </span>
            </h4>
            <div className="card-details">
              <ul>
                <li>He's handsome</li>
                <li>Only 7, much younger than Jon</li>
                <li>He's married so don't even try</li>
                <li>I mean just because there's a GoalKeeper....</li>
                <li>doesn't mean you can't score</li>
              </ul>
            </div>
          </div>
          <div className="card-side card-side-back card-side-back-2">
            <div className="card-cta">
              <div className="card-adoption">
                <div className="card-adoption-text">only</div>
                <div className="card-adoption-price">$1</div>
              </div>
              <a href="#" className="btn btn-white">
                Adopt now!
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-1-of-3">
        <div className="card">
          <div className="card-side card-side-front">
            <div className="card-picture card-picture-3">' '</div>
            <h4 className="card-heading">
              <span className="card-heading-span card-heading-span-3">
                Jessie Santos
              </span>
            </h4>
            <div className="card-details">
              <ul>
                <li>Most handsome of his cohort</li>
                <li>198 years young</li>
                <li>Has never known true love</li>
                <li>Until he met Jack</li>
                <li>A true brother</li>
              </ul>
            </div>
          </div>
          <div className="card-side card-side-back card-side-back-3">
            <div className="card-cta">
              <div className="card-adoption">
                <div className="card-adoption-text">only</div>
                <div className="card-adoption-price">$420</div>
              </div>
              <a href="#" className="btn btn-white">
                Adopted sorry!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="u-center-text u-margin-top-big">
      <a href="#" className="btn btn-green">
        SEE MOAR PETS
      </a>
    </div>
  </section>
);

export default Tours;
