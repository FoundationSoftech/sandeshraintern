import { useEffect } from 'react';
import { useLocation, Outlet } from 'react-router-dom';

function Layout() {
  const location = useLocation();

  // Scroll to top whenever the pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return <Outlet />; // Renders the child route components
}

export default Layout;