import React, { Component } from "react";
import Footer from "./Footer";
import Profile from "./Images/profile.jpg";
import ReactReadMoreReadLess from "react-read-more-read-less";
import "./Home.css";
import { SocialIcon } from "react-social-icons";
import photos from "./Photos";
import Gallery from "react-photo-gallery";
import Awards from "./Awards";
import Cards from "./Cards";
import Cardsdata from "./Cardsdata";

export class Home extends Component {
  render() {
    return (
      <>
        <div className="header-grid">
          <div className="pro-img">
            <img src={Profile} alt="profile image" />
          </div>
          <div className="intro">
            <h1>Sunil Kumar Singh</h1>
            <h3> Chairman of BISCOMAUN PATNA</h3>
            <h3>and RJD MLC of BIHAR</h3>
            <p>
              Dr. Sunil Kumar Singh is a vociferous cooperator from Bihar who is
              well known for his strong decision making abilities. Dr. Sunil
              Kumar Singh took the responsibilities of the iconic BISCOUMAN
              Bhawan as the Chairman in 2003, which was said to be in its
              toughest times. After he took the chairman position his strong
              decision making techniques and an idea to do something for the
              farmers of the country he took BISCOMAUN to new heights, after
              which it never looked back. Today BISCOUMAN has an example in the
              cooperative sector.
            </p>
            <p>
              <ReactReadMoreReadLess
                charLimit={0}
                ellipsis="#"
                readMoreText={"Read more "}
                readLessText={"# Close expanded view "}
              >
                Along with chairman of BISCOMAUN Dr. Singh also have the
                responsibility as the vice chairman of NAFED New Delhi, Board of
                Director in KRIBHCO and many other cooperative federations of
                the country.
              </ReactReadMoreReadLess>
            </p>
          </div>
        </div>
        <div className="follow-me">
          <h3>Follow Me</h3>
          <div className="social-icons">
            <SocialIcon
              url="https://www.facebook.com/profile.php?id=100003257938529"
              style={{ height: 50, width: 50, margin: 6 }}
              //   bgColor="#000000"
            />
            <SocialIcon
              url="https://www.twitter.com/"
              style={{ height: 50, width: 50, margin: 6 }}
            />
            <SocialIcon
              url="https://www.instagram.com/"
              style={{ height: 50, width: 50, margin: 6 }}
            />
            <SocialIcon
              url="https://www.youtube.com/results?search_query=dr+sunil+kumar+singh+biscomaun"
              style={{ height: 50, width: 50, margin: 6 }}
            />
            <SocialIcon
              url="https://mail.google.com/"
              style={{ height: 50, width: 50, margin: 6 }}
            />
          </div>
        </div>
        <div className="main-events">
        <h2>Main Events</h2>
        <div className="cards">
          {Cardsdata.map((val) => {
            return (
              <Cards
                key={val.id}
                avatar={val.avatar}
                title={val.title}
                date={val.date}
                imgsrc={val.imgsrc}
                para={val.para}
                para2={val.para2}
                para3={val.para3}
              />
            );
          })}
        </div>
        </div>

        <div className="awards">
          <h2>Awards</h2>
          <Awards />
        </div>

        <div className="iframes">
          <div className="youtube-videos">
            <h2>Youtube videos</h2>
            <iframe
              src="https://www.youtube.com/embed/n4xS5tSXhhU"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <iframe
              src="https://www.youtube.com/embed/zoDGuUyn5p4"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <iframe
              //   width="360"
              //   height="240"
              src="https://www.youtube.com/embed/UNDDZC5HL1w"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="facebook-wall">
            <h2>Facebook Page</h2>
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fm.facebook.com%2Fdrsunilkumarsinghmlc%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=635112940433925"
              //   width="340"
              //   height="500"
              scrolling="no"
              frameborder="0"
              allowTransparency="true"
              allow="encrypted-media"
            ></iframe>
          </div>
        </div>

        <div className="gallery">
          <h2>Gallery</h2>
          <Gallery photos={photos} direction={"column"} />
        </div>

        <Footer />
      </>
    );
  }
}

export default Home;
