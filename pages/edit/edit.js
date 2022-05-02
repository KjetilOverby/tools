import React from "react";
import HeaderComponent from "../../src/components/common/HeaderStartPage";
import Link from "next/link";
import ArticleCard from "../../src/components/common/ArticleCard";

const edit = () => {
  return (
    <>
      <div className="container">
        <div className="header-container">
          <HeaderComponent />
        </div>
        <div className="image-container">
          <h1 className="image-header">Rediger Data</h1>
        </div>
        <div className="article-card-container">
          <ArticleCard
            header="Rediger antall verktøy"
            text="Rediger antallet verktøy som vi har på lager."
            img="https://thumbs.dreamstime.com/b/edit-symbol-icon-monogram-blue-colors-crystal-design-illustration-image-edit-button-symbol-icon-monogram-179562562.jpg"
            link="/edit/edit_types_tools"
          />

          <ArticleCard
            header="Segmenter og kniver"
            text="Rediger antall slettede og nye segmenter og kniver."
            img="https://lh3.googleusercontent.com/pw/AM-JKLUyeGoCBa-or1aeUX-E8auDWMo-ixEskSnqnpCsHyzhIOoiOBMs508EoBzRiUkBnW-n-h3u3ffS6nFcyyRnifL_69XA0SvcM3CqavjwHaYaoi8yXlTblpGWB4UZXQ0oTKtAQrzeBwmFjIB7ltQQaa5I=w261-h193-no?authuser=0"
            link="/oversikt/toolinputedit"
          />

          <ArticleCard
            header="Rediger utgifter"
            text="Rediger data på utgifter og verktøyhold."
            img="https://icon-library.com/images/expenses-icon/expenses-icon-20.jpg"
          />
        </div>
      </div>
      <style jsx>
        {`
          .article-card-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
            margin: 5rem 10rem;
            place-items: center;
          }
          .image-header {
            color: white;
            font-size: 3rem;
          }
          .container {
          }
          .header-container {
            width: 100%;
            display: flex;
            justify-content: center;
            grid-area: top;
          }
          .image-container {
            background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
              url("https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
            height: 20rem;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            display: grid;
            place-items: center;
            grid-area: middle;
          }
          @media (max-width: 1000px) {
            .article-card-container {
              margin: 0 0.5rem;
            }
            .image-container {
              height: 10rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default edit;
