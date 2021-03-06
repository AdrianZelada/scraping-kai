# CSB-Inspector

csb-inspector is a library that shows us the name of the file and the line of code where the screen printing is executed
  ("console.log (data)" or other "console.function")

Without csb-inspector



## Install

```
npm i --save csb-inspector
```

## Options

```
options = {
// express application ,
     app: app,
// Path where the application will be, by default it will be "_console" (Optional)
     route: "_console",
// Port where our Socket will point, by default it will be 8888 (Optional)
     port: 8888,
// This option receives the data from each screen impression and gives us the possibility of extending the functionalities (Optional)
     outputs: [(path, prop, args)=>{
           fs.appendFileSync("file.txt", path);
       }]
   }
```

## How to Apply

```
...
const express = require('express');
const app = express();

const CsbInspector = require('csb-inspector/express-socket');

.....
.....
.....

const appInspector = CsbInspector({
        app: app
    });

```

### Csb-Inspector Browser

Open your browser and load 'http://localhost:{SERVER_PORT}/_console'

File Code "users-route.js"

![fileImageI](https://i.ibb.co/8YkGk8n/Screen-Shot-2020-01-03-at-2-36-45-AM.png)

View Csb-Inspector.

![imageI](https://i.ibb.co/QDcxcpm/Screen-Shot-2020-01-03-at-2-18-47-AM.png)


### Impression on the console

CBS-Inspector displays these impressions on the console by adding the respective
 file name and code line where that impression was executed on the console.

File Code.

![fileImage1](https://i.ibb.co/7K8J91n/Screen-Shot-2020-01-03-at-2-33-11-AM.png)

Your Console.

![image1](https://i.ibb.co/LQ3ZnnV/Screen-Shot-2020-01-03-at-2-13-44-AM.png)

## Apply librery in to Loopback 3

If your application is working with Loopback 3 supported by ExpressJs
then you must add in the middlewares configuration file
(server/middleware.json) in the "final" object you must add a line to the configuration.

```
"final": {
    ...
    ...
    ...
    "csb-inspector/loopback-error": {}
}
```

![imageLoopback](https://i.ibb.co/P5SBq9v/Screen-Shot-2020-01-03-at-11-07-30-PM.png)