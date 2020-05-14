import React from 'react';

import Styles from '../../css/main.module.css'

import Ent1 from '../../img/articles/ent1.jpg'
import Ent2 from '../../img/articles/ent2.jpg'
import Sports1 from '../../img/articles/sports1.jpg'
import Tech1 from '../../img/articles/tech1.jpg'
import Tech2 from '../../img/articles/tech2.jpg'
import { Link } from 'react-router-dom';

const { container, showcase, showcase_content, dark_wrapper, category, category_sports, articles, articles_container, category_ent, category_tech, article_content, bg_dark, bg_light, bg_primary, btn } = Styles

export default function index() {
  return (
    <>
    <section id={showcase}>
      <div className={dark_wrapper}>
        <div className={container}>
          <div className={showcase_content}>
          <div className={`${category} ${category_sports}`}>Sports</div>
          <h1>Some Sports Article</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus rerum officia quibusdam mollitia deserunt animi soluta laudantium. Quam sapiente a dolorum magnam necessitatibus quis tempore facere totam. Dolor, sequi distinctio!</p>
          <a href="#" className={`${btn} ${bg_primary}`}>Read More</a>
          </div>
        </div>
      </div>
    </section>

    <section id={articles}>
      <div className={container}>
        <h2>EDITOR PICKS</h2>
        <div className={articles_container}>
          <article className={bg_light}>
            <img src={Ent1} alt="Ent1" />
            <div className={article_content}>
              <div className={`${category} ${category_ent}`}>Entertainmet</div>
              <Link style={{ color: "#000" }} to="/NewsGrid/article"><h3>Lorem ipsum dolor sit amet</h3></Link>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam eius ducimus optio veniam sit nihil beatae ea autem. Doloribus.</p>
            </div>
          </article>

          <article className={bg_dark}>
            <div className={article_content}>
              <div className={`${category} ${category_sports}`}>Sports</div>
              <Link style={{ color: "#fff" }} to="/NewsGrid/article"><h3>Lorem ipsum dolor sit amet</h3></Link>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam eius ducimus optio veniam sit nihil beatae ea autem. Doloribus. Nulla quam eius ducimusNulla quam eius ducimus opti.</p>
            </div>
          </article>

          <article className={bg_light}>
            <img src={Tech1} alt="Tech1" />
            <div className={article_content}>
              <div className={`${category} ${category_tech}`}>Technology</div>
              <Link style={{ color: "#000" }} to="/NewsGrid/article"><h3>Lorem ipsum dolor sit amet</h3></Link>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam eius ducimus optio veniam sit nihil beatae ea autem. Doloribus.</p>
            </div>
          </article>

          <article className={bg_light}>
            <div className={article_content}>
              <div className={`${category} ${category_sports}`}>Sports</div>
              <Link style={{ color: "#000" }} to="/NewsGrid/article"><h3>Lorem ipsum dolor sit amet</h3></Link>
              <p>sum dolor sit amet consectetur adipisicing elit. Nulla quam eius ducimus optio veniam sit nihil beatae ea autem. Doloribus.</p>
            </div>
            <img src={Sports1} alt="Sports1" />
          </article>

          <article className={bg_light}>
            <img src={Tech2} alt="Tech2" />
            <div className={article_content}>
              <div className={`${category} ${category_tech}`}>Technology</div>
              <Link style={{ color: "#000" }} to="/NewsGrid/article"><h3>Lorem ipsum dolor sit amet</h3></Link>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam eius ducimus optio veniam sit nihil beatae ea autem. Doloribus.</p>
            </div>
          </article>

          <article className={bg_primary}>
            <div className={article_content}>
              <div className={`${category} ${category_sports}`}>Sports</div>
              <Link style={{ color: "#fff" }} to="/NewsGrid/article"><h3>Lorem ipsum dolor sit amet</h3></Link>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam eius ducimus optio veniam sit nihil beatae ea autem. Doloribus. Nulla quam eius ducimusNulla quam eius ducimus opti.</p>
            </div>
          </article>

          <article className={bg_light}>
            <div className={article_content}>
              <div className={`${category} ${category_ent}`}>Entertainmet</div>
              <Link style={{ color: "#000" }} to="/NewsGrid/article"><h3>Lorem ipsum dolor sit amet</h3></Link>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam eius ducimus optio veniam sit nihil beatae ea autem. Doloribus.</p>
            </div>
            <img src={Ent2} alt="Ent2" />
          </article>

        </div>
      </div>
    </section>
    </>
  )
}
