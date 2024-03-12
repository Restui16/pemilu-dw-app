import React from "react";
import IArticle from "../../../interface/IArticle";
import Article from "../../elements/cards/Article";

type SectionArticleProps = {
  articles: IArticle[];
};

const SectionArticle: React.FC<SectionArticleProps> = ({ articles }) => {
  return (
    <section className="px-24 my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {articles.map((article, index) => (
          <Article
            index={index}
            key={article.id}
            to={`/article/${article.id}`}
            imgUrl={`/src/assets/images/${article.image}`}
            title={article.title}
            author={article.user.fullname}
            created_at={article.created_at}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionArticle;
