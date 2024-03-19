chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "searchOnSpotify",
      title: "Search on Spotify",
      contexts: ["selection"],
      
    });
  });
  
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "searchOnSpotify" && info.selectionText) {
      const query = encodeURIComponent(info.selectionText);
      const url = `https://open.spotify.com/search/${query}`;
      const nextTabIndex = tab.index + 1;
      chrome.tabs.create({ url, index: nextTabIndex });
    }
  });
  