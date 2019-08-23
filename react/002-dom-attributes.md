Sources: 

[Defining Attributes/Props in JSX](https://www.reactenlightenment.com/react-jsx/5.7.html)
[Defining React Node](https://www.reactenlightenment.com/react-nodes/4.1.html)
[Built-in Element factories](https://www.reactenlightenment.com/react-nodes/4.6.html)
[DOM Attributes in React](https://reactjs.org/blog/2017/09/08/dom-attributes-in-react-16.html)


An example of creating a node:

```

var reactNodeLi = React.DOM.li({id:'li1'}, 'one');

``` 

- &quot;React has always provided a JavaScript-centric API to the DOM. Since React components often take both custom and DOM-related props, it makes sense for React to use the camelCase convention just like the DOM APIs &quot;

- So in JSX, `className` => `class`

Except for `aria-*` attributes and common form attributes  (`type`, `name`, `value` etc)
