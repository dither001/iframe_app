:warning: *Use of this software is subject to important terms and conditions as set forth in the License file* :warning:

Iframe App
=========================
![](https://samson.zende.sk/projects/iframe_app/stages/production.svg?token=84457be797bb7a1e00d1f57575d5112a)

This is the Iframe app for Zendesk, formerly known as Sidebar Icon app.

It was designed to allow Zendesk agents to quickly flip to a web site and then flip back to their tickets without interrupting their workflow. This can be especially useful if you use a page to look up things like orders or other data from another system. The Iframe app displays an external source into a separate page in Zendesk that can be accessed through a button on the left hand navigation bar. Check out an article that details the functionality in our [knowledge base](https://support.zendesk.com/entries/22051533-Sidebar-and-Text-apps-for-the-new-Zendesk).

The Iframe app supports websites that include the Zendesk App Framework (ZAF) SDK. Check out [Iframes in Apps](https://developer.zendesk.com/apps/docs/agent/iframes_in_apps) to learn more.

Please submit bug reports to [Zendesk](https://support.zendesk.com/requests/new). Pull requests are welcome.


Testing
=========================
A bit of test coverage can be run with `node ./test/background_test.js`. Unfortunately testing `iframe.js` is problematic in node, because it doesn't support `document.createElement`, and stubbing that out turns out writing more *stub* code, than the code we're trying to *test*.


Contributing
=========================
Improvements are always welcome. Please follow these steps to contribute:

1. Submit a Pull Request with a detailed explanation of changes
2. Receive a :+1: from a core team member
3. Core team will merge your changes
