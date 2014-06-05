// var buttons = require('sdk/ui/button/action');
// var tabs = require("sdk/tabs");

// var button = buttons.ActionButton({
//   id: "mozilla-link",
//   label: "Visit Mozilla",
//   icon: {
//     "16": "./icon-16.png",
//     "32": "./icon-32.png",
//     "64": "./icon-64.png"
//   },
//   onClick: handleClick
// });

// function handleClick(state) {
//   tabs.open("http://www.mozilla.org/");
// }


var widgets = require("sdk/widget");
var tabs = require("sdk/tabs");
var widget = widgets.Widget({
  id: "mozilla-link",
  label: "Mozilla website",
  contentURL: require("sdk/self").data.url("icon-16.png"),
  onClick: function() {
    tabs.open("http://www.mozilla.org/");
  }
});