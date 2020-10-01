import React from 'react'
import {
  BoundedContainer,
  ResponsiveRow,
  SectionLight,
} from '../../../components/layout'
import { Heading, Paragraph } from '../../../components/texts'

const ProjectsToContributeContent: React.FC = () => {
  return (
    <div>
      <Heading>Projects to Contribute</Heading>
      <br />

      <Paragraph color="#5B6987">
        Explore and contribute into the Cloud Native Computing Foundation
        sandbox projects on World’s famous Kubernetes storage platform and for
        chaos Engineering developed by Mayadata.
      </Paragraph>
    </div>
  )
}

const Litmus: React.FC = () => {
  return (
    <div>
      <img src="/icons/litmus.svg" alt="Litmus Logo" />
      <br />

      <Paragraph>
        Chaos engineering for Stateful workloads on Kubernetes.
      </Paragraph>
      <br />
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/litmuschaos/litmus"
      >
        <Paragraph style={{ color: '#0069FF' }}>Explore More</Paragraph>
      </a>
    </div>
  )
}

const OpenEBS: React.FC = () => {
  return (
    <div>
      <img
        src="/icons/openebs.svg"
        alt="OpenEBS Logo"
        style={{ marginTop: '-6rem', marginLeft: '-2rem' }}
      />

      <br />

      <Paragraph>
        Containerized storage for containers. Most popular OpenSource Container
        Attached Storage
      </Paragraph>
      <br />
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/openebs/openebs"
      >
        <Paragraph style={{ color: '#0069FF' }}>Explore More</Paragraph>
      </a>
    </div>
  )
}

// Component
const ProjectsToContribute: React.FC = () => {
  return (
    <SectionLight>
      <ResponsiveRow breakpoint="lg">
        <BoundedContainer breakpoint="lg" width="40%" margin="0">
          <ProjectsToContributeContent />
        </BoundedContainer>
        <BoundedContainer breakpoint="lg" width="25%" margin="0 4rem">
          <Litmus />
        </BoundedContainer>
        <BoundedContainer breakpoint="lg" width="20%" margin="0 2rem">
          <OpenEBS />
        </BoundedContainer>
      </ResponsiveRow>
    </SectionLight>
  )
}

export { ProjectsToContribute }
