import React from 'react';

/**
 * @description
 * Widget - Header
 */

const Header = () => (
  <div>
    <div className="background-masker header-top" />
    <div className="background-masker header-left" />
    <div className="background-masker header-right" />
    <div className="background-masker header-bottom" />
  </div>
);

/**
 * @description
 * Widget - Subheader
 */
const Subheader = () => (
  <div>
    <div className="background-masker subheader-left" />
    <div className="background-masker subheader-right" />
    <div className="background-masker subheader-bottom" />
  </div>
);

/**
 * @description
 * Widget - Content
 */
const Content = () => (
  <div>
    <div className="background-masker content-top" />
    <div className="background-masker content-first-end" />
    <div className="background-masker content-second-line" />
    <div className="background-masker content-second-end" />
    <div className="background-masker content-third-line" />
    <div className="background-masker content-third-end" />
  </div>
);

/**
 * @exports Wrapper
 * @type Component
 */
const Wrapper = () => (
  <div className="timeline-wrapper">
    <div className="timeline-item">
      <div className="animated-background">
        <Header />
        <Subheader />
        <Content />
      </div>
    </div>
  </div>
);

export default Wrapper;
