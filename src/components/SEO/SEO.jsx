import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, url }) => {
  const siteTitle = 'CodexNeural | Premium Digital Product Engineering';
  const fullTitle = title ? `${title} | CodexNeural` : siteTitle;
  const defaultDescription = 'CodexNeural is a premium product engineering firm specializing in AI, enterprise software, web, and mobile applications. We build digital products that drive business growth.';
  const finalDescription = description || defaultDescription;
  const defaultKeywords = 'software development, AI solutions, web applications, mobile apps, enterprise software, cloud infrastructure, UI/UX design, CodexNeural';
  const finalKeywords = keywords || defaultKeywords;
  const siteUrl = 'https://codexneural.com';
  const currentUrl = url ? `${siteUrl}${url}` : siteUrl;
  const ogImage = `${siteUrl}/og-image.jpg`; // Placeholder for actual OG image

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* Canonical Link */}
      <link rel="canonical" href={currentUrl} />
    </Helmet>
  );
};

export default SEO;
