import { useEffect } from "react";

export interface MetaTags {
  title: string;
  description: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
}

export const useMetaTags = (meta: MetaTags) => {
  useEffect(() => {
    // Update title
    document.title = meta.title;

    // Update or create description meta tag
    let descriptionTag = document.querySelector(
      'meta[name="description"]'
    ) as HTMLMetaElement | null;
    if (!descriptionTag) {
      descriptionTag = document.createElement("meta");
      descriptionTag.name = "description";
      document.head.appendChild(descriptionTag);
    }
    descriptionTag.content = meta.description;

    // Update or create canonical tag
    let canonicalTag = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;
    if (!canonicalTag && meta.canonical) {
      canonicalTag = document.createElement("link");
      canonicalTag.rel = "canonical";
      document.head.appendChild(canonicalTag);
    }
    if (canonicalTag && meta.canonical) {
      canonicalTag.href = meta.canonical;
    }

    // Update OG tags if provided
    if (meta.ogTitle) {
      let ogTitle = document.querySelector(
        'meta[property="og:title"]'
      ) as HTMLMetaElement | null;
      if (!ogTitle) {
        ogTitle = document.createElement("meta");
        ogTitle.setAttribute("property", "og:title");
        document.head.appendChild(ogTitle);
      }
      ogTitle.content = meta.ogTitle;
    }

    if (meta.ogDescription) {
      let ogDesc = document.querySelector(
        'meta[property="og:description"]'
      ) as HTMLMetaElement | null;
      if (!ogDesc) {
        ogDesc = document.createElement("meta");
        ogDesc.setAttribute("property", "og:description");
        document.head.appendChild(ogDesc);
      }
      ogDesc.content = meta.ogDescription;
    }

    if (meta.ogImage) {
      let ogImage = document.querySelector(
        'meta[property="og:image"]'
      ) as HTMLMetaElement | null;
      if (!ogImage) {
        ogImage = document.createElement("meta");
        ogImage.setAttribute("property", "og:image");
        document.head.appendChild(ogImage);
      }
      ogImage.content = meta.ogImage;
    }

    if (meta.ogType) {
      let ogType = document.querySelector(
        'meta[property="og:type"]'
      ) as HTMLMetaElement | null;
      if (!ogType) {
        ogType = document.createElement("meta");
        ogType.setAttribute("property", "og:type");
        document.head.appendChild(ogType);
      }
      ogType.content = meta.ogType;
    }
  }, [meta]);
};
