import React from 'react'
import styled from 'styled-components'
import { HacktoberFestBig } from '../../../components/image-fetch/HacktoberFestBig'
import { PartneredBy } from '../../../components/image-fetch/PartneredBy'
import { SectionDark } from '../../../components/layout'

const ImageWrapper = styled.div`
  display: 'flex';
  flex-direction: 'column';
  width: '100%';
`

// Component
const Sponsors: React.FC = () => {
  return (
    <SectionDark>
      <ImageWrapper>
        <HacktoberFestBig />
      </ImageWrapper>
      <br />
      <br />
      <ImageWrapper>
        <PartneredBy />
      </ImageWrapper>
    </SectionDark>
  )
}

export { Sponsors }
