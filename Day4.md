# babel-plugin-root-import

## install

```bash
npm install babel-plugin-root-import --save-dev
```

## .babelrc

create `.babelrc` file

```json
{
  "presets": ["next/babel"],
  "plugins": [
    [
      "styled-components",
      {
        "ssr": true,
        "displayName": true,
        "preprocess": false
      }
    ],
    [
      "babel-plugin-root-import",
      {
        "rootPathPrefix": "~",
        "rootPathSuffix": "./"
      }
    ]
  ]
}
```

## tsconfig.json

```json
{
  "compilerOptions": {
    ...
    "baseUrl": "./",
    "paths": {
      "~/*": ["*"]
    }
  },
  ...
}
```

## start

```bash
npm run dev
```
