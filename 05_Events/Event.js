// Events In Dom
// Browser give u many users/Inbuilt Events/properties that u can use (i.e. alert() , focus() , prompt() etc.)
// console.log(window);  // Will give you all Windows Events/Properties

// Event Lisnters : used to listen to a specific event
// Adding Event Lisnters

// 1. U can assign functions to Event so whenever the event happen the fmc will execute :
document.onclick = ()=>{ 
     // console.log("OnClick")
}
// 2.  attachEvent() Method  , Note: this method only used to works in Internet Explorer and Opera,
// 3. In "jQuery" u could use "on" method instead of "addEventListener" (Works exactly same), Fact: JQuery is powerfull Library and used Most of the time before React  
// All Above methods work fine or used in Early time only but the best menthod suggested now is no. 4
// 4. u can use "addEventListener" Method that can be used to listen all type of events and it's more usefull
// It take 3 arguments , 1. Event type 2.  callback fnc that should be executed when the specified event occurs. 3. A boolean value known as "useCapture" indicating whether to use "capture phase"(Event will start from paret to target) or the "bubbling phase"(target to parent) of the event.When an event occurs, it goes through both phases but which phase triggers the event listener depends on usecapture : true(capture phase) false/default(bubbling phase)

let div = document.getElementById("main") // Main Div Containing All images
let img = div.children[0] // first Image

div.addEventListener("click", (e)=>{
// console.log("click on Div"); 
},true)   // true (capture phase) , means when Event will trigger ,Events will be listened from Parent(div) followed by it's children (img)
// Example : if there is Div with eventlistener attached to itself & children then if "useCapture" is true it will first execute parents "eventlistner" fnc then followed by it's child and if "useCapture" is false (which is default) , it will first execute children Eventlistner fnc then followed by parents
// This only usefull when u have same Eventlisteners attached to Both parents & Child which cause both events to trigger at same time

// Remove Eventlistner : removes an event listener previously registered with same arguments
document.removeEventListener("click",()=>{}) // This will remove the specific eventlistner if all the arguments matches with "addEventListner()" method and even if "usecapture" mistmatched or any single thing like fnc mismatched, then this has no effect.

// u can also make fnc outside the Eventlistner method and just give the "reference" of the fnc and method will call it
img.addEventListener("click",fnc)
function fnc() {
//    console.log("click on Image"); 
}

// The above Example display the use of third argument in "addEventListener" Method i.e. "useCapture"


// Event object (used as "e")
// When you define an event handler function in JavaScript and attach it to an HTML element using addEventListener, the function automatically receives an event object as its first parameter ,so u can use it inside fnc to get info about that event, such as a click or a keypress. The "e" (or sometimes "event") parameter allows you to access information about the event, such as the type of event, the target element, and other relevant details.
document.addEventListener("click",(e)=>{
//    console.log(e.target);  // will give the target element where the event is being triggered (Will give the precised element that event triggered on)
})
// it also contain info of the element "the event" triggered on , u can access the element by using ".target" property
// It also have some methods that allow you to control the default behavior associated with certain events.
// 1. preventDefault()  This method is used to prevent the default action associated with an event  ex. "anchor" tag , "submit" buttom , right click etc.
let link = document.getElementById("link")
link.addEventListener("click",(e)=>{
     e.preventDefault() // this will stop the default behavior of that event i.e. redirecting to that link when click
})

// 2. stopPropagation() This method is used to stop the event from propagating up or down the DOM hierarchy. Reminder: like "usecapture" in "addvEventlistuner" used to decide the propagation of phase but "stopPropagation" used to stop the propagation Note: if "usecapture" start from child to parent(bubbling phase) u have to use "stopPropagation()" on child and if "usecapture" is true(capture phase) u have use "stopPropagation()" on parent
img.addEventListener("click", (e)=>{
     // e.stopPropagation()  // make sure "usecapture" is false on parent
     // console.log("clicked on Image"); 
}) 
// Note : don't get confused with these fancy naming , "usecapture" is parameter that determine that in which phase the event will be active whereas "Event propagation" is a process("Capturing Phase" and "Bubbling Phase" execution respectively) that browser automatically handles when an event occurs on an HTML element. but u have the option to to choose which propgation u want by defining "usecapture" value 



// Event Object Properties ("e" or "event")
document.addEventListener("click",(event)=>{

 let client_value = `X :${event.clientX} & Y:${event.clientY} `   // These properties provide the horizontal and vertical coordinates of the mouse pointer relative to the browser's viewport.
 let page_value   = `X :${event.pageX} & Y:${event.pageY} `   // These properties provide the horizontal and vertical coordinates of the mouse pointer relative to the whole document.
 let screen_value = `X :${event.screenX} & Y:${event.screenY} `   // These properties provide the horizontal and vertical coordinates of the mouse pointer relative to the screen.


})



