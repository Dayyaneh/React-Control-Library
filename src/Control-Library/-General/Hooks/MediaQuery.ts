import {useEffect, useState} from 'react';

export const MobileQuery: string = 'screen and (max-width: 767px)';
export const TabletQuery: string = 'screen and (min-width: 767px) and (max-width: 1024px)';
export const DesktopQuery: string = 'screen and (min-width: 1025px)';

const useMediaQuery = (query: string) => {
  const mediaMatch = window.matchMedia(query);
  const [matches, setMatches] = useState(mediaMatch.matches);

  useEffect(() => {
    const handler = (e: any) => setMatches(e.matches);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  });
  return matches;
};

export default useMediaQuery;