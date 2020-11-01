function openPage() {
  browser.tabs.create({
    url: "https://kumano-ryo.jimdofree.com/"
  });
}

browser.browserAction.onClicked.addListener(openPage);