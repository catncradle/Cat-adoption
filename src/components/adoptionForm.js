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
                className="input-form"
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
                className="input-form"
                placeholder="Email address"
                id="email"
                required
              />
              <label htmlFor="email" className="form-label">
                Full Name
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default adoptionForm;
