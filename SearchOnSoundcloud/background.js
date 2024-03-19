chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "searchOnSoundcloud",
      title: "Search on Soundcloud",
      contexts: ["selection"],
      
    });
  });
  
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "searchOnSoundcloud" && info.selectionText) {
      const query = encodeURIComponent(info.selectionText);
      const url = `https://soundcloud.com/search?q=${query}`;
      const nextTabIndex = tab.index + 1;
      chrome.tabs.create({ url, index: nextTabIndex });
    }
  });
  