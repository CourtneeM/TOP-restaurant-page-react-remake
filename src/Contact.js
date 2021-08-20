import React from 'react';
import Header from './components/Header';

const Contact = () => {
  return (
    <>
      <Header />
      <div className='contact-container'>
        <h2>Contact</h2>
        <div className='contact-information'>
          <h3>Reach Us At</h3>
          <p>Samantha's Snowcones</p>
          <p>5478 South Bend Street</p>
          <p>Leakyville, TN</p>
        </div>
        <div className='questions-message'>
          <h3>Questions or Comments?</h3>
          <p>Call us at <span className='phone-number'>1-234-567-8910</span> or fill out the form below to contact us.</p>
        </div>
        <div className='contact-form'>
          <form>
            <h3>Contact Us</h3>
            <label>
              Name
              <input type="text" />
            </label>
            <label>
              Email
              <input type="email" />
            </label>
            <label>
              Message
              <textarea cols="25" rows="8"></textarea>
            </label>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
