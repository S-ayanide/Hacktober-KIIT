import { Link } from 'gatsby'
import React, { useEffect, useState } from 'react'
import { Button } from '../../button'
import { HacktoberLogo } from '../../image-fetch/HacktoberLogo'
import {
  BoundedContainer,
  Center,
  ResponsiveRow,
  SectionLight,
} from '../../layout'
import { Heading, Paragraph, SmallText } from '../../texts'

const FooterLeft: React.FC = () => {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear()
    const difference = +new Date(`${year}-10-11`) - +new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
  const [year] = useState(new Date().getFullYear())

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
  })

  const difference = +new Date(`${year}-10-11`) - +new Date()

  return (
    <div>
      <SmallText>Closing in &rarr;</SmallText>
      <Heading style={{ fontSize: '3rem', width: '150%' }}>
        {difference > 0
          ? `
					${Object.values(timeLeft)[0]} ${'  Days '}
					${Object.values(timeLeft)[1]} ${'  Hours '}
					${Object.values(timeLeft)[2]} ${'  Minutes '}
				`
          : `Time's Up`}
      </Heading>
    </div>
  )
}

const Footer: React.FC = () => {
  const flexibleButton = <Button>REGISTER NOW</Button>

  return (
    <SectionLight>
      <ResponsiveRow breakpoint="lg">
        <BoundedContainer breakpoint="lg" width="60%" margin="3rem 0">
          <FooterLeft />
          <div style={{ marginTop: '1rem', display: 'flex' }}>
            <Link to="/register">{flexibleButton}</Link>
            <div style={{ width: '50%', margin: '1rem 2rem' }}>
              <Paragraph>
                This year make contributions that you are proud of.
              </Paragraph>
            </div>
          </div>
        </BoundedContainer>

        <BoundedContainer
          breakpoint="lg"
          width="40%"
          margin="0 4rem 4rem 10rem"
        >
          <Center>
            <HacktoberLogo />
          </Center>
        </BoundedContainer>
      </ResponsiveRow>
    </SectionLight>
  )
}

export { Footer }
