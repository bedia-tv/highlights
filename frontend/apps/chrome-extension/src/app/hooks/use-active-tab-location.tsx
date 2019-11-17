import { useState, useEffect } from "react";

const MOCK_URL= 'https://www.youtube.com/watch?v=zSsTG3Flo-I';

export const useActiveTabLocation = () => {
  const [location, setLocation] = useState("");

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
