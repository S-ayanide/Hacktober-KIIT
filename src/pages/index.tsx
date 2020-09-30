import React from 'react'
import { Layout } from '../components/layout'
import { Head, SecondHead } from '../components/sections/Home'
import { SEO } from '../components/seo'

const App = () => {
  return (
    <Layout>
      <SEO />
      <Head />
      <SecondHead />
    </Layout>
  )
}

export default App
