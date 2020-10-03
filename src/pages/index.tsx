import React from 'react'
import { Layout } from '../components/layout'
import {
  Footer,
  Head,
  ProjectsToContribute,
  SecondHead,
  Sponsors,
} from '../components/sections/Home'
import { SEO } from '../components/seo'

const App = () => {
  return (
    <Layout>
      <SEO />
      <Head />
      <SecondHead />
      <ProjectsToContribute />
      <Sponsors />
      <Footer />
    </Layout>
  )
}

export default App
