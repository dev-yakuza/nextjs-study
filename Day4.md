# styled-components

## install

```bash
npm install --save styled-components
npm install --save-dev babel-plugin-styled-components
```

## .babelrc

create `.babelrc` file

```json
{
  "presets": [
    "next/babel"
  ],
  "plugins": [
    [
      "styled-components",
      {
        "ssr": true,
        "displayName": true,
        "preprocess": false
      }
    ]
  ]
}
```

## start

```bash
npm run dev
```