import React from 'react'
import { Layout } from '../components/layout'
import {
  Footer,
  Head,
  ProjectsToContribute,
  SecondHead,
} from '../components/sections/Home'
import { SEO } from '../components/seo'

const App = () => {
  return (
    <Layout>
      <SEO />
      <Head />
      <SecondHead />
      <ProjectsToContribute />
      <Footer />
    </Layout>
  )
}

export default App
