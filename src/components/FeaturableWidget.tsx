import { useEffect, useRef } from "react";

const WIDGET_ID = "featurable-02d896b2-2c43-46ae-bbe6-9783d9fc0c61";
const SCRIPT_SRC = "https://featurable.com/assets/v2/carousel_default.min.js";

export default function FeaturableWidget() {
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;

    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.defer = true;
    script.charset = "UTF-8";
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return <div id={WIDGET_ID} data-featurable-async />;
}
