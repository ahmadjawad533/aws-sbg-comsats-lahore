import { useEffect } from 'react';

const BASE_TITLE = 'AWS Student Builder Group COMSATS Lahore';

export function useDocumentTitle(title?: string, description?: string) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${BASE_TITLE}` : `${BASE_TITLE} | Official Chapter`;
    document.title = fullTitle;

    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      } else {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        metaDescription.setAttribute('content', description);
        document.head.appendChild(metaDescription);
      }
    }
  }, [title, description]);
}
