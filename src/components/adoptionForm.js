import React from 'react';

const adoptionForm = () => (
  <section className="section-book">
    <div className="row">
      <div className="book">
        <div className="book-form">
          <form action="#" className="form">
            <div className="u-center-text u-margin-bottom-medium">
              <h2 className="heading-secondary">Adopt Now!</h2>
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-input"
                placeholder="Full Name"
                id="name"
                required
              />
              {/* label htmlFor references the label*/}
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-input"
                placeholder="Email address"
                id="email"
                required
              />
              <label htmlFor="email" className="form-label">
                Email address
              </label>
            </div>

            <div className="form-radio-group">
              <input
                type="radio"
                className="form-radio-input"
                id="small"
                name="size"
              />
              <label htmlFor="small" className="form-radio-label">
                <span className="form-radio-button" />
                Small Cats
              </label>
            </div>

            <div className="form-radio-group">
              <div className="form-radio-group">
                <input
                  type="radio"
                  className="form-radio-input"
                  id="large"
                  name="size"
                />
                <label htmlFor="large" className="form-radio-label">
                  <span className="form-radio-button" />
                  Large Cats
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default adoptionForm;