// Events Type

// Keyboards Events :
// Keydown/keypress : when key pressed  ( Note : Both are same but "keypress" is designed for modern browser  , still both do same work)
document.addEventListener("keydown",(e)=>{
//  console.log(e.key)   // ".key" method will give you the key u pressed         
//  console.log(e.code) // ".code" method will provide a physical key identifier that can be used to see if specific key is being pressed or not using "e.keyidentifier"
//   console.log("Keydown event");
})
// Keyup  : when key released
document.addEventListener("keydown",()=>{
     // console.log("Keyup event");
})
// Input : trigger when value of an input or textarea element changes
document.addEventListener("input",()=>{
     // console.log("Input event");
})
// Contextmenu : right click of mouse aka when context menu is requested
document.addEventListener("contextmenu",()=>{
     // console.log("Right mouse button clicked event");
})
// Cut, Copy, Paste (doesnt depened on input tag ,even will trigger whenever u use these commands on that element)
document.addEventListener("cut",()=>{
     // console.log("something got cut/paste/copy");
})
// Beforeinput : Fired before an input event occurs, allowing you to cancel or modify the input. Same as "Input" but it happen before the input change
document.addEventListener("beforeinput",()=>{
     // console.log("printed before input changed event");
})



// Mouse Events
// Dblclick : triggers when u double clicked (around 0.3 seconds to 0.5 seconds)
document.addEventListener("dblclick",()=>{
     // console.log("U double clicked");
})
// Mousedown : triggers when u press the click buttom (it counts both clicks i.e. left and right)
document.addEventListener("mousedown",()=>{
//     console.log("Your mouse down");
})
// Mouseup: triggers when u release click button or after your click (it counts both clicks i.e. left and right)
document.addEventListener("mouseup",()=>{
     // console.log("u released the click button");
})
// Mousemove : triggers when u move your mouse 
document.addEventListener("mousemove",()=>{
     // console.log("your mouse is moving");
})
// Mouseover : triggers when u take your mouse on the element 
document.addEventListener("mouseover",()=>{
     // console.log("You took your mouse on the document");
})
// Mouseout : triggers when u remove your mouse (can also say curser <= for nerds) 
document.addEventListener("mouseout",()=>{
     // console.log("You removed the mouse");
})
// Mouseout : triggers when u remove your mouse (can also say curser <= for nerds) 
document.addEventListener("mouseout",()=>{
     // console.log("You removed the mouse");
})
// Scroll wheel events 
// Scroll : Triggered when The user scrolls
window.addEventListener('wheel', function(event) {
 event.deltaY // event.deltaY gives the vertical scroll amount
 event.deltaX  // event.deltaX gives the horizontal scroll amount
})
   


// Drag and Drop Events
// Drag : trigger continuously(speed depends on browser) when a dragged element is being dragged until u drop it.
document.addEventListener("drag",()=>{
     // console.log("an element is being dragging");
})
// Dragstart : trigger when u start dragging an element
document.addEventListener("dragstart",()=>{
     // console.log("u just captured something");
})
// Dragend : trigger when u drop an element
document.addEventListener("dragend",()=>{
     // console.log("you dropped an element");
})
// Dragenter : trigger when a dragged element enter the element
document.addEventListener("dragenter",()=>{
     // console.log("a dragged element came");
})
// Dragleave : trigger when a dragged element leave the element
document.addEventListener("dragleave",()=>{
     // console.log("a dragged element is just passed over document");
})


// Touch Events (to touch screen with mouse , u just inspect and element and mouse will become a touch)
// Touchstart : trigger when u start touching an element
document.addEventListener("touchstart",()=>{
     // console.log("you just start touching an element");
})
// Touchmove : trigger when u move while touching the element
document.addEventListener("touchmove",()=>{
     // console.log("you are moving while touching an element");
})
// Touchend : trigger when u end touching an element
document.addEventListener("touchend",()=>{
     // console.log("you just end touching an element");
})
// Touchcancel : trigger when your touch get override by some another element ( u can trigger this event by just clicking right button while touching the screen )
document.addEventListener("touchcancel",()=>{
     // console.log("you touch get overriden by another element");
})


