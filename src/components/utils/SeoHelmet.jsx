import React from 'react';
import { Helmet } from 'react-helmet';
//json
import metaDecorator from '../../metaDecorator.json';

const SeoHelmet = ({ title, description, imageUrl, imageAlt }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta property='og:title' content={title} />
      <meta name='description' content={description} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={imageUrl} />
      <meta
        property='og:url'
        content={
          metaDecorator.hostname +
          window.location.pathname +
          window.location.search
        }
      />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:image:alt' content={imageAlt} />
    </Helmet>
  );
};

export default SeoHelmet;
