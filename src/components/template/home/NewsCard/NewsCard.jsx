import "./NewsCard.css";
import { NavLink } from 'react-router-dom'
function NewsCard({img ,date ,time , title ,desc}) {
  return (
    <div className="newsCard">
      <img
        src={img}
        alt="news-img"
        className="newsCard-img"
      />
      <span className="newsCard-date-time"> {date}-{time}</span>
      <h4 className="newsCard-title">{title}</h4>
      <p className="newsCard-description">
        {desc}
      </p>
      <NavLink to="/" className="newsCard-btn">
        ادامه مطلب
      </NavLink>
    </div>
  );
}

export default NewsCard;
