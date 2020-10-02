import React from "react";

import { Layout } from "../components/layout";
import {
  Head,
  ProjectsToContribute,
  SecondHead,
  TimerComponent,
} from "../components/sections/Home";
import { SEO } from "../components/seo";

const App = () => {
  return (
    <Layout>
      <SEO />
      <Head />
      <SecondHead />
      <ProjectsToContribute />
      <TimerComponent />
    </Layout>
  );
};

export default App;
