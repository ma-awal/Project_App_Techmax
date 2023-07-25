import React, { useState, useEffect } from 'react';
import './count.css';
const data = [
  { title: 'Year of Experience', initialValue: 0, targetValue: 23 },
  { title: 'Complete Projects', initialValue: 0, targetValue: 500 },
  { title: 'Employees', initialValue: 0, targetValue: 100 },
  { title: '5 Start Ratings', initialValue: 0, targetValue: 300 },
];

const AboutCount = () => {
  const [values, setValues] = useState(data);

  useEffect(() => {
    const interval = setInterval(() => {
      setValues((prevValues) =>
        prevValues.map((item) => {
          const increment = Math.ceil(item.targetValue / 20); // Increase per step to reach target in 2 seconds
          const newValue = item.initialValue + increment;
          return {
            ...item,
            initialValue:
              newValue > item.targetValue ? item.targetValue : newValue,
          };
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="count d-flex align-items-center py-2 py-md-4 py-lg-5  ">
      <div className="container py-2 py-md-4 py-lg-5">
        <div className="row  ">
          {values.map((item, index) => (
            <div className="col-6 col-lg-3 text-center" key={index}>
              <h1>{item.initialValue}</h1>
              <h6>{item.title}</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCount;
