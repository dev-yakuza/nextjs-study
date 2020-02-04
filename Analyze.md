# Analyze

## install

```bash
npm install --save-dev @next/bundle-analyzer cross-env
```

## next.config.js

```js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({});
```

## script

```bash
"scripts": {
  "dev": "next",
  "build": "next build",
  "start": "next start",
  "analyze": "cross-env ANALYZE=true next build",
  "analyze:server": "cross-env BUNDLE_ANALYZE=server next build",
  "analyze:browser": "cross-env BUNDLE_ANALYZE=browser next build"
},
```

## run

```bash
npm run analyze
```

## why?

- lazy loading modules
- lazy loading components
