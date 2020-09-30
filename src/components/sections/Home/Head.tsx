import React from 'react'
import styled, { useTheme } from 'styled-components'
import { Button } from '../../button'
import { HacktoberFestImage } from '../../image-fetch/HacktoberFestImage'
import { BoundedContainer, ResponsiveRow, SectionDark } from '../../layout'
import { Paragraph } from '../../texts'

const MainHeading = styled.h1`
  margin: 1rem 0;
  line-height: 130%;
  color: white;
  font-size: ${(props) => (props.theme.screens.md ? '2rem' : '2.6rem')};
`

const ImageWrapper = styled.div`
  margin: ${(props) =>
    props.theme.screens.md
      ? '3rem 0'
      : props.theme.screens.xl
      ? '10rem 0'
      : '5rem 0 5rem 3rem'};
  width: ${(props) => (props.theme.screens.md ? '50%' : '35%')};
`

// Components
const HeadText: React.FC = () => {
  const { sm, md } = useTheme().screens

  const flexibleButton = <Button gradientColor="purple">REGISTER NOW</Button>

  const HeadContent = (
    <>
      <Paragraph style={{ color: '#93C2DB' }}>#Hastags</Paragraph>
      <MainHeading>
        Celebrate a month-long
        <br />
        open source fest
      </MainHeading>
      <Paragraph>
        Open Source is changing the world
        <br />
        One Pull Request at a time
        <br />
        Meet new and interesting developers
      </Paragraph>
      <div style={{ marginTop: '1rem' }}>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://hacktoberfest.digitalocean.com/register"
        >
          {flexibleButton}
        </a>
      </div>
    </>
  )

  if (sm) {
    return <div style={{ marginTop: '5rem' }}>{HeadContent}</div>
  } else if (md) {
    return <div style={{ marginTop: '5rem', width: '80%' }}>{HeadContent}</div>
  } else {
    return (
      <BoundedContainer breakpoint="md" width="40%" margin="6rem 0">
        {HeadContent}
      </BoundedContainer>
    )
  }
}

const HeaderThumbnail: React.FC = () => {
  return (
    <ImageWrapper>
      <img src="/icons/HeroBackground.svg" alt="Hacktober Background" />
      <div
        style={{
          width: '25%',
          position: 'absolute',
          top: '13rem',
          right: '15rem',
        }}
      >
        <HacktoberFestImage />
      </div>
    </ImageWrapper>
  )
}

const Head: React.FC = () => {
  return (
    <SectionDark>
      <ResponsiveRow breakpoint="md">
        <HeadText />
        <HeaderThumbnail />
      </ResponsiveRow>
    </SectionDark>
  )
}

export { Head }
