# DOM snapshot script

### Getting Started

To get started, clone the repository and follow these commands:

```bash
# 1. Install dependencies
npm install

# 2. Run the development server with nodemon on - localhost:3000
nodemon index.js

# 3. Put these scripts to the top of observed web app header:

*** 
For NextJs:
***

    <script async src="http://localhost:3000/external"></script>
    <script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || new Map([]);
          function humanTag() {dataLayer.set(...arguments);}
          humanTag("hDOMSnapshot", new XMLSerializer().serializeToString(document));
      `,
        }}
    defer />

*** 
For React and Vanilla JS:
***

    <script async src="http://localhost:3000/external"></script>
    <script
        window.dataLayer = window.dataLayer || new Map([]);
        function humanTag() {dataLayer.set(...arguments);}
        humanTag("hDOMSnapshot", new XMLSerializer().serializeToString(document));
    defer />


# 4. Run observed web app and check result in - hDOMSnapshot.json

```
