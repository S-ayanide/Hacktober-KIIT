import React from "react";
import { Button } from "../../../components/button";
import {
  BoundedContainer,
  Center,
  ResponsiveRow,
  SectionDark
} from "../../../components/layout";
import { Heading, Paragraph } from "../../../components/texts";
import { HacktoberFestImage } from "../../image-fetch/HacktoberFestImage";

const HeaderContent: React.FC = () => {
  return (
    <div>
      <Heading style={{ color: "white" }}>
        Support open source and pick a<br />
        limited edition T-shirt or plant a tree.
      </Heading>
      <br />

      <Paragraph style={{ color: "#93C2DB" }}>
        Hacktoberfest is open to everyone in our global community. Whether
        you’re new to development, a student, long-time contributor, event host,
        or company of any size, you can help drive growth of open source and
        make positive contributions to an ever-growing community. chunk of them.
      </Paragraph>
      <br />
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://hub.litmuschaos.io/"
      >
        <Button gradientColor="purple">Get Started</Button>
      </a>
    </div>
  );
};

// Component
const SecondHead: React.FC = () => {
  return (
    <SectionDark>
      <ResponsiveRow breakpoint="lg">
        <BoundedContainer breakpoint="lg" width="50%" margin="-4rem 0">
          <HacktoberFestImage />
        </BoundedContainer>

        <BoundedContainer
          breakpoint="lg"
          width="40%"
          margin="-4rem 0 -4rem 2rem"
        >
          <Center>
            <HeaderContent />
          </Center>
        </BoundedContainer>
      </ResponsiveRow>
    </SectionDark>
  );
};

export { SecondHead };
