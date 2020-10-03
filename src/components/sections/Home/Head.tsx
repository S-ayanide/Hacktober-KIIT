import { Link } from 'gatsby'
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
  font-size: ${(props) => (props.theme.screens.md ? '2rem' : '2.4rem')};
`

const ImageWrapper = styled.div`
  margin: ${(props) =>
    props.theme.screens.lg
      ? '3rem 0'
      : props.theme.screens.xl
      ? '10rem 0'
      : '5rem 0 5rem 3rem'};
  width: ${(props) => (props.theme.screens.md ? '90%' : '35%')};
`

const Timer = styled.div`
  color: white;
  font-size: ${(props) => (props.theme.screens.md ? '1rem' : '1.2rem')};
  font-weight: 800;
  padding: ${(props) => (props.theme.screens.sm ? '0rem' : '0 2rem 0 2rem')};
`

const ClosingInText = styled.p`
  color: white;
  padding: ${(props) =>
    props.theme.screens.sm ? '2rem 0 0 0rem' : '0 0 0 2rem'};
  font-size: 1.2rem;
`
const TimerDiv = styled.div`
  margin: ${(props) =>
    props.theme.screens.sm ? '-1.5rem 1rem 1rem 1rem' : '0'};
`

const startTimer = () => {
  let launchDate = new Date('October 11, 2020 10:00:00').getTime()

  let x = setInterval(() => {
    let now = new Date().getTime()
    let timeLeft = launchDate - now

    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))

    let hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    )
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)

    if (document.getElementById('registerTimer') != null) {
      document.getElementById(
        'registerTimer',
      ).innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`

      // If the count down is finished, write some text
      if (timeLeft < 0) {
        clearInterval(x)
        document.getElementById('registerTimer').innerHTML =
          'Registration Closed.'
      }
    }
  }, 1000)
}

startTimer()

// Components
const HeadText: React.FC = () => {
  const { sm, md } = useTheme().screens

  const flexibleButton = <Button>REGISTER NOW</Button>

  const HeadContent = (
    <>
      <Paragraph style={{ color: '#93C2DB', fontWeight: 'bold' }}>
        #hacktoberfest #kiithacktoberfest
      </Paragraph>
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
      <div style={{ marginTop: '1rem', display: 'flex' }}>
        <Link to="/register">{flexibleButton}</Link>
        <TimerDiv>
          <ClosingInText>Closing in &rarr;</ClosingInText>
          <Timer id="registerTimer"></Timer>
        </TimerDiv>
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
      <HacktoberFestImage />
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
