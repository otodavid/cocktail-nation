  
import { useEffect } from "react";
import { withRouter } from "react-router-dom";

/**
//  * @return {null}
 */
function PageNavigationListener({ history }) {
  useEffect(() => {
    // history.listen() returns a function that can be called used to stop the listener
    const unlisten = history.listen(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    });
    return () => {
      unlisten();
    };
  }, [history]);

  return null;
}

export default withRouter(PageNavigationListener);