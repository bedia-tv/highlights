import { useState, useEffect } from "react";

const MOCK_URL= 'https://soundcloud.com/wisdomdawn/25-komm-susser-tod-come-sweet-death-arianne';

export const useActiveTabLocation = () => {
  const [location, setLocation] = useState(MOCK_URL);

  useEffect(() => {
    if(!chrome || !chrome.tabs) {
      setLocation(MOCK_URL);
      return ;
    }

    chrome.tabs.query({ active: true, lastFocusedWindow: true }, function(
      tabs
    ) {
      console.log(tabs[0].url || "No URL");
      setLocation(tabs[0].url || "No URL");
    });
  }, []);

  return location;
};
