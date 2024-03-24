import React from 'react';
import PropCard from '../../components/PropCard/PropCard';
import img from '../../assets/banner.png';
import ContactForm from '../../components/ContactFrom/ContactForm';
import './contact.css';

const Contact = () => {
  return (
    <main>
      <PropCard name={'Contact'} link={'Home'} img={img} />
      <section className="contact py-3 py-md-4 py-lg-5 my-2 my-md-4 my-lg-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3 col-lg-4">
              <div className="info   shadow rounded">
                <ul className="list-unstyled">
                  <li>
                    <h6>Addres</h6>
                    <p>
                      4035 Heavens,
                      <br />
                      Los Angeles, California
                    </p>
                  </li>
                  <li>
                    <h6>Phone :</h6>
                    <p>++0453455356</p>
                    <p>++0034353243</p>
                  </li>
                  <li>
                    <h6>Email :</h6>
                    <p>info@example.com</p>
                    <p>support@example.com</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-9 col-lg-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
