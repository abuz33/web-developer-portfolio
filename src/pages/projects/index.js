import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.css"
import Img from "gatsby-image"

const Projects = ({ data }) => {
  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact

  console.log(projects)

  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites that I created</h3>
        <div className={styles.projects}>
          {projects.map(project => (
            <Link key={project.id} to={"/projects/" + project.frontmatter.slug}>
              <div>
                <Img
                  fluid={project.frontmatter.thumb.childrenImageSharp[0].fluid}
                />
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <p>Like what you see? Email me at {contact} for a quote.</p>
    </Layout>
  )
}

export default Projects

export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          title
          slug
          stack
          thumb {
            childrenImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`
