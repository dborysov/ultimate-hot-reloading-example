# Ultimate Hot Reloading Example

👉👉👉👉 This project is intended as an *example* of how to fit an application together, the idea is that you read the code and understand how it works - then apply the same approach in your own projects. 👈👈👈👈

This is **NOT** intended as a boilerplate or a starter kit, I don't recommend using it as a base for a project unless you're happy that you know how stuff fits together.

## Goals

  * Only one running node process ✅
  * Client-side Redux reducer hot reloading ✅
  * Server-side Redux reducer hot reloading ✅
  * Client-side React component hot reloading (preserving this.state) ✅
  * Server-side React component hot reloading ✅
  * Server-side express routes hot reloading ✅
  * Client side [css-modules](https://github.com/css-modules/css-modules) hot reloading ✅
  * Using mostly ES6 module syntax, except where dynamic loading is needed ✅
  * Data fetching through a remote API
  * Multiple pages via Routing

## Why?

Hot reloading & related techniques can be used to provide an ultra-fast feedback cycle. Watch this video if you'd like to hear more about why this is great.

[![Video: Confident User Interface Programming - CodeMesh 2016](https://img.youtube.com/vi/62Y9JCOtzGY/0.jpg)](https://www.youtube.com/watch?v=62Y9JCOtzGY)

## Installing

Once cloned locally, run `npm install`. To start the server run `npm start` and visit `http://localhost:3000/` in your browser.

## Try it out

  * Change initial in `reducers/index.js` and hit refresh to see server redux reload
  * Change INC amount in `reducers/index.js` to and hit the button to see client redux reload
  * Change component in `components/App.js` to see client/server react reload
  * Change the responses in `server/app.js` to see the express routes reload
  * Change the CSS in `client/common/layout.css` to see imported CSS reload
  * Change the CSS in `client/components/App.css` to see the imported CSS reload

## Demo

![ultimate-reload-css](https://cloud.githubusercontent.com/assets/133832/10411396/56e276ea-6f64-11e5-8d71-d7006a32c38e.gif)
