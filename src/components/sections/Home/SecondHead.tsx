import React from 'react'
import {
  BoundedContainer,
  Center,
  ResponsiveRow,
  SectionDark,
} from '../../../components/layout'
import { Heading, Paragraph } from '../../../components/texts'

const HeaderContent: React.FC = () => {
  return (
    <div>
      <Heading style={{ color: 'white' }}>
        Support open source and pick a<br />
        limited edition T-shirt or plant a tree.
      </Heading>
      <br />

      <Paragraph style={{ color: '#93C2DB' }}>
        Hacktoberfest is open to everyone in our global community. Whether
        you’re new to development, a student, long-time contributor, event host,
        or company of any size, you can help drive growth of open source and
        make positive contributions to an ever-growing community. chunk of them.
      </Paragraph>
      <br />
    </div>
  )
}

// Component
const SecondHead: React.FC = () => {
  return (
    <SectionDark>
      <ResponsiveRow breakpoint="lg">
        <BoundedContainer breakpoint="lg" width="50%" margin="-4rem 0">
          {/* <VideoFrame
            width="40rem"
            src="https://hacktoberfest.digitalocean.com?wvideo=rrnq2hxoso"
          /> */}
          <p>
            <a
              href="https://hacktoberfest.digitalocean.com?wvideo=rrnq2hxoso"
              target="_"
            >
              <img
                src="https://embed-fastly.wistia.com/deliveries/49bd387c40e2c5aada92abdf973bc46d.jpg?image_play_button_size=2x&amp;image_crop_resized=960x540&amp;image_play_button=1&amp;image_play_button_color=1e71e7e0"
                alt="HacktoberFest Video"
                width="500"
                height="225"
                style={{ width: '400px', height: '225px' }}
              />
            </a>
          </p>
        </BoundedContainer>

        <BoundedContainer
          breakpoint="lg"
          width="40%"
          margin="-4rem 0 4rem 2rem"
        >
          <Center>
            <HeaderContent />
          </Center>
        </BoundedContainer>
      </ResponsiveRow>
    </SectionDark>
  )
}

export { SecondHead }
