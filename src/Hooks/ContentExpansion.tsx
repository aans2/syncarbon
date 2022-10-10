import { useEffect, useRef, useState } from "react";
import { useFrameDrawerStyle } from "../Components/Frame/Components/FrameDrawer/Style";

function useContentExpansion() {
  const frameModalStyle = useFrameDrawerStyle();

  const [expanded, setExpanded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (expanded) {
      setShowContent(true);
    } else {
      timeoutRef.current = setTimeout(
        () => setShowContent(false),
        frameModalStyle.time
      );
    }
    // eslint-disable-next-line
  }, [expanded, showContent]);

  return [showContent, expanded, setExpanded] as [
    boolean,
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ];
}

export default useContentExpansion;
