import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`


html {
  height: 100%;
  font-size: 16px;
  background-color: #F8F8F8;
  width: 100%;
}


body {
  font-family: Roboto, Arial, Helvetica, sans-serif;
  font-size: 1rem;
  line-height: 140%;
  font-weight: normal;
  text-rendering: optimizeLegibility;
  color: #3D3F43;
  word-wrap: normal;
  font-kerning: normal;
  margin-bottom: 1rem;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

*:before {
  box-sizing: border-box;
}
*:after {
  box-sizing: border-box;
}

footer,
header,
main,
nav,
section {
  display: block;
}

main {
  margin-top: 100px;
}

header {
  width: 100%;
  position: fixed;
  background: #fff;
  top: 0;
  left: 0;
  z-index: 50;
}

nav {
  position: relative;
  display: flex;
  font-size: 0.9rem;
  align-items: center;
  height: 100%;
  padding: 2rem;
  max-height: 100px;
}

ul {
  list-style: none;
  list-style-image: none;
  list-style-type: none;
  display: flex;
  justify-content: center;
}

li {
  z-index: 2;
}

a {
  font-size: 0.9rem;
  font-weight: 600;
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
  text-decoration: none;
  text-transform: uppercase;
  color: #3D3F43;
  @media (max-width: 1024px) {
    font-size: 1rem;
  }
}

a:active,
a:hover {
  outline-width: 0;
}

h1 {
  font-family: 'Roboto Slab', Arial, Helvetica, sans-serif;
  color: #F8F8F8;
  font-weight: 700;
  font-size: 3.052rem;
  letter-spacing: 2px;
  line-height: 120%;
}

h2 {
  font-family: 'Roboto Slab', Arial, Helvetica, sans-serif;
  color: #57585A;
  font-size: 1.953rem;
  line-height: 135%;
}

h4 {
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  color: #DBECE3;
  margin-bottom: 1rem;
}

p {
  font-size: 0.9rem;
  color: #3D3F43;
  letter-spacing: 0.5px;
}


button {
  font-size: inherit;
  display: inline-block;
  border: none;
  text-decoration: none;
  background: transparent;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  box-sizing: border-box;
}

button:hover,
button:focus {
  background: transparent;
}

button:focus {
  outline: none;
}

button:active {
  background: tranparent;
}

`