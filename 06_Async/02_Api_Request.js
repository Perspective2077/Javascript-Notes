// Api (Application Programming Interfaces) : tools that allows different software applications to communicate with each other
// Api have different works in different context as follows :
// Web APIs: Facilitate communication between different web services or applications over the internet
// Library APIs:  Provide reusable functions and procedures for developers to use in their code etc.
// Operating System APIs: Enable applications to interact with the underlying(important but hidden) operating system.

// We are talking about Web Api's : Mainly used for Data sharing throughout the web
// Working 
// 1. Applications send HTTP requests to specific endpoints(specific URL) on the API, specifying the desired operation.
// 2. The API processes the request and returns an HTTP response containing the requested data or performing the specified action.
//  APIs often use standard data formats, such as JSON("{}") or XML(data is represented using tags, similar to HTML), for data exchange between client and server
// Many web APIs require authentication for secure communication. Common methods include API keys, OAuth, and JWT.

// An HTTP response typically consists of:
// Status Line : Includes the HTTP version, a status code, and a brief status message i.e. "HTTP/1.1 200 OK" (indicating a successful response).
// Headers: Provide additional information about the response, such as the content type, length, and server details ex. Content-Type: application/json.
// Body: Contains the actual data or resource requested (optional) i.e. The HTML content of a web page, a JSON object, or binary data etc.


// Practical

const Endpoint = "https://api.github.com/users/I-am-Perspective"

// Create a new XMLHttpRequest object
const xhr = new XMLHttpRequest();
// now xhr have methods like :

// open() : method to initialize a request for send to a url
xhr.open('GET',Endpoint);  // takes two parameter , 1. method ("GET", "POST", "PUT", "DELETE",Ignored for non-HTTP(S) URLs.)
//  2. Url to send the request  3. (optional) Boolean parameter (true default)  indicating whether or not to perform the operation asynchronously, If this value is false, the send() will block the execution of further JavaScript code until the entire HTTP request is completed and the response is received i.e. synchronously
// 3.(optional) user name to use for authentication purposes (null default)
//  4.(optional) password to use for authentication purposes (default null)
// this open() method is different from window.open() method


// Example where can use "onreadystatechange" event to trigger an fnc whenever state get changed of XMLHttpRequest to handle the response , 
xhr.onreadystatechange = function() {
    // Check if the request is complete (readyState 4) and the response status is OK (status 200)
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Extract HTML content from the response
      const htmlContent = xhr.responseText; // it's a string so u can convert it into object using method "JSON.stringify()"
      //   console.log(htmlContent);
    }
  };

// Properties u can use with XMLHttpRequest object (just access them like u access keys from object) 
// "response" : property returns the response's body content
// "readyState" : returns the state an XMLHttpRequest client is in. An XHR client exists in one of the following states:
/*
 Value	   State	                            Description
  0	       UNSENT	                 Client has been created. open() not called yet.
  1	       OPENED	                 open() has been called.
  2    HEADERS_RECEIVED	             send() has been called, and headers and status are available.
  3	      LOADING	                 Downloading "responseText" holds partial data.
  4	       DONE	                     The operation is complete.
*/
// "responseText" : returns the text received from a server following a request being sent
// "responseType " : returns string value specifying the type of data contained in the response 
// "status"       : returns the numerical HTTP status code of the XMLHttpRequest's response.
// "statusText"   : property returns a string containing the response's status message as returned by the HTTP server.
/*
HTTP response Meaning 
Informational responses (100 - 199)
Successful responses (200 - 299)
Redirection messages (300 - 399)
Client error responses (400 - 499)
Server error responses (500 - 599)
*/
// "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status" for more info about status response



// Events for xhr requests , "error","load","loaden","progress" ,"abort" , "readystatechange"(used above) ,"timeout"
xhr.addEventListener("error", () => {
      console.log("Mission aborted");
}); 
// "error" : occurs if there's an error 
//  "load" : signifies the successful completion of the request, 
//  "loadend" : event is fired when a request has completed, whether successfully (after load) or unsuccessfully (after abort or error).
// "progress"  : event is fired periodically when a request receives more data.
// "readystatechange" : event is fired whenever the readyState property of the XMLHttpRequest changes
//  "abort" : event is fired when a request has been aborted 
// "timeout" : event is fired when progression is terminated due to preset time expiring.


// send() sends the request to the server (without sending request , you are not doing anything with those method)
xhr.send() // takes only one optinal argument i.e. data to be sent in the XHR request (Deafult null) like sending user data to database although feel free to ignore this , you will remember this when u start backend :)
// but for now we dont need to send data to send , so we only getting the data


// Now comes the Flabbergasting thing , XMLHttpRequest is not used now days because of fetch() api :) , fetch() is more powerfull over XMLrequest but one more thing , "axios" is even more powerfull lol , it gives more features then fetch but its a 3rd party package so we dont do that here and also most of work fetch can do

// fetch() : Api used for fetching resources 
fetch(Endpoint,{   
     body: "this is response from frontend"   // just a example , not needed here
     }
)
// Takes two arguments : 1. resource that you wish to fetch. This can either be: A string containing URL or A Request object (customizable url targetting u can make , not needed)
// 2. options : An object containing any custom settings you want to apply to the request. The possible options are: [ body (data) , browsingTopics , cache , credentials , method , priority ........ ]
// detail fetch options : "https://developer.mozilla.org/en-US/docs/Web/API/fetch"



// V8 Engine
// V8 engine, which is implemented in C++ (but it also has components written in other languages like JavaScript and Python). V8 is used not only in web browsers but also as the runtime engine for Node.js .It makes Javascript language more great than it deserve (riyal) , Although it's an engine that is responsible for executing js with More features added + more Management over language 
// it's Version 8 engine of js that is currently used in all env
// Most of Engines that are responsible for executing code like python,java are code also Mostly made in  c/c++ 
// C and C++ are fundamental languages responsible for operating systems so that's why fundamental works are done in c/c++
