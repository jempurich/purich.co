import IndexLayout from '../layouts';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import { SiteHeader, outer, inner, SiteMain } from '../styles/shared';
import * as React from 'react';
import { css } from '@emotion/core';

import { PostFullHeader, PostFullTitle, NoImage, PostFull } from '../templates/post';
import { PostFullContent } from '../components/PostContent';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';

const PageTemplate = css`
  .site-main {
    background: #fff;
    padding-bottom: 4vw;
  }
`;

const About: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>About</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header css={[outer, SiteHeader]}>
        <div css={inner}>
          <SiteNav />
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <article className="post page" css={[PostFull, NoImage]}>
          <PostFullHeader>
            <PostFullTitle>About</PostFullTitle>
          </PostFullHeader>

          <PostFullContent className="post-full-content">
            <div className="post-content">
              <h2 id="purich-pumiwatana"><strong>Purich Pumiwatana</strong></h2>
              <br>
              <h3 id="experience"><strong>Experience</strong></h3>
              <h4 id="front-end-developer-tdcx"><strong>Front End Developer / <strong><strong>TDCX</strong></strong></strong></h4>
              <p>September 2018 - Present, Kuala Lumpur, Malaysia<br>Tag Implementation Specialist at Google</p>
              <ul>
                <li>Responsible for helping sales teams in the region deploy leads, implement google tags, optimize ads performance, enable integration and troubleshoot issues with more than 80% implementation rate for further ads campaigns optimization</li>
                <li>Received excellent feedback from advertisers with 90% CSAT(customer satisfaction survey) over 500+ customers by striving to give actionable, encouraging, and helpful feedback to advertisers</li>
                <li>Delivery implementation to grow advertiser's websites, grow advertiser's business, and grow number of google ads advertisers</li>
              </ul>
                <h4 id="digital-director-vathanagul-group-co-ltd"><strong>Digital Director / <strong><strong>Vathanagul Group co. LTD</strong></strong></strong></h4>
                <p>May 2016 - August 2018, Bangkok, Thailand</p>
                <ul>
                  <li>Working based on digital innovation and design to fulfil marketing services</li>
                  <li>Created online marketing activities/services to increase activation, sales and usage of the product by developing website and mobile application</li>
                  <li>Grew revenue for print magazine company by creating an online magazine website and online content as solutions to their business</li>
                </ul>
                <h4 id="webdeveloper-kitecreations"><strong>WebDeveloper /<strong><strong>KiteCreations</strong></strong></strong></h4>
                <p>May 2015 - July 2015, Bangkok, Thailand<br></p>
                <h3 id="education"><strong>Education</strong></h3>
                <h4 id="king-mongkut-s-university-of-technology-thonburi"><strong>King Mongkut's University of Technology Thonburi</strong></h4>
                <p>Bachelor of Science - BS, Applied Computer Science<br>2013 - 2016, Bangkok, Thailand</p>
            </div>
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
