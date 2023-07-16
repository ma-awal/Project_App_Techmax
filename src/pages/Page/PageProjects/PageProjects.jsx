import React, { useState } from 'react';
import PropCard from '../../../components/PropCard/PropCard';
import img from '../../../assets/page-title-bg-3.jpg';
import ProjectsData from '../../../data/ProjectsData';
import ProjectsCard from '../../../components/ProjectsCard/ProjectsCard';
import './p-projects.css';

const PageProjects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  // Calculate pagination
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = ProjectsData.slice(indexOfFirstCard, indexOfLastCard);
  const totalPages = Math.ceil(ProjectsData.length / cardsPerPage);

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  return (
    <main>
      <PropCard name={'Projects'} link={'Home'} img={img} />

      <section className="p-projects py-3 py-md-4 py-lg-5 my-2 my-md-4  ">
        <div className="container">
          <div className="row">
            {currentCards.map((card) => (
              <ProjectsCard key={card.id} data={card} />
            ))}
          </div>
          <div className="pagination d-flex  justify-content-center gap-1 align-items-center mt-3 mt-lg-4">
            <button
              disabled={currentPage === 1}
              onClick={goToPreviousPage}
              className="pagination-button btn border fw-bold"
            >
              &lt;
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index + 1)}
                className={`pagination-button btn ${
                  currentPage === index + 1 ? 'active btn border' : ''
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              disabled={currentPage === totalPages}
              onClick={goToNextPage}
              className="pagination-button btn border fw-bold"
            >
              &gt;
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PageProjects;
