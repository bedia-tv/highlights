import { useState, useEffect } from "react";

const MOCK_URL= 'https://soundcloud.com/wisdomdawn/25-komm-susser-tod-come-sweet-death-arianne';

export const useActiveTabLocation = () => {

  /**
   * A service to query the browser for the
   * currently active tab's url info
   * @return the url in the current tab
   */


  const [location, setLocation] = useState(MOCK_URL);

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
