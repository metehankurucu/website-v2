import { useEffect, useState } from "react";

const useHeaderMenuVisible = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [shouldRenderMenu, setShouldRenderMenu] = useState(false);

  useEffect(() => {
    if (menuVisible) {
      setShouldRenderMenu(true);
    } else {
      setTimeout(() => setShouldRenderMenu(false), 200);
    }
  }, [menuVisible]);

  return {
    menuVisible,
    shouldRenderMenu,
    toggleMenu: () => setMenuVisible((bool) => !bool),
  };
};

export default useHeaderMenuVisible;
