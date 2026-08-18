import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, url, image, schema }) => {
  const siteTitle = 'Codex Neural | Future-Ready AI & IT Solutions';
  let fullTitle = siteTitle;
  if (title) {
    fullTitle = title.includes('Codex Neural') ? title : `${title} | Codex Neural`;
  }
  
  const defaultDescription = 'Codex Neural is a global product engineering company specializing in AI solutions, custom enterprise software, cloud infrastructure, and digital platforms.';
  const finalDescription = description || defaultDescription;
  const defaultKeywords = 'Codex Neural, AI solutions, artificial intelligence, enterprise software, cloud engineering, web development, mobile apps, UI UX design, DevOps, software engineering';
  const finalKeywords = keywords || defaultKeywords;
  
  const siteUrl = 'https://www.codexneural.com';
  const cleanUrlPath = url ? (url.startsWith('/') ? url : `/${url}`) : '';
  const currentUrl = `${siteUrl}${cleanUrlPath}`;
  const ogImage = image ? (image.startsWith('http') ? image : `${siteUrl}${image}`) : `${siteUrl}/og-image.jpg`;

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Codex Neural" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={fullTitle} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@CodexNeural" />
      <meta name="twitter:creator" content="@CodexNeural" />
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
