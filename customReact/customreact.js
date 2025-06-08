const mainContainer = document.querySelector("#root");

function costomRandom(reactElement, container) {
  /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.propr.href)
    domElement.setAttribute('target', reactElement.propr.target)
  
    container.appendChild(domElement);  
   */

  const domElement = document.createElement(reactElement.type)
  domElement.innerHTML = reactElement.children
  for (const prop in reactElement.propr) {
    if (prop == 'children') continue
    domElement.setAttribute(prop, reactElement.propr[prop])
  }
  container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  propr: {
    href: "https://google.com",
    target: "_blank"
  },
  children: "Click me to visit google"
}

costomRandom(reactElement, mainContainer);


