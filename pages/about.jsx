import { useEffect, useState } from "react";
import "../style/about.css";

import privateInfo from "../photos & icons/profile.png";
import exp_1 from "../photos & icons/expertise.png";
// import goals from "../photos & icons/target.png";

export default function About() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch(
      "https://qjeynacbxvelfzuhxqtk.supabase.co/storage/v1/object/public/api/db.json"
    )
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        console.log("API dan kelayotgan data:", data);

        // data.skills mavjud va array bo'lsa setSkills(data.skills)
        if (data.skills && Array.isArray(data.skills)) {
          setSkills(data.skills);
        } 
        // Agar data o'zi array bo'lsa to'g'ridan-to'g'ri setSkills(data)
        else if (Array.isArray(data)) {
          setSkills(data);
        } 
        else {
          console.error("Skills ma'lumotlari topilmadi yoki format noto'g'ri");
          setSkills([]); // bo'sh massiv beramiz
        }
      })
      .catch((err) => {
        console.error("Xatolik:", err);
        setSkills([]); // xato bo'lsa ham bo'sh massiv
      });
  }, []);

  return (
    <div className="about">
      <div className="in">
        <article className="top">
          <p>Men haqimda</p>
        </article>
        <p className="topTwo">
          Mening <span>Hikoyam</span>
        </p>

        <p className="info">
          Assalomu alaykum! Men Feruzbek — Frontend dasturchiman. Asosiy
          e&#39;tiborim foydalanuvchiga qulay, zamonaviy va moslashuvchan
          veb-interfeyslar yaratishga qaratilgan. HTML, CSS, JavaScript va
          React.js bilan ishlashda tajribam bor. Dasturlashga bo&#39;lgan
          ishtiyoqim sababli har kuni o&#39;z ustimda ishlayman, yangi
          texnologiyalarni o&#39;rganishni va amaliy loyihalar orqali tajriba
          orttirishni yoqtiraman. Hozirda portfoliomni kengaytirish, real
          loyihalarda ishtirok etish va yanada yuqori darajadagi frontend
          echimlar yaratish maqsadida izlanmoqdaman.
        </p>

        <div className="bottom">
          <div className="left">
            <div className="box">
              <div className="left">
                <img src={privateInfo} alt="Shaxsiy" />
              </div>
              <div className="right">
                <p>Shaxsiy Ma&#39;lumotlar</p>
                <p>
                  Qashqadaryoda tug&#39;ilgan va o&#39;sgan. Dasturlashga
                  bo&#39;lgan muhabbatim maktabda boshlangan va hozir bu mening
                  hayotiy faoliyatim va ishtiyoqimga aylangan.
                </p>
              </div>
            </div>

            <div className="box">
              <div className="left">
                <img src={exp_1} alt="Tajriba" />
              </div>
              <div className="right">
                <p>Professional Tajriba</p>
                <p>
                  Turli xil loyihalarda ishlaganman. Har bir loyiha menga yangi
                  bilim va tajriba bergan.
                </p>
              </div>
            </div>

            {/* <div className="box">
              <div className="left">
                <img src={goals} alt="Maqsad" />
              </div>
              <div className="right">
                <p>Maqsadlarim</p>
                <p>
                  O&#39;zbekistonda raqamli texnologiyalar rivojlanishiga hissa
                  qo&#39;shish va yoshlarni dasturlashga jalb qilish mening
                  asosiy maqsadlarimdan biri.
                </p>
              </div>
            </div> */}
          </div>

          <div className="right">
            {Array.isArray(skills) && skills.length > 0 ? (
              skills.map((skill) => (
                <div key={skill.name} className="skill-box">
                  <div className="top">
                    <span className="knowledge">
                      <img src={skill.icon} alt={skill.name} />
                    </span>
                  </div>
                  {/* <p className="nameThis">{skill.name}</p> */}
                </div>
              ))
            ) : (
              <p>Malumot yuklanmoqda yoki malumot topilmadi...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
