import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'
import { Center } from '../layout'

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
`

const HacktoberLogo: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "hacktoberlogo.png" }) {
        childImageSharp {
          fluid(maxWidth: 700, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)

  return (
    <Center>
      <Wrapper>
        <Img
          fluid={data.image.childImageSharp.fluid}
          alt="HacktoberFest Logo"
          style={{ margin: 'auto' }}
        />
      </Wrapper>
    </Center>
  )
}

export { HacktoberLogo }
