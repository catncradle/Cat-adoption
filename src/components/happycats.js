import React from 'react';

const happycats = () => (
  <section className="section-stories">
    <div className="bg-video">
      <video className="bg-video-content" autoPlay muted loop>
        <source
          src={require('/Users/jackjack/Desktop/tours/src/img/Pesach.mp4')}
          type="video/mp4"
        />
        <source
          src={require('/Users/jackjack/Desktop/tours/src/img/Pesach.webm')}
          type="video/mp4"
        />
        use google chrome noob
      </video>
    </div>

    <div className="u-center-text u-margin-bottom-big">
      <h2 className="heading-secondary">cats are the best</h2>{' '}
    </div>

    <div className="row">
      <div className="story">
        <figure className="story-shape">
          <img
            src={require('/Users/jackjack/Desktop/tours/src/img/catpic-6.jpeg')}
            className="story-img"
            alt="something"
          />
          <figcaption className="story-caption">Crazy Cat</figcaption>
        </figure>
        <div className="story-text">
          <h3 className="heading-tertiary u-margin-bottom-small">
            I am the worst
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam qui
            quo ad expedita inventore eaque molestiae dolorum eius odio dolor
            aspernatur quas laudantium libero et ab, atque ipsa. Reprehenderit,
            tenetur?
          </p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="story">
        <figure className="story-shape">
          <img
            src={require('/Users/jackjack/Desktop/tours/src/img/catface2.jpg')}
            className="story-img"
            alt="something"
          />
          <figcaption className="story-caption">BLERGH</figcaption>
        </figure>
        <div className="story-text">
          <h3 className="heading-tertiary u-margin-bottom-small">
            THIS ONE IS NOT SO BAD
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam qui
            quo ad expedita inventore eaque molestiae dolorum eius odio dolor
            aspernatur quas laudantium libero et ab, atque ipsa. Reprehenderit,
            tenetur?
          </p>
        </div>
      </div>
    </div>
    <div className="u-center-text u-margin-top-huge">
      <a href="#" className="btn-text">
        check out all the cats
      </a>
    </div>
  </section>
);

export default happycats;
