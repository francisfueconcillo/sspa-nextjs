## SSPA with NextJS
Integration of SSPA with Next JS


* Currently, it only runs sspa by webpack-cli (outside nextjs) so that it can be hosted in Vercel
* Original package.json commands:
```
"scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "sspa": "webpack serve --port 9000 --env isLocal"
  },

```