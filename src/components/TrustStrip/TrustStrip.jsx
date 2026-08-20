import React from 'react';
import './TrustStrip.css';

const TrustStrip = () => {
  return (
    <section className="trust-strip-section">
      <div className="trust-strip-inner">
        <p className="trust-strip-headline">
          Trusted by businesses across Australia and Nepal
        </p>
        <div className="trust-strip-items">
          <span className="ts-item">Australia</span>
          <span className="ts-separator"></span>
          <span className="ts-item">Nepal</span>
          <span className="ts-separator"></span>
          <span className="ts-item">AI Systems</span>
          <span className="ts-separator"></span>
          <span className="ts-item">Software Engineering</span>
          <span className="ts-separator"></span>
          <span className="ts-item">Digital Platforms</span>
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