// Form Events
// Submit : trigger when u submit a form
document.addEventListener("submit",(e)=>{
      e.preventDefault()
     // console.log("you just submmited the form");
})
// Reset : trigger when u reset a form
document.addEventListener("reset",(e)=>{
     // console.log("you just reset the form values");
})
// Change : triggered when the user modifies the input field's content and then clicks outside the field causing it to lose focus (also triggered when the user interacts with checkboxes or radio buttons)
document.addEventListener("change",(e)=>{
     // e.preventDefault()
     // console.log("you just changed the value of input");
})

// Focus events
// Focus : whenever u focus a element (Note : it does not propagate up or down the DOM hierarchy , Which means if parent is focused it won't trigger another time if it got focusin to it's child , Event propagation happpen in most of the events like all of the above but not in "focus" and "blur" event type for "propagationed")
let input = document.getElementsByTagName("button")[0]
input.addEventListener("focus",()=>{
     // console.log("Focus in of a element");
})
// Blur : trigger when u focus out of a element
input.addEventListener("blur",()=>{
     // console.log("Focus out of a element");
})
// Alternate of "focus" and "blur" event which allow "Event propagation"
// Focusin, Focusout : Fired when an element gains or loses focus. (focus means different in different context like "click on link" is focus for "anchor" tag etc.)
document.addEventListener("focusin",()=>{
     // console.log("U just focusin or focusout of a element");
})


// Window Events (These Events are "window" specific only so don't forgot to use these property with "window" object)
// Load : triggered when a webpage and all its resources (such as images and stylesheets) have finished loading.
window.addEventListener("load",()=>{
     // console.log("Element is being load");
})
// Unload :  triggered when  the user navigates away from a page or closes the browser window/tab.
// U can't see this Event triggerering , just understand it trigger whenever browser clean-up all content from the site
// BeforeUnload : triggered just before the user navigates away from a page or closes the browser window/tab. It allows you to display a confirmation dialog to the user.
window.addEventListener("beforeunload",()=>{
     // console.log("BeforeUnload Event");
})
// Resize : triggered when the size of the browser window is changed.
window.addEventListener("resize",()=>{
     // console.log("Window is being resized");
})
// Alert/Prompt
// window.alert("this is alert")      //  give an Alert pop up on Window that's won't go until u manually cancel it                      
// window.prompt("Type any value")   // same as alert but return a value that u enter in the input pop up on window 


// Error : it's a built-in object represents an error that occurs during the execution of a program. They can be thrown using the "throw" statement that will stop the execution of code 
// Syntax
let error = new Error("this is an error") // takes only one argument i.e. string containing the message
// Properties of an Error
// name: For the generic Error object, this is usually set to "Error", but there are more specific error types with different names, such as SyntaxError, TypeError, etc.
// stack : stack is the whole error that includes all details , the whole error you see in console is stack 
// message : the message of the error
error.message  // will return the string containing the message of the error so on, u can access the other two properties like this also


// Media Events (Forgot to add media ;) , i didnt forgot just lazy )
// Play : Triggered when the playback of a media element (like audio or video) starts.
document.addEventListener("play",()=>{
     console.log("Media started playing"); // song played
})
// Pause : Fired when the playback of a media element is paused.
document.addEventListener("pause",()=>{
     console.log("Media is paused"); // song played
})
// Ended : Triggered when the media playback reaches the end.
document.addEventListener("ended",()=>{
     console.log("Media Ended"); // song played
})
// Volumechange : Fired when the volume of the media changes.
document.addEventListener("volumechange",()=>{
     console.log("Volume has been changed"); // song played
})
// To change or access the Volume/Duration of Audio/media u can use "volume" property , ex:
// Audio.volume = 0.2(value varies from 0-1) // Audio is depicting that it's storing an Media
// Audio.duration  // return the duration of media
// Audio.ended  // return boolean value , represent if media ended or not
// Audio.mediaKeys  // returns a "MediaKeys" object,that is a set of keys that the element can use for decryption of media data during playback.
// Audio.load()    // aborts all ongoing operations involving this media element and reset the Media
// Remember audio's will not be played until user interact , if even video is not playing try muting it first

// Visibility Event 
// Visibilitychange :  triggered whenever the browser window goes from being visible to hidden or vice versa.
document.addEventListener('visibilitychange', function() {
     // console.log('Visibility State:', document.visibilityState); // this method will check the status of browser window either: hidden or visible
});
// Offline : triggers When browser lost connection to internet
addEventListener("offline", () => {
     console.log("You are offline");
});



// Animation/transition Events   (div is random element , these are examples only )
// Animationstart : Fired when a CSS animation begins.
div.addEventListener('animationstart', function() {
     console.log('Animation started');
 });
// Animationsend : Triggered when a CSS animation completes.
div.addEventListener('animationend', function() {
     // Perform actions when the animation ends
     console.log('Animation ended');
   });
