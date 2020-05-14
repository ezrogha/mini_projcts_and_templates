import React from "react";
import { FaAngleRight, FaUser } from "react-icons/fa";

import Ent1 from "../../img/articles/ent1.jpg";

import Styles from "../../css/main.module.css";

const {
  articlePage,
  bg_secondary,
  bg_light,
  btn,
  bg_dark,
  bg_grey,
  container,
  category,
  category_ent
} = Styles;

export default function index() {
  return (
    <div id={articlePage}>
      <div className={container}>
        <article className={bg_light}>
          <img src={Ent1} />
          <h1>Lorem ipsum dolor sit amet</h1>
          <div className={bg_grey}>
            <div>
            <FaUser />Written By John Doe August 20, 2020</div>
            <div className={category_ent}>Entertainment</div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
            debitis beatae ad doloremque voluptate, blanditiis suscipit error
            quam fugit sapiente, aliquid quia libero incidunt recusandae enim
            voluptas nulla sequi similique? Temporibus ad est minima magni
            molestias obcaecati consequatur cumque exercitationem deleniti eos,
            animi facere recusandae, pariatur eveniet neque? Voluptatem,
            molestias.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
            dignissimos dolorum ipsam corporis similique! Quis, esse minus?
            Ducimus tempore provident sunt officia? Velit temporibus harum
            voluptate, ipsum quisquam rerum doloremque consectetur quos incidunt
            deleniti dicta excepturi ratione, fugiat ad fuga in nam dolorum aut
            minus esse voluptatum suscipit et quae. Repellendus minus, ratione
            aperiam commodi voluptas iusto aliquam sapiente. Aut obcaecati,
            corporis praesentium porro nostrum excepturi animi repellendus
            incidunt non quis nisi assumenda voluptas possimus molestiae
            laboriosam iure sed architecto in perferendis magnam blanditiis
            voluptatum placeat labore odio? Unde id dolore aliquam, quas sit
            harum, saepe maiores facilis aliquid molestiae qui. Praesentium
            rerum, minima fugit laudantium quaerat voluptatem pariatur sequi
            saepe blanditiis nobis natus possimus quo, assumenda numquam sit,
            eaque accusamus incidunt exercitationem quis deleniti quisquam
            corrupti vel? Ut quisquam consequatur, doloribus voluptatibus iusto
            quaerat, sint non magnam reiciendis amet quos sapiente excepturi
            omnis laboriosam nobis, expedita delectus odio provident?
          </p>
        </article>
        <aside>
          <section className={bg_light}>
            <h2>Categories</h2>
            <ul>
              <li>
                <a href=""><FaAngleRight /> Sport</a>
              </li>
              <li>
                <a href=""><FaAngleRight /> Entertainment</a>
              </li>
              <li>
                <a href=""><FaAngleRight /> Technology</a>
              </li>
              <li>
                <a href=""><FaAngleRight /> Fashion</a>
              </li>
              <li>
                <a href=""><FaAngleRight /> Shopping</a>
              </li>
            </ul>
          </section>
          <section className={bg_secondary}>
            <h2>Join Our Club</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit,
              id?
            </p>
            <input
              className={`${bg_dark} ${btn}`}
              type="button"
              value="Join now"
            />
          </section>
          <section></section>
        </aside>
      </div>
    </div>
  );
}
