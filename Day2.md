# Nextjs

## Setup

```bash
mkdir hello-next
cd hello-next
npm init -y
npm install --save react react-dom next
mkdir pages
```

## package.json

```json
"scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
},
```

## Start

```bash
npm run dev
```

## Hello world

- pages/index/index.js

```js
const Index = () => {
  return (
    <div>
      <p>Hello world</p>
    </div>
  );
};

export default Index;
```