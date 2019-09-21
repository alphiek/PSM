import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`


html {
  height: 100%;
  font-size: 16px;
  background-color: #fff;
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

  @media (max-width: 1024px) {
    text-align: center;
  }
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

hr {
  @media (max-width: 1024px) {
    display: none;
  }
}

p {
  font-size: 1rem;
}

`