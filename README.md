# Creating a site with react and tailwind
The idea of this project is practice a little of react, and tailwind, following a youtube tutorial. Here we are creating a clon or Nike page.

This is the video, if you want to follow too
https://www.youtube.com/watch?v=tS7upsfuxmo&t=3601s



# this are other steps that you get also in the vite page, and tailwind page.

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

## Version

- 1.0 : I did the same thing that we have in the tutorial
- 2.0: TODO

    - add other pages, navigate through the page and other sections 
    - connect with an API, currently the data is in the constants folder 
    - improve the performance
    - add docker flow 