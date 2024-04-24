// Document Object Model (DOM) is a programming interface for web documents/applications
// When HTML document is loaded into a web browser, it goes through a process called "parsing"* . During "parsing" , the browser reads the HTML code and creates a tree-like structure known as the DOM (Document Object Model) . The DOM represents the document's structure and allows scripts (like JavaScript) to interact with and manipulate the content
// the tree sctructure of HTML or XML document made up of many small objects/branches(objects in DOM are referring to nodes), everything is treated as a node in DOM i.e every element, attribute, and also whitespace characters (such as spaces, tabs, and newlines) are even represented as single nodes in the DOM tree
// we use "window/document" properties to edit this "DOM", All the properties are stored in "global" object(Usually called "window" object)
// Summary : Dom are made of many Objects , the Objects are not same as js object but they are "node objects" ,these Node objects are rendered by the browser as they intended too (the node object looks like an js object but with different purpose and properties, although u can use object basic properties with them like accessing value by "." notation) ), so whereever u create an element , js return the element node as "node Object", and then "node Object" get redered as visible content on the webpage by the browser
// "window" Object contain All properties even "document" Objects(It contain properties that is focused to work with the HTML document.)
// So "Document" Objects are nested inside "window" object and as we know all works happen inside "window" object u don't need to first access Window and then acess the document object to works with property


// Window/Document Object
// u can log "window" to get all properties of windows
// console.log(window) 
// and To get all Document Properties u can log document:
// console.log(window.document)  both way is correct  
// console.log(document)  will show less properties  
// console.dir(document)  will show all properties

// Window/Document Properties
// U can access "Document"/"window" Properties by just extracting it from the window/document object :
let element = window.document.createElement("p")   //  Either way is correct
let element1 = document.createElement("p")  
// We use these properties to dynamically(changes made by using properties/methods provided by the programming language) customize the DOM on the go


// Acess HTML Elements inside js (Note: Class attribute in elements are represented as Classname in DOM)
document.getElementsByTagName("p") // Will give you a HTML collection(a collection containing html elements , looks same as array but have limited methods) all elements that shared same tag name
document.getElementsByClassName("class") // it also return a HTML collection that share same Class Name as the arguments
document.getElementById("id")     // return the element that using same id 
document.getElementsByName("name") // Returns a NodeList(similar to HTMLCollection but with the ability to store various node types beyond HTML elements, including text nodes, attributes,comments etc. and come with more methods) containing all elements with the same name attribute
document.querySelector("div") // Returns the first element that matches selector , Note: u need to add the sign of query to be selected i.e. "." and "#" 
document.querySelectorAll(".main") // Returns Nodelist containing all element that match same selector
// Reminder : HTML collections and NodeList does look like array but they doesnt hold all methods come with array(although as Node objects , HTMLcollection/NodeList also uses same ways to accesing/assigning value i.e. [index] and "." notation for node objects) so we usually convert them in array in order to work with them : Array.from()


// Manupulating HTML using js

// Attributes
let div = document.getElementsByTagName("div")[0]
div.setAttribute("id","main") // used to set attributes to element , take two arrguments : 1. attribute u want to set 2. value u want to assign to the attribute
div.getAttribute("id") // return the value that is assinged to that attribute
div.removeAttribute("name") // will remove the given attribute from element

// Styling using js
div.style.color = "black" // to apply any style just acess the style property from the element and then access the specific css property and assign the value that u want
// Some Info about a Element
div.offsetHeight // will return the height of the Element
div.offsetWidth // will return the Width of the Element
div.offsetTop // will return the distance from top side (Respect to parent element)
div.offsetLeft // will return the distance from left side (Respect to parent element)

// Creating an Element (one time use only)
let child = document.createElement("div") // return the specific element by creating it
let button = document.createElement("button")

// Injecting Node inside DOM
div.appendChild(child) // will append(add) the node to the end(if u want a specific place u can use next method) of the list of childrens of the specified parent  , Note : Again node is general/preferred way of saying any entity(it can be element,text,attributes ) of the document , "fancy" keywords reminds me of "An idiot admires complexity, a genius admires simplicity" we go simple way
div.insertBefore(button, child); // Insert the new Node before the existing Node ,agrument 1. new Node , 2. the existing node
let a = document.createElement("a")
div.insertAdjacentElement("afterbegin",a ) // takes 2 argument 1.'beforebegin'( Before the targetElement itself), 'afterbegin'(Just inside the targetElement, before its first child) ,'beforeend'(Just inside the targetElement, after its last child) ,'afterend'(After the targetElement itself )2. target element

// Acessing HTML Nodes ( can say accesing Key Values from Document Object)
div.innerHTML  // return all HTML inside the element 
div.outerHTML // return itself
div.children // return Child Elements (HTML collections)
div.firstElementChild // return first child element
div.lastElementChild // return last child element
div.parentElement // return parent Element
div.nextElementSibling // return first sibling Element or Null (if not exist)
// property without "element" keyword init are intended to work for every nodes i.e. :
div.nextSibling // return Node that is just after the target element , Reminder : DOM Consider spaces, tabs, and newlines as TextNode
div.childNodes // returns NodeList containing All nodes in the element 
div.firstChild // return the first Node that is just after the target element
// Even though they are "node objects" but still u can reassign their values as you do in normal objects :)

// Remove Nodes
div.removeChild(child) // remove the specific Child node
a.remove() // remove the node from DOM

// injecting HTMl inside DOM
let p = document.getElementsByTagName("p")[0]
p.innerHTML = "<div id='innerHtml'>Inner Html </div>" // replace existing code with new string value
p.insertAdjacentHTML("afterend","<div id='innerHtml'>After end HTMl</div>")  // Will insert html code at specific place, 2 arguments 1.position 2.html code

// Creating text Node
document.createTextNode("Button") // create text node
let comment = document.createComment("This is a comment") // Create comment Object
child.append(comment)


// Adding text inside elements
button.textContent = "Button" // Both will do same work in injecting (Will remove existing text with the given text) text but are different while extracting text
button.innerText = "Paragraph"
let value = p.innerText

// The Difference Between "innerText" and "textContent" comes while extracting values using these methods
// "textContent" gets the content of all elements, including <script> and <style> elements. In contrast, "innerText" only shows "human-readable" elements.
// "textcontent" won't get effect of css styling that includes indentation, visibilty ,display etc, whereever "innerText" is aware of styling and will get effected with css stylings i.e. indentation/display:none;/visibilty:hidden; (Note: Working of different display styling works differently then expected in DOM so result will be unexpected while extracting values from innerText)
// While extracting values from "innerText" method, these are points u should to consider ,1. Display none only effect child element not parent while extracting value from parents 2. Display:none; won't considered any other css styling further on child/itself if applied to a element i.e indentation/visiblity/display etc. 3. While using visibility:hidden "innerText" simply won't give anything from the elment  
// Moreover, since innerText takes CSS styles into account, reading the value of innerText triggers a reflow to ensure up-to-date computed styles.(Reflows can be computationally expensive, and thus should be avoided when possible.)
// Reflow happens when a browser recalculates the geometry of certain parts of a webpage, This tends to be followed by repainting(Repaint happens when a browser redraws a web page to apply all the visual updates) and using "textContent" can prevent Cross-site scripting (XSS) 
