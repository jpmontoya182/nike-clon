## Scaffolding the app
```
npm create vite@latest ./ 
```

## dependencies
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## adding tailwind set up
```css
content : [
    './index.html',
    './src/**/*.{js, jsx, ts, tsx}'
] 
```

## adding tailwind dependeces to css file (index.css)
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```


https://www.youtube.com/watch?v=tS7upsfuxmo&t=3601s
1:46:38