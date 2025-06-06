import "../src/App.css";
import "../style/home.css";

//photos
import myself from "../photos & icons/myself.jpg";

import gitHub from "../photos & icons/outline.png";
import linkedin from "../photos & icons/linkedin.png";
import email from "../photos & icons/email.png";

import projects from "../photos & icons/briefcase.png";
import download from "../photos & icons/download.png";


export default function home() {
  return (
    <div className="home">
      <div className="in">
        <div className="left">
          <article className="openWork">
            <span></span>
            <p>Ishga tayyor</p>
          </article>
          <h1 className="name">
            Salom, men <span>Frontend</span>
            <span className="two"> Dasturchiman</span>
          </h1>

          <p className="title">
            Zamonaviy web va mobil ilovalar yaratish orqali bizneslaringizni
            raqamli dunyoda muvaffaqiyatga olib boraman.
          </p>

          <article className="cv">
            <button className="btn1">
              <img src={projects} alt="" />
              Loyihalarni Ko&#39;rish</button>
            <button className="btn2">
              <img src={download} alt="" />
              CV Yuklab Olish</button>
          </article>

          <div className="socialPlace">
            <article className="btns">
              <button className="socialBtn">
                <img src={gitHub} alt="" />
              </button>
              <button className="socialBtn">
                <img src={linkedin} alt="" />
              </button>
              <button className="socialBtn">
                <img src={email} alt="" />
              </button>
            </article>
            <article className="place">
              <h1>Qashqadaryo, O&#39;zbekiston</h1>
            </article>
          </div>
        </div>

        <div className="right">
          <span className="animation"></span>
          <article className="selfi">
            <img src={myself} alt="" />
          </article>

          <span className="job">
            <h1>Shukurullayev Feruzbek</h1>
            <p>1+ yillik tajriba</p>
          </span>

          <article className="info">
            <span>
              <h1>2+</h1>
              <p>Loyihalar</p>
            </span>

            <span>
              <h1>2+</h1>
              <p>Mijozlar</p>
            </span>

            <span>
              <h1>1+</h1>
              <p>Tajriba</p>
            </span>
          </article>

          <button className="btn1">
            <img className="homeRightImg" src={email} alt="" />
            Aloqa</button>

          <span className="animation2"></span>
        </div>
      </div>
    </div>
  );
}