// AnimationIteration : Fired when a CSS animation completes one iteration.
div.addEventListener('animationiteration', function() {
     // Perform actions when the animation completes an iteration
     console.log('Animation iteration');
});
// transitionend :Triggered when a CSS transition completes.
div.addEventListener('transitionend', function() {
     console.log('Transition ended');
});
   

   
// Note*** : Because of privacy user to interact with webpage(i.e click on webpage) to work with Most of the properties

// Scroll
// window.scrollTo(0,1517,"instantly")  // scrolls to a particular set of coordinates in the document , Takes 3 arguments 1. Horizontal(X) Cords you want to scroll to 2. Vertical(Y) Cords you want to scroll 3. type of scroll u want i.e. smooth ,instant, instantly 

// ScrollBy
// window.scrollBy(0,1517,"instantly")  // scrolls to a particular set of coordinates in the document , Takes 3 arguments 1. Amount of width u want to scroll 2. Amount of hieght u want to scroll 3. type of scroll u want i.e. smooth ,instant, instantly 

// Both methods are same but one(Scroll) is "where to scroll" and second(ScrollBy) is "how much to scroll"
// This property only usefull for window scrolling ,if u want element scroll there is :

// ScrollTo  : used to get or set the number of pixels that an element's content is scrolled vertically.
let html = document.getElementsByTagName("div")[0]
document.addEventListener("click",()=>{
     // html.scrollTop = 1200 // assign the value u want to scroll 
})


// Open 
// The open() method of the Window loads a specified resource into a new or existing browsing context( a tab, a window, or an iframe) under a specified name.it takes three arguments 
// 1. url 
// 2.target (A string, without whitespace,determines which window or tab or frame to load the resource into)
// 3. windowFeatures(A string containing list of window features in the form "name=value" or for boolean features, just name seperated by ",") 

// Windowfeatures u can add : "popup"(If this feature is enabled, it requests that a minimal popup window be used and you can assign [1,yes,true] all will work same as no value assigned),"width" or "innerWidth"(minimum value is 100) ,"height" or "innerHeight" ,"left" or "screenX" ,"top" or "screenY"
// this method will return either "WindowProxy" Object(have info about window/tab that can be used to manipulate it) or null if browser failed to open the new browsing context (can be caused by blockers)

document.onclick = ()=>{       
      //let newwindow =  window.open("https://www.google.com/","mywindow","popup")


     // newwindow.close()      
     // newwindow.moveBy(696,69)

}

// All parameters are optional but 1 parameter used to load url resourses 2. parameter determines where to load resourses 3.paramter control to open a new popup with minimal UI features and control its size and position.
// Also target(2 argument) attribute specific value, if it's value is "_self" it will load the current browsing context into new window or tab. "_blank" will load content Everytime in new window/tab everytime , if any custom name is assigned it will check a window/tab/frame with that name exist or not , if it exist it will load content in that, if not then it will create a new window/tab with that specific name


// blur()
//  window.blur()  // used to remove focus from the window , making it inactive or sending it to the background.

// focus()
//  window.blur()  // opposite of blur() used to give focus to that window (But because of shitty policies this could not work in your browser)
     
 // close
 // window.close()  // used to close the current window but because of privacy shit , it will only close the window the is being created by window.open() method

// Moveto/Moveby
// "Moveto" used to move Window interface's current window to the specified coordinates Whereas "Moveby" used to move window by some specfic distance
// document.onclick = ()=>{ window.moveTo(1144, 33)} // Because of privacy shit this will also work on the windows that is being create by "open()" method





// requestAnimationFrame()  : used for animating elements in website 
// Used to call same function again and again until u cancel it 
// return A long integer value, the request ID, that u can use to stop the loop
//  requestAnimationFrame() calls/loop are paused in most browsers when running in background tabs , so if u loose focus from the tab , the loop will be paused until u come back in focus . To reduce battery life (Lol) 

let value = 1;
let request_frame;
function animation() {
    link.style.left = `${value}px`;
    value++;          // increase pixel value so each time , it will go further
    console.log(value) // loggin value each time the function invokes
    request_frame = requestAnimationFrame(animation);  // assigned id to outter variable while starting the loop
}

// animation(); // calling the function first time so the "requestAnimationFrame" calls can start


// cancelAnimationFrame()
// Used to stop the call/loop u started 
// Takes "requestAnimationFrame()" id as argument

setTimeout(() => {
    cancelAnimationFrame(request_frame);    // cancelling the loop/calls using "requestAnimationFrame()" id after 2sec
}, 2000);
