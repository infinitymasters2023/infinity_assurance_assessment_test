import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import { useRouter } from 'next/router';


const HomePage = () => {
  const route = useRouter(); // For routing on button click

  return (
    <div className="homepage-container d-flex flex-column justify-content-center align-items-center text-center">
      <div className="welcome-text">
  Welcome to <span className="highlight">Infinity Assurance Solution</span> Assessment
</div>
      <MDBBtn color="light" className="start-button mt-4 px-5 py-3 fs-5" onClick={() => route.push('/registration')}>
        Start Now
      </MDBBtn>

      <style jsx>{`
  .homepage-container {
    height: 100vh;
    width: 100%;
    background: linear-gradient(to right, #1f005c, #5b0060, #870160, #ac255e, #ca485c, #e16b5c);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    text-align: center;
    padding: 0 20px;
  }

  .welcome-text {
    font-size: 1.8rem;
    font-weight: 600;
    animation: fadeInUp 2s ease-in-out;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
  }

  .highlight {
    color: #ffcc70;
    text-shadow: 0 0 10px rgba(255, 204, 112, 0.7);
  }

  @keyframes fadeInUp {
    from {
      transform: translateY(30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`}</style>

    </div>
  );
};

export default HomePage;
