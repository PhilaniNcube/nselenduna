import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Wrapper = styled.section`
  width: 100%;
  height: 70vh;
  margin: 7rem auto;

  .container {
    height: 100%;
    display: grid;
    grid-template-columns: 2fr 3fr;

    .imgBox {
      width: 100%;
      height: 70vh;

      div {
        width: 100%;
        height: 70vh;

        img {
          height: 100%;
          object-fit: cover;
        }
      }
    }

    .textBox {
      padding: 3rem;

      small {
        font-size: 1.4rem;
      }

      p {
        margin-bottom: 3rem;
      }

      article {
        font-size: 1.6rem;
      }
    }
  }
`;

const SectionOne = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="imgBox">
          <Image src="/images/lion.jpg" width={640} height={958} alt="lion" />
        </div>
        <div className="textBox">
          <small>Focus</small>
          <h2 className="section-title">Tourism Management</h2>
          <p className="subheading">Sustainable Tourism Development</p>
          <article>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
            ipsa! Neque libero natus asperiores ad unde? Fugit veritatis nemo
            quas consectetur temporibus ratione vero inventore!
          </article>
        </div>
      </div>
    </Wrapper>
  );
};

export default SectionOne;
