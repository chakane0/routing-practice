# How decoupling works here

### What is decoupling?
Its just a means for separating different parts of the application so that each part handles a specific responsibility without being bound to anything else. 

Decoupling ensures that your route definitions are kept seperate from the components that render the UI or business logic. By doing so, we can define/manage them in separate files which makes routing easily scalable and maintainable. 

So for example, instead of setting routes directly in App.js, we dedicate a file to handle routing. All app.js needs is this: ```<RouterProvider router={router} />```

We can also make it so that each feature can store its own routes. The reason we do this is because features can be self contained if we want to update the routing for it, we can do so without touching the global router configuration