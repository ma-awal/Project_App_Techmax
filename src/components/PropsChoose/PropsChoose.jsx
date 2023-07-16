import React from 'react';
import './choose.css';

const PropsChoose = ({ data, imageFirst }) => {
  const { img, para, heading, list } = data;
  const pChooseColor = imageFirst ? 'p-choose image-first' : 'p-choose';

  return (
    <section
      className={`py-3 py-md-4 py-lg-5   my-3 my-md-4 my-lg-5 ${pChooseColor}`}
    >
      <div className="container">
        <div className="row align-items-center justify-content-between">
          {imageFirst ? (
            <>
              <div className="col-12 col-md-6">
                <div className="s-img">
                  <img src={img} className="img-fluid" alt="img" />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="s-choose px-2">
                  <h2 className="mb-3">{heading}</h2>
                  <p className="mb-3">{para}</p>
                  <div className="row row-cols-2 justify-content-between gy-4 py-3">
                    {list.map((info, index) => {
                      const isActive = index === 0 ? 'active' : '';
                      return (
                        <div
                          className={`info   shadow ${isActive}`}
                          key={index}
                        >
                          {info.info}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="col-12 col-md-6">
                <div className="s-choose px-2">
                  <h2 className="mb-3">{heading}</h2>
                  <p className="mb-3">{para}</p>
                  <div className="row row-cols-2 justify-content-between gy-4 py-3">
                    {list.map((info, index) => {
                      const isActive = index === 0 ? 'active' : '';
                      return (
                        <div className={`info  shadow ${isActive}`} key={index}>
                          {info.info}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="s-img">
                  <img src={img} className="img-fluid" alt="img" />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default PropsChoose;
