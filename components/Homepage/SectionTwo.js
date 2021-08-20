import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  margin: 7rem auto;

  .container {
    height: 100%;

    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 25px;
    grid-row-gap: 10px;
  }

  .imgBox {
    grid-area: 1 / 1 / 4 / 3;
    height: 100%;

    > div {
      height: 77.5%;
    }

    .text {
      height: 10rem;
    }
  }

  .headingBox {
    grid-area: 1 / 3 / 2 / 7;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .link {
      color: var(--red);
      font-size: 1.5rem;
      margin-top: 1rem;

      &:hover {
        color: var(--brown);
      }
    }
  }
  .imgGrid {
    grid-area: 2 / 3 / 4 / 7;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 25px;

    > div {
      height: 100%;

      .text {
        height: 10rem;
      }

      > div {
        height: 66%;
        width: 100%;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }

  .text {
    height: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 3rem;

    small {
      color: var(--red);
      margin-bottom: 2rem;
      font-size: 1.4rem;
    }

    h3 {
      font-weight: 300;
      line-height: 1.4;
      font-size: 1.6rem;
    }
  }
`;

const SectionTwo = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="imgBox">
          <Image
            src="/images/elephants.jpg"
            width={640}
            height={856}
            alt="elephants"
          />

          <div className="text">
            <small className="date">May 20, 2021</small>
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              ea nesciunt sapiente laudantium, numquam excepturi.
            </h3>
          </div>
        </div>
        <div className="headingBox">
          <h2 className="section-title">
            We are in the business of supporting environmentaly sustainable
            projects
          </h2>
          <Link href="/projects">
            <a className="link">Look At Our Work</a>
          </Link>
        </div>
        <div className="imgGrid">
          <div className="box">
            <Image
              src="/images/zebra.jpg"
              width={1280}
              height={765}
              alt="zebra"
            />
            <div className="text">
              <small className="date">June 3, 2021</small>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam ea nesciunt sapiente laudantium, numquam excepturi.
              </h3>
            </div>
          </div>
          <div className="box">
            <Image
              src="/images/sustainability.jpg"
              width={1280}
              height={853}
              alt="sustainability"
            />
            <div className="text">
              <small className="date">November 15, 2021</small>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam ea nesciunt sapiente laudantium, numquam excepturi.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SectionTwo;
