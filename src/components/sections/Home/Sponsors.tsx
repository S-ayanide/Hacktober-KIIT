import React from 'react'
import styled from 'styled-components'
import { HacktoberFestBig } from '../../../components/image-fetch/HacktoberFestBig'
import { PartneredBy } from '../../../components/image-fetch/PartneredBy'
import { ResponsiveRow, SectionDark } from '../../../components/layout'

const ImageWrapper = styled.div`
  display: 'flex';
  flex-direction: 'column';
  width: '100%';
`
const HorizontalWrap = styled.div`
  min-width: 25%;
  max-width: 100%;
  margin: ${(props) => (props.theme.screens.md ? ' 2rem 0' : '0 1rem')};
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

      <div style={{ marginTop: '4rem' }}>
        <ResponsiveRow breakpoint="md" justifyContent="space-evenly">
          <HorizontalWrap>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://kiit.ac.in/"
            >
              <img
                src="/icons/kiit.svg"
                alt="KIIT Logo"
                style={{ width: '20rem' }}
              />
            </a>
          </HorizontalWrap>

          <HorizontalWrap>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://mozilla.org/"
            >
              <img
                src="/icons/mozilla.svg"
                alt="Mozilla Logo"
                style={{
                  marginTop: '-0.5rem',
                  marginLeft: '3rem',
                  width: '10rem',
                }}
              />
            </a>
          </HorizontalWrap>

          <HorizontalWrap>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://dsckiit.tech/"
            >
              <img
                src="/icons/dsc.svg"
                alt="DSC Logo"
                style={{
                  marginTop: '1rem',
                  marginLeft: '-2rem',
                  width: '15rem',
                }}
              />
            </a>
          </HorizontalWrap>

          <HorizontalWrap>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://studentambassadors.microsoft.com/"
            >
              <img
                src="/icons/mspc.svg"
                alt="MSPC Logo"
                style={{ width: '15rem' }}
              />
            </a>
          </HorizontalWrap>
        </ResponsiveRow>
      </div>
    </SectionDark>
  )
}

export { Sponsors }
