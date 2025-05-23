import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Section from "../components/globals/section/Section"
import styled from "styled-components"
import Banner from "../components/globals/header/Banner"
import BackgroundImage from "gatsby-background-image"
import { FaPrint } from "react-icons/fa"

const Recipes = ({ data }) => {
  const {
    title,
    src,
    summary,
    dish,
    text1,
    ingredients1,
    ingredientsList1,
    ingredients2,
    ingredientsList2,
    ingredients3,
    ingredientsList3,
    ingredients4,
    ingredientsList4,
    directions,
    download,
  } = data.recipeItem

  return (
    <Layout>
      <Wrapper>
        <Section
          style={{
            width: "100vw",
            margin: "2rem auto",
            alignItems: "center",
          }}
        >
          <BackgroundImage
            className="hero no-print"
            Tag="section"
            fluid={src.childImageSharp.fluid}
          >
            <Banner title={title}></Banner>
          </BackgroundImage>
        </Section>
        <Section style={{ width: "80vw" }}>
          { download ? 
            <a href={download} download>
              <button>
                Print <FaPrint />
              </button>
            </a>
            :
            null
          }
          

          <a href="https://www.bushelsandfeasts.com">
            <button className="no-print">Buy Cookbook</button>
          </a>
          <div className="box">
            <ul className="contentList">
              <h4>{title}</h4>
              {summary.map((value, id) => {
                return <li key={id}>{value}</li>
              })}
            </ul>
          </div>
        </Section>
        <Section
          style={{
            width: "80vw",
            margin: "1rem auto 4rem auto",
            alignItems: "center",
          }}
        >
          <div className="recipe-container">
            <div className="ingredients">
              <h4>{dish}</h4>
              <p>{text1}</p>
            </div>
            <div className="ingredients">
              <h4>{ingredients1}</h4>
              <ul className="ingredientsList">
                {ingredientsList1.map((value, id) => {
                  return <li key={id}> {value}</li>
                })}
              </ul>
            </div>
            <div className="ingredients">
              <h4>{ingredients2}</h4>
              <ul className="ingredientsList">
                {ingredientsList2.map((value, id) => {
                  return <li key={id}> {value}</li>
                })}
              </ul>
            </div>
            <div className="ingredients">
              <h4>{ingredients3}</h4>
              <ul className="ingredientsList">
                {ingredientsList3.map((value, id) => {
                  return <li key={id}> {value}</li>
                })}
              </ul>
            </div>
            <div className="ingredients">
              <h4>{ingredients4}</h4>
              <ul className="ingredientsList">
                {ingredientsList4.map((value, id) => {
                  return <li key={id}> {value}</li>
                })}
              </ul>
            </div>
            <div className="ingredients">
              <h4>Instructions:</h4>
              <ul className="directionsList">
                {directions.map((value, id) => {
                  return <li key={id}> {value}</li>
                })}
              </ul>
            </div>
          </div>
        </Section>
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    recipeItem: recipesJson(slug: { eq: $slug }) {
      id
      title
      src {
        childImageSharp {
          fluid(quality: 90, maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      slug
      summary
      ingredients1
      ingredientsList1
      ingredients2
      ingredientsList2
      ingredients3
      ingredientsList3
      ingredients4
      ingredientsList4
      directions
      download
    }
  }
`

const Wrapper = styled.div`
  /* Printing */
  @media print {
    .no-print {
      display: none;
    }
    .printable,
    .printable * {
      display: block;
    }
  }
  /* Component CSS */

  color: var(--darkGray);
  .box {
    flex-basis: 100%;
  }
  .hero {
    width: 100%;
    background-position: center center;
    background-repeat: repeat-y;
    background-size: cover;
  }
  .details {
    background: var(--darkGray);
    width: 60%;
    margin: 0rem auto;
    padding: 0.3rem 0.5rem 0.5rem 0.5rem;
    border-radius: 2px;
    li {
      margin: 0.5rem;
      display: inline;
    }
  }
  h4 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--darkGray);
  }
  .contentList {
    margin-top: 1rem;
    font-family: "Open Sans";
    li {
      list-style-type: none;
      margin-bottom: 1rem;
    }
  }
  .form {
    background: #f1f1f1;
    border-radius: 5px;
    flex-basis: 45%;
    padding: 1rem;
  }
  .ingredients {
    margin-bottom: 2rem;
    .ingredientsList {
      margin: 0rem auto;
      li {
        list-style-type: none;
      }
    }
    .directionsList {
      margin: 0rem auto;
      li {
        list-style-type: none;
        margin-bottom: 1rem;
      }
    }
  }
  button {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    background: var(--mainColor);
    border: none;
    border-radius: 5px;
    color: #ffffff;
    &:hover {
      cursor: pointer;
    }
  }
  @media (max-width: 768px) {
    .details {
      width: 100%;
    }
    .ingredients {
      flex-basis: 100%;
    }
    .list {
      margin: 2rem 0rem;
    }
    .box {
      flex-basis: 100%;
    }
    .form {
      margin: 2rem 0rem;
      flex-basis: 100%;
      padding: 1rem;
    }
  }
`

export default Recipes
