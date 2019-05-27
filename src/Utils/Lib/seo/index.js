import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import config from './config';

const absoluteUrl = path => `${config.baseUrl}${path}`;
const seoImageURL = file => `${config.imageBaseUrl}${file}`;

const getMetaTags = ({
  title, description, url, contentType, published, updated, category, tags, twitter, image,
}) => {
  const metaTags = [
    { itemprop: 'name', content: title },
    { itemprop: 'description', content: description },
    { name: 'description', content: description },
    { name: 'twitter:site', content: `${config.defaultTwitterAccount}` },
    { name: 'twitter:title', content: `${title} | ${config.baseUrl}` },
    { name: 'twitter:description', content: description },
    { name: 'twitter:creator', content: twitter || `${config.defaultTwitterAccount}` },
    { name: 'og:title', content: `${title} | ${config.baseUrl}` },
    // Refers to the Open Graph content type (for Facebook–see "Object Types" table here)
    { name: 'og:type', content: contentType },
    { name: 'og:url', content: url },
    { name: 'og:description', content: description },
    { name: 'og:site_name', content: `${config.baseUrl}` },
    { name: 'og:locale', content: `${config.locale}` },
    // { name: 'fb:app_id', content: '<FB App ID>' },
  ];

  if (published) metaTags.push({ name: 'article:published_time', content: published });
  if (updated) metaTags.push({ name: 'article:modified_time', content: updated });
  if (category) metaTags.push({ name: 'article:section', content: category });
  if (tags) metaTags.push({ name: 'article:tag', content: tags });
  if (image) {
    metaTags.push({ itemprop: 'image', content: seoImageURL(image) });
    metaTags.push({ name: 'twitter:image:src', content: seoImageURL(image) });
    metaTags.push({ name: 'og:image', content: seoImageURL(image) });
    metaTags.push({ name: 'twitter:card', content: 'summary_large_image' });
  } else {
    metaTags.push({ name: 'twitter:card', content: 'summary' });
  }

  return metaTags;
};

const getHtmlAttributes = ({
  schema
}) => {
  let result = {
    lang: 'en',
  };
  if (schema) {
    // Refers to the schema.org schema for the content where the SEO is being added (for example, AboutPage).
    result = {
      ...result,
      itemscope: undefined,
      itemtype: `http://schema.org/${schema}`,
    }
  }
  return result;
}

getHtmlAttributes.propTypes = {
  schema: PropTypes.string,
};

const SEO = ({
  schema, title, description, path, contentType, published, updated, category, tags, twitter,
}) => (
  <Helmet
    htmlAttributes={getHtmlAttributes({
      schema,
    })}
    title={ title }
    link={[
      { rel: 'canonical', href: absoluteUrl(path) },
    ]}
    meta={getMetaTags({
      title,
      description,
      contentType,
      url: absoluteUrl(path),
      published,
      updated,
      category,
      tags,
      twitter,
    })}
  />
);

SEO.propTypes = {
  schema: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  path: PropTypes.string,
  contentType: PropTypes.string,
  published: PropTypes.string,
  updated: PropTypes.string,
  category: PropTypes.string,
  tags: PropTypes.array,
  twitter: PropTypes.string,
  image: PropTypes.string,
};

export default SEO;

