import React from "react";
import "./Home.scss";
import logo from "../assets/images/logo.png";

import { FaSearch } from "react-icons/fa";
import { CiHome } from "react-icons/ci";
import { MdOutlineFlightLand } from "react-icons/md";
import { IoKeySharp } from "react-icons/io5";
import { GiDetour } from "react-icons/gi";
import { IoStarSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="logo-img" className="logo" />
        <form action="" className="search">
          <input
            type="text"
            placeholder="Search Hotel"
            className="search-input"
          />

          <button className="search-btn">
            <FaSearch className="search-icon" />
          </button>
        </form>
      </header>
      <div className="content">
        <nav className="sidebar">
          <ul className="side-nav">
            <li className="side-nav-items side-nav-items__active">
              <a href="#" className="side-nav-items__link">
                <CiHome className="side-nav-items__icon" /> HOTEL
              </a>
            </li>
            <li className="side-nav-items">
              <a href="#" className="side-nav-items__link">
                <MdOutlineFlightLand className="side-nav-items__icon" />
                FLIGHT
              </a>
            </li>
            <li className="side-nav-items">
              <a href="#" className="side-nav-items__link">
                <IoKeySharp className="side-nav-items__icon" />
                CARENTEL
              </a>
            </li>
            <li className="side-nav-items">
              <a href="#" className="side-nav-items__link">
                <GiDetour className="side-nav-items__icon" />
                TOURS
              </a>
            </li>
          </ul>

          <div className="footer">
            <p>Copyright@safiya2024</p>
            <p> ❤️ reached</p>
          </div>
        </nav>
        <main className="Hotel-view">
          <div className="gallery">
            <figure className="gallery-items">
              <img
                src="https://tse4.mm.bing.net/th?id=OIP.G9uRFA20E3GhW-oTdbHSqQHaE4&pid=Api&P=0&h=180"
                alt="hotel-photo-1"
                className="gallery-items-photo"
              />
            </figure>
            <figure className="gallery-items">
              <img
                src="https://tse4.mm.bing.net/th?id=OIP.inOZ6L56M_2hJfCMatItSwHaE8&pid=Api&P=0&h=180"
                alt="hotel-photo-1"
                className="gallery-items-photo"
              />
            </figure>
            <figure className="gallery-items">
              <img
                src="https://tse1.mm.bing.net/th?id=OIP.OofF2Kb74K9A37wuTxTAVwHaC9&pid=Api&P=0&h=180"
                className="gallery-items-photo"
              />
            </figure>
          </div>

          {/* overview */}

          <div className="overview">
            <h1 className="overview-heading">Palma Hotel</h1>

            <div className="overview-stars">
              <IoStarSharp className="overview-star-icon" />
              <IoStarSharp className="overview-star-icon" />
              <IoStarSharp className="overview-star-icon" />
              <IoStarSharp className="overview-star-icon" />
              <IoStarSharp className="overview-star-icon" />
            </div>
            <div className="overview-location">
              <FaLocationDot className="overview-location-icon" />
              <button className="overview-location__btn">
                Albuferia Prutugal
              </button>
            </div>

            <div className="overview-rating">
              <div className="overview-rating__average">8.6</div>
              <div className="overview-rating__count">429 votes</div>
            </div>
          </div>

          <div className="detail">
            <div className="description">
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                culpa numquam, quos, sint laudantium perspiciatis praesentium
                quam fugiat laborum tempore est! Maxime, nulla itaque! Ea, a
                aut! Libero, laudantium quisquam.
              </p>

              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                culpa numquam, quos, sint laudantium perspiciatis praesentium
                quam fugiat laborum tempore est! Maxime, nulla itaque! Ea, a
                aut! Libero, laudantium quisquam.
              </p>

              <ul className="description-list">
                <li className="list-items">
                  <FaAngleRight className="list-items-icon" />
                  close to beech
                </li>
                <li className="list-items">
                  {" "}
                  <FaAngleRight className="list-items-icon" />
                  Breakfast includes
                </li>
                <li className="list-items">
                  {" "}
                  <FaAngleRight className="list-items-icon" />
                  Free wifi
                </li>
                <li className="list-items">
                  {" "}
                  <FaAngleRight className="list-items-icon" />
                  pet allowed
                </li>
                <li className="list-items">
                  {" "}
                  <FaAngleRight className="list-items-icon" />
                  Free airport shuttle
                </li>
                <li className="list-items">
                  {" "}
                  <FaAngleRight className="list-items-icon" />
                  Air conditioning and heating
                </li>
              </ul>

              <div className="recommend">
                <p className="recommend-count">
                  Lucy and 3 other friendsrecommend this hotel
                </p>
                <div className="recommend-friends">
                  <img
                    src="https://i.pinimg.com/originals/5f/fc/d6/5ffcd626db6d0a681598eadeb604e198.png"
                    alt="friend-1"
                    className="recommend-photo"
                  />
                  <img
                    src="https://i.pinimg.com/736x/86/26/60/8626607e0a788069ca97e10c3913178b.jpg"
                    alt="friend-1"
                    className="recommend-photo"
                  />
                  <img
                    src="https://i.pinimg.com/originals/a9/9f/a2/a99fa2258dd69fb8d630b312773c479a.jpg"
                    alt="friend-1"
                    className="recommend-photo"
                  />
                  <img
                    src="https://tse4.mm.bing.net/th?id=OIP.jE6Ib1hxNpdS0YDuRgoEvwHaFz&pid=Api&P=0&h=180"
                    alt="friend-1"
                    className="recommend-photo"
                  />
                </div>
              </div>
            </div>

            {/* reviews section */}

            <div className="user-reviews">
              <figure className="review">
                <blockquote className="review-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                  voluptatem nemo voluptates ab distinctio, sequi, eligendi
                </blockquote>
                <figcaption className="review-user">
                  <img
                    src="https://tse4.mm.bing.net/th?id=OIP.jE6Ib1hxNpdS0YDuRgoEvwHaFz&pid=Api&P=0&h=180"
                    alt=""
                    className="review-photo"
                  />
                  <div className="review-user__box">
                    <p className="review-user__name">MILIKA</p>
                    <p className="review-user__date">Feb 23rd, 2024</p>
                  </div>
                  <div className="review-rating">7.8</div>
                </figcaption>
              </figure>

              {/* second figure reviews capytion */}

              <figure className="review">
                <blockquote className="review-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </blockquote>
                <figcaption className="review-user">
                  <img
                    src="https://i.pinimg.com/736x/86/26/60/8626607e0a788069ca97e10c3913178b.jpg"
                    alt=""
                    className="review-photo"
                  />
                  <div className="review-user__box">
                    <p className="review-user__name">NICOLA</p>
                    <p className="review-user__date">Sept 3rd, 2023</p>
                  </div>
                  <div className="review-rating">9.3</div>
                </figcaption>
              </figure>
              <button className="btn-inline">Show all</button>
            </div>
          </div>
          <div className="cta">
            <p className="cta-booknow">
              Great! we are book 4 extra rooms for your selected date
            </p>
            <button className="roombtn">Only 4 room left</button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
