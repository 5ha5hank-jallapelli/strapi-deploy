import type { Schema, Attribute } from '@strapi/strapi';

export interface CommonNavLink extends Schema.Component {
  collectionName: 'components_common_nav_links';
  info: {
    displayName: 'NavLink';
  };
  attributes: {
    label: Attribute.String;
    href: Attribute.String;
  };
}

export interface CommonNavbar extends Schema.Component {
  collectionName: 'components_common_navbars';
  info: {
    displayName: 'Navbar';
  };
  attributes: {
    logo: Attribute.String;
    features: Attribute.Component<'nav-items.features', true>;
  };
}

export interface NavItemsFeatures extends Schema.Component {
  collectionName: 'components_nav_items_features';
  info: {
    displayName: 'Features';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    links: Attribute.Component<'common.nav-link', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'common.nav-link': CommonNavLink;
      'common.navbar': CommonNavbar;
      'nav-items.features': NavItemsFeatures;
    }
  }
}
