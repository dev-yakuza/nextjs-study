# React

ユーザインターフェース構築のための`JavaScriptライブラリ`

- 宣言的な View
- コンポーネントベース
- 一度学習すれば、どこでも使える(React, React Native)

## Start

- Load Javascript Library(Example/cdn)

```html
<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
```

- 生React (Webpack, Babel)
  - [Webpack](https://webpack.js.org/)
  - [Babel](https://babeljs.io/)

- [create-react-app](https://github.com/facebook/create-react-app)

```bash
npm install -g create-react-app
npm init react-app my-app
# npx create-react-app my-app
cd my-app
npm start
```

- [Meteor](https://guide.meteor.com/react.html)

- [Next.js](https://nextjs.org/)
  - SSR(Server Side Rendering)
  - Static Exporting
  - Routing
  - Automatic Code Splitting

## First Project With Nextjs

### Setup

```bash
mkdir hello-next
cd hello-next
npm init -y
npm install --save react react-dom next
mkdir pages
```

### gitignore

create `.gitignore` file

```bash
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

### Run

```bash
npm run dev
```