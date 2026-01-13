import { useEffect } from "react";
import { useLocation } from "react-router";

// Componente utile --- da utilizzare in App.jsx ---
// quando si passa da una pagina all'altra utilizzando il componente Link di React-Router,
// si viene portati in cima alla pagina dato che
// le coordinate di scroll non vengono resettate utilizzando <Link />
function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default ScrollToTopOnRouteChange;
