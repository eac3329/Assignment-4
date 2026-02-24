1. Difference between getElementById, getElementsByClassName, querySelector

getElementById selects one element using an ID.  
getElementsByClassName selects multiple elements by class and returns an HTMLCollection.  
querySelector selects the first matching CSS selector.  
querySelectorAll selects all matching elements and returns a NodeList.

2. How to create and insert element into DOM

First create the element using document.createElement().  
Then set content or attributes.  
Finally insert it using append() or appendChild().

3. What is Event Bubbling

Event Bubbling means an event starts from the target element and moves upward to its parent elements. You click a child element then the browser executes any click handler attached to that button.The event moves to the parent, triggering its click handler, then to the, and upward.

4. What is Event Delegation

Event Delegation means adding one event listener to a parent element instead of multiple child elements. It improves performance and works for dynamically created elements.

5. preventDefault vs stopPropagation

preventDefault stops the default browser action.  
stopPropagation stops the event from moving up the DOM tree.