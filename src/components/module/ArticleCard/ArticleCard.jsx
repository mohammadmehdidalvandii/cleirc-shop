import './ArticleCard.css'
import { NavLink } from "react-router-dom";

function ArticleCard({img , minTitle , bigTitle , desc , author}) {
  return (
    <NavLink className="articleCard">
    <img
      src={img}
      alt="article image"
      className="articleCard-img"
    />
    <div className="articleCard-content">
      <span className="articleCard-minTitle">{minTitle}</span>
      <h5 className="articleCard-bigTitle">
        {bigTitle}
      </h5>
      <p className="articleCard-description">
    {desc}
      </p>
      <span className="articleCard-create-Article">{author}</span>
    </div>
  </NavLink>
  )
}

export default ArticleCard