import ArticleCard from "../../../module/ArticleCard/ArticleCard";
import "./Articles.css";
import db from '../../../../data/db.json'
import { useState } from "react";

function Articles() {
    const [articles ,setArticles] = useState([...db.Articles])
    const [allArticles ,setAllArticles] = useState(false)

    const showAllArticles= ()=>{
        setAllArticles(true)
    }
  return (
    <section className="articles">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4 className="article-title">وبلاگ ما</h4>
          </div>
        </div>
        <div className="row mt-5">
            {allArticles ? (
                articles.map(article=>(
                 <div className="col-lg-6 col-md-12" key={article.id}>
                     <ArticleCard {...article}/>
               </div>
                ))
            ):(
                    articles.slice(0,6).map(article=>(
                    <div className="col-lg-6 col-md-12" key={article.id}>
                        <ArticleCard {...article}/>
                  </div>
                    ))
                )}
        </div>
        <div className="row mt-3">
            <button 
            className="button_bg_white article-btn"
            style={{display:allArticles ? "none":"block"}}
             onClick={showAllArticles}>مشاهده بیشتر</button>
        </div>
      </div>
    </section>
  );
}

export default Articles;
