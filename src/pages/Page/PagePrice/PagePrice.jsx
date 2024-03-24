import React from 'react';
import './p-price.css';
import PropPrice from '../../../components/PropPrice/PropPrice';
import PriceData from '../../../data/PriceData';
import PropCard from '../../../components/PropCard/PropCard';
import img from '../../../assets/banner.png';

const PagePrice = () => {
  return (
    <section className="p-price  ">
      <PropCard name={'Price'} link={'Home'} img={img} />
      <div className="container  py-3 py-md-4 py-lg-5">
        <div className="row py-3 py-md-4 py-lg-5">
          {PriceData.map((item) => {
            return (
              <div className="col-12 col-md-6 col-lg-4" key={item.id}>
                <PropPrice data={item} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PagePrice;
