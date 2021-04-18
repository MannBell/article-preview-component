import React from "react";
import "./style.css";
/*FontAwesome ->*/ import "/Users/WINUSER/Desktop/fontawesome-free-5.15.2-web/css/all.css";
// Images
import michelle from "./images/avatar-michelle.jpg";

export const Presentational = (props) => {
  return (
    <App propies={props}/>
  );
}

const App = (props) => {
  props = props.propies; /* reassign propies to props in order to get all the props of "<App/>" */

  return (
    <div className="wrapper">
      <div className="card">
        <div className="card-top"/>
        <CardBottom
          shareArticle={props.shareArticle}
          sharing={props.sharing}
        />
      </div>
      <div class="attribution">
        Challenge by <a target="_blank" href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a target="_blank" href="https://MannBell.github.io/Portfolio">MannBell</a>.
      </div>
    </div>
  );
}

const CardBottom = (props) => {
  return (
    <div className="card-bottom">
      <ArticlePrev/>
      <div className={`card-bottom-bottom${props.sharing ? " sharing" : ""}`}>
        <div className="author-share-wrapper">
          <AuthorWrapper sharing={props.sharing}/>
          <ShareWrapper 
            shareArticle={props.shareArticle}
            sharing={props.sharing}
          />
        </div>
      </div>
    </div>
  );
}

const ArticlePrev = () => {
  return (
    <div className="article-prev">
      <h2 className="article-title">
        Shift the overall look and feel by adding these wonderful 
        touches to furniture in your home
      </h2>
      <p>
        Ever been in a room and felt like something was missing? Perhaps 
        it felt slightly bare and uninviting. I’ve got some simple tips 
        to help you make any room feel complete.
      </p>
    </div>
  );
}

const AuthorWrapper = (props) => {
  return (
    <div className={`author-wrapper${props.sharing ? " sharing" : ""}`}>
      <div className="author-img">
        <img
          src={michelle}
          alt="michelle avatar"
        />
      </div>
      <div className="author-and-date">
        <b>Michelle Appleton</b>
        <span>28 Jun 2020</span>
      </div>
    </div>
  );
}

const ShareWrapper = (props) => {
  return (
    <div className={`share-wrapper${props.sharing ? " sharing" : ""}`}>
      <div className="social-media-wrapper">
        <div className="social-media">
          <div className="share-text">
            Share
          </div>
          <a href="#" target="_blank">
            <i className="fab fa-facebook-square"/>
          </a>
          <a href="#" target="_blank">
            <i className="fab fa-twitter"/>
          </a>
          <a href="#" target="_blank">
            <i className="fab fa-pinterest"/>
          </a>
        </div>
      </div>
      <ShareButton shareArticle={props.shareArticle}/>
    </div>
  );
}

const ShareButton = (props) => {
  return (
    <div 
      className="share-button"
      onClick={props.shareArticle}
    >
      <div className="share-icon">
        <i className="fas fa-share"/>
      </div>
    </div>
  );
}