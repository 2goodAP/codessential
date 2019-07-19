// utility to create html nodes
export function createElt(nodeName, attrs, ...children) {
    let node = document.createElement(nodeName);
    for (let attr of Object.keys(attrs)) {
        node.setAttribute(attr, attrs[attr]);
    }
    for (let child of children) {
        node.appendChild(child);
    }
    return node;
}

