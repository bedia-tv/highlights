import { useState, useEffect } from "react";

const MOCK_URL= 'https://www.youtube.com/watch?v=zSsTG3Flo-I';
const EXTENSION_OPENED = 'extension-opened';

export const useActiveTabLocation = () => {

  /**
   * A service to query the browser for the
   * currently active tab's url info
   * @return the url in the current tab
   */


  const [location, setLocation] = useState("");

  useEffect(() => {
    if(!chrome || !chrome.tabs) {
      setLocation(MOCK_URL);
      return ;
    }

    chrome.tabs.query({ active: true, lastFocusedWindow: true }, function(
      tabs
    ) {
      setLocation(tabs[0].url || "No URL");
    });
  }, []);

  return location;
};
