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
}
```

## Start

```bash
npm run dev
```

## hello-world

create `pages/index/index.js`

```js
const Index = () => (
  <div>
    <p>Hello Next.js</p>
  </div>
);

export default Index;
```
