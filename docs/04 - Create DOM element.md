The DOM is an programming interface for HTML and XML document. It is well explained on the [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/API/Document\_Object\_Model/Introduction). We are using this interface for creating HTML elements and adding these elements to the DOM.  

**Default - simple pattern**

```js
// reference to the Dom
let container: HTMLElement = document.getElementById('container');

// create an element
let imgElement: HTMLImageElement = document.createElement('img');
imgElement.src = './assets/images/rocket.png';
imgElement.className = 'rocket';
imgElement.alt = 'nice little rocket';

// add it to the Dom
container.appendChild(imgElement);
```

In this simple example we first find a reference(line 2) to an existing HTML element. In this case a `div` with a `id` of `container`. Then we create an image element(line 5) and add some attributes(Line 6 - 8). Lastly we add the created image element as a child of the container element.

**Generic function**

```js
/**
 * Generic function to create new DOM elements
 *
 * @param properties
 * @returns {Element}
 */
function createDomElement(properties: domConfig): HTMLElement {
    //Create the element
    var domElement = document.createElement(properties.tagName);

    //Loop through the attributes to set them on the element
    var attributes = properties.attributes;
    for (var prop in attributes) {
        domElement.setAttribute(prop, attributes[prop]);
    }

    //If any content, set the inner HTML
    if (properties.content) {
        domElement.innerHTML = properties.content;
    }

    //Return to use in other functions
    return domElement;
}
```

Function call of the generic function createDomElement.

In the code example we create a generic function for creating HTML elements. The most interesting part is the properties parameter. This is an object containing the tag name, content and attributes of the DOM element which we want to create. We created an interface for this object so the parameter itself is also typed.

Interface

```js
interface domConfig {
    tagName: string,
    attributes: {
        [propName: string]: any
    },
    content?: string
}
```

Generic function with template literal

```js
function createDomElementTemplateString(properties: domConfig) {

    const renderClasses = () => {
        let classesString: string = '';
        Object.keys(properties.attributes).map(
            function (key: string, index: number) {
                classesString += `${key = properties.attributes[key]}`; //as a template string
            }
        )
        return classesString;
    };

    return `<${properties.tagName} ${renderClasses()}>${properties.content}</${properties.tagName}>`

}
```

In this example we converted the creation of elements into the use of an template string.