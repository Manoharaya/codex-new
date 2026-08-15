import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, url, schema }) => {
  const siteTitle = 'Codex Neural | Premium Digital Product Engineering';
  const fullTitle = title ? `${title} | Codex Neural` : siteTitle;
  const defaultDescription = 'Codex Neural is a premium product engineering firm specializing in AI, enterprise software, web, and mobile applications. We build digital products that drive business growth.';
  const finalDescription = description || defaultDescription;
  const defaultKeywords = 'software development, AI solutions, web applications, mobile apps, enterprise software, cloud infrastructure, UI/UX design, Codex Neural';
  const finalKeywords = keywords || defaultKeywords;
  
  // Ensure the base URL is consistent and trailing slash logic is robust
  const siteUrl = 'https://www.codexneural.com';
  const cleanUrlPath = url ? (url.startsWith('/') ? url : `/${url}`) : '';
  const currentUrl = `${siteUrl}${cleanUrlPath}`;
  const ogImage = `${siteUrl}/og-image.jpg`;

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

      {/* Structured Data (JSON-LD) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
