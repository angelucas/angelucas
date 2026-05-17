import { experience } from '@/data/experience';
import type { Lang } from '@/i18n/ui';

export interface StructuredDataInput {
  lang: Lang;
  pageUrl: URL;
  siteOrigin: URL;
  name: string;
  pageTitle: string;
  description: string;
  imageUrl: URL;
  email: string;
  locationLabel: string;
  sameAs: string[];
}

/** Person + ProfilePage JSON-LD for portfolio home routes. */
export function buildStructuredData(input: StructuredDataInput) {
  const {
    lang,
    pageUrl,
    siteOrigin,
    name,
    pageTitle,
    description,
    imageUrl,
    email,
    locationLabel,
    sameAs,
  } = input;

  const inLanguage = lang === 'pt-br' ? 'pt-BR' : 'en';
  const current = experience[0];
  const personId = `${siteOrigin.href}#person`;

  const person: Record<string, unknown> = {
    '@type': 'Person',
    '@id': personId,
    name,
    url: pageUrl.href,
    image: imageUrl.href,
    email,
    jobTitle: current.role[lang],
    worksFor: {
      '@type': 'Organization',
      name: current.company,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: locationLabel.split(',')[0]?.trim() ?? locationLabel,
      addressCountry: 'BR',
    },
    sameAs,
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfilePage',
        '@id': `${pageUrl.href}#webpage`,
        url: pageUrl.href,
        name: pageTitle,
        description,
        inLanguage,
        isPartOf: {
          '@type': 'WebSite',
          '@id': `${siteOrigin.href}#website`,
          url: siteOrigin.href,
          name,
          inLanguage: ['pt-BR', 'en'],
        },
        mainEntity: { '@id': personId },
      },
      person,
    ],
  };
}
