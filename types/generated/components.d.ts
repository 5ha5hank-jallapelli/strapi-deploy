import type { Schema, Attribute } from '@strapi/strapi';

export interface GlobalCard extends Schema.Component {
  collectionName: 'components_global_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    title: Attribute.String;
    para: Attribute.Text;
    icon: Attribute.Media;
  };
}

export interface LinksNavLink extends Schema.Component {
  collectionName: 'components_common_nav_links';
  info: {
    displayName: 'NavLink';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    href: Attribute.String;
  };
}

export interface NavbarFeatures extends Schema.Component {
  collectionName: 'components_nav_items_features';
  info: {
    displayName: 'Features';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    links: Attribute.Component<'links.nav-link', true>;
  };
}

export interface NavbarSolutions extends Schema.Component {
  collectionName: 'components_nav_items_solutions';
  info: {
    displayName: 'Solutions';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    links: Attribute.Component<'links.nav-link', true>;
  };
}

export interface SeoSeo extends Schema.Component {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'SEO';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.Text;
    og_image: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'global.card': GlobalCard;
      'links.nav-link': LinksNavLink;
      'navbar.features': NavbarFeatures;
      'navbar.solutions': NavbarSolutions;
      'seo.seo': SeoSeo;
    }
  }
}
