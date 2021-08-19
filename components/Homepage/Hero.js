import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.main`
  width: 100%;
  min-height: 90vh;
  background-image: url('/images/baobab.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  .container {
    height: 90vh;
    display: flex;
    color: var(--white);
    display: flex;
    align-items: center;

    .text {
      height: 100%;
      display: flex;
      justify-content: flex-end;
      flex-direction: column;
      padding-bottom: 5%;

      h1 {
        color: var(--white);
      }

      p {
        max-width: 50ch;
        margin-top: 1rem;
        padding-left: 1.5rem;
        border-left: 2px solid var(--red);
      }
    }
  }
`;

const Hero = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="text">
          <h1 className="title">
            Environmental Protection & <br></br>
            <strong>Tourism Consultancy</strong>
          </h1>
          <p className="subheading">
            Specializing in protected area management, tourism planning services
            and advisory services on environmental activities.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;
