import React from 'react';

// Components
import { SEO, Layout, Navbar, ActionMarketResearch, Footer } from '../../components';

const ActionMarketResearchPage = () => (
  <>
    <SEO title="Action Market Research" />
    <Layout>
      <Navbar />
      <ActionMarketResearch />
      <Footer />
    </Layout>
  </>
);
export default ActionMarketResearchPage;
