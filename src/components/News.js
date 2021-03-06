import React from "react";

// Components
import Article from "./Article";
import Grid from "./Grid";

// Hook
import { useNewsFetch } from "../hooks/useNewsFetch";

const News = () => {
  const { state, loading, error, category, setCategory } = useNewsFetch();

  console.log(state);

  return (
    <Grid>
      <Article
        key="a"
        name="pong tournament winner!!!!"
        author="πΈππ ππͺππ π¦π€"
        title="KaPOwNG - How One Game of PONG Changed the World Forever"
        description="One of the most influential matches in one of the world's first successful games."
        img="https://live.staticflickr.com/3320/3669852343_2c2929e121_n.jpg"
        url="https://txti.es/exwwt"
        content="Legend says that, decades ago, in the early 1970s, the first game of pong, played between player 1 (Bushnell) and α΄Κα΄Κα΄Κ 2 (Dabney), ended in a decisive 8Μ³-Μ³0Μ³ victory for π»πππππͺ, leading to the game's adoption in the Atari console and its everlasting mark on entertainment history ... [+437 chars]"
      />

      {state.articles.map((article, index) => {
        console.log(article);
        return (
          <Article
            key={index}
            name={article.source.name}
            author={article.author}
            title={article.title}
            description={article.description}
            img={article.urlToImage}
            url={article.url}
            content={article.content}
          ></Article>
        );
      })}
    </Grid>

    /*
      [id, name],
  author,
  title,
  description,
  urlToImage,
  content
  */
  );
};

export default News;
