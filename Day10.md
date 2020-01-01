# Counter

## Setup

### Nextjs

```bash
mkdir counter
cd counter
npm init -y
npm install --save react react-dom next
mkdir pages
```

### gitignore

```bash
# gitignore
touch .gitignore
code .gitignore

## add
node_modules
.next
```

### package.json

```json
"scripts": {
  "dev": "next",
  "build": "next build",
  "start": "next start"
},
```

### typescript

```bash
npm install --save-dev typescript @types/react @types/node
npm run dev
```

## tsconfig.json

```json
// "strict": false,
"strict": true,
```

## styled-components

```bash
npm install --save styled-components
npm install --save-dev @types/styled-components babel-plugin-styled-components
```

## babel

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

## babel-plugin-root-import

```bash
npm install babel-plugin-root-import --save-dev
```

## root import babel

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

## root import tsconfig.json

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
