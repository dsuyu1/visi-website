// ScrollToTop component to ensure the page scrolls to the top when navigating to a new route
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instantly scroll to the top left of the page
    window.scrollTo(0, 0);
  }, [pathname]); // This effect runs every time the URL path changes

  return null; // This component doesn't render any HTML
}