<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh -->



REACT - ADVANCED Front End  TECHNOLOGY
---------------------------------------
- Features 
    - Components
    - Virtual DOM
    - JSX Language
    - High Performance
    - Data binding (sharing) : One way Data binding (from parent to child)
- Basic Concepts
    - Library, not a frame work.
    - React App is a collection of libraries.(Libraries - collection of files)
        to design page
        to send requests
        to make behaviour corresponding to that req
    - *Components : Part of User interface 
    - React App is a collection of Components
        - They are arranged in a tree structure
        - There will be a root Component in React app which is known as "App" (default name)
    - React Used to create Single Page Applications , which means page starts from a single page.always starts from the 'App'
    - Pure functions : which doesnt cause side effects, used to create react func compo
    - Declarative Approach 
    - *Virtual DOM : Light weight memory representation of real DOM
        - Reconciliation : the process to detect changes in page. only changed section refreshed.thus loadidng time reduced;website become faster
    - *JSX : Java Script XML -  (Language used to write code in React) - Used to display contents on browser
        - ex : JSX Elements : const heading = <h1>Heading 1</h1> ( we can assighn it into a variable , combination of html tags and js )
        - Rules for Using JSX 
            - Every JSX elements must be inside a single parent tag 
            - Parent Tag can be any container tag / react fragment (nameless tag <>...</>)
            - Every tag must has closing tag. ex : <h1>content</h1> , <br></br> instead of this use (<br/> = self closing tag) in react
            - Attribute class is "className" in React
            - Instead of Attribute 'for' use 'htmlFor' in JSX 
            - Use {js-expression} : To provide JS expression in JSX
        - React App Creation
            - CRA (using create-react-app command )
            - Vite : build tool for web projects
                - Installing vite Globally : npm i -g create-vite 
                - React app using vite : npm create vite@latest or [npm create vite@latest react-app -- --template react] 
        - React App File & Folder structure
                    - package.josn file : npm configuration file for the project
                    - package-lock.json file: holds versions history of all installed packages
                    - .gitignore file : containd files/folder name which is ignored while adding to git 
                    - index.html file: entry html page ot react app
                    - node-modules folder: used to hold copies of dependent libtraries of react project.(we can install using command : npm install)
                    - public folder : react project can access data stored in public folder as Globally
                    - src folder : define react app here
                        - assets folder : used to hold media files used in react app
                        - main.jsx file : created a ReactDOM with root as div with an id as 'root',
                                          and render the parent (App) Component inside the node 
                    - to run react app : use command 'npm run dev' 
                    - Babel Library : transpile JSX code to simple react function which is understood by browser.
                                      Used to convert the jsx into the langs which are understandable to the browser - html/js 
                - General Rules for Creating Components
                    - create a js / jsx file, filename must starts with capital letter
                - Different types of Components : 
                    - Class Based Components : use class to create component it can inherit react component class 
                        - Statefull Component, coz it can create state 
                    - Functional Components : stateless components, coz fun cant create object, use function to sreate Component 
                        using 'rfce' we can load the basic structure of functional based component structure
                    - Life cycle Methods of React Components
                        - Mounting Phase : Putting JSX into Browser
                            - constructor()
                            - getDerivedStateFromProps()
                            - render() if it is true jsx component is rended into DOM
                            - componentDidMount()
                        - Updating Phase : when component is Updating
                            - getDeriverdStateFromProps()
                            - shouldComponentUpdate() if it is true render() invoked
                            - render() 
                            - getSnapshotBeforeUpdate()
                            - componentDidUpdate()
                        - Unmounting Phase : Removing componemt From DOM
                            - componentWillUnmount()
-----------------------------------------------------------------------------------------------------------------------------------------------
                - Difference between functional and class based compoenent                                                                     |
                        Functional Component                                             Class Compoenent                                      |
                    ------------------------------------------------------------------------------------------------------                     |
                            1. JS Pure function to accept props                 1. Is class extended from react compoenent                     |
                            and return JSX Element                              it render function return JSX Element                          |
                            2. It executes from top to bottom, once             2. Compoent alive depending on different life                  |
                            it return JSX, then it cannot be alive              cycle                                                          |
                            3. Stateless component                              3. Statefull component                                         |
                            4. Hooks are used                                   4. Hooks are not used                                          |
                            5. Life cycle method is not available               5. Can use life cycle method in component                      |
                            6. No need render function                          6. It requires render to return JSX                            |    
                            7. No need of constructor                           7. Constructor used to initialise state                        |
-----------------------------------------------------------------------------------------------------------------------------------------------
                - Props Object : Property of a component, Using Props a component can get the shared data from its parent, 
                                 props will get as an argument of functional component
                - Styling JSX elements in React Component - Using CSS
                    - Using inline CSS   : Using style Attribute
                            - syntax : style={{Property:value}} (style as object, so represented as key-value pairs)
                    - Using External CSS : Using External css file,import css file to component file
                    - Using Module files : file with extention as .module.css is known as CSS Module file in component
                - React Events Binding 
                    - Binding a function without argument : event={function-name}
                    - Binding a function with argument : event={()=>function-name(arg)}
                    - Binding a function with argument as event : event={(event)=>function-name(e)}
                - Conditional Rendering : based on a condition we can control the JSX elements in browser
                    - if statements : use the operator truthy(&&) 
                    - if else statements : use ternary operator (?:)
                - React State : is an object used to store data /infronmation regarding a component , whenevever state change the component re-render 
                    - Use setState(value) : to update state
                - React Hooks : its a predefined function used to provide react component features to functional component
                    - Hooks are function name starts with 'use' keyword
                    - to use a hook in functional component we must call the hook
                    - Rules for calling hooks in functional component
                        - Import hook from react, in component
                        - hooks can be called at the top of level of   component
                        - hooks cannot be conditional
                    - Types of hooks
                        - Predefined hooks
                            - useState(initial-value) : to help functional component to create state
                            - Syntax : const [state-name, state updating]
                            -useEffect(callback function, dependency) : used to provide side effects to your component
                                - function : used to define side effects applied to componenet
                                - dependency : based on dependency  useEffect will get invoked
                                    - no dependency : useeffect hook will call all timee in component
                                    - [] : useeffect will call only at the time in component creation
                                    - [data] : useeffect will call  at the time in component creation as well as data changes
                        - Customised hooks :
                            - create a function with the name starts with 'use' keyword
                        - Handling List using React
                            - using 'map' method
                            - to uniquely identify each item in a list use 'key' attribute in component
                        - Styling Framework in React
                            - Material UI : https://mui.com/material-ui/ 
                                - to installl : npm install @mui/material @emotion/react @emotion/styled
                            - React BOotstrap : npm install react-bootstrap bootstrap, we have to add bootstrap theme to 
                            properly work bootstrap, bootswatch.com will provide theme, chose a theme and download its bootstrap.min.css into src of project folder, we have to import bootstrap.min.css into main.jsx file
                        - React Forms
                            - Controlled Components : data changes in  the form is handled by the component by storing its state using change event
                            - Uncontrolled : form handled by real DOM
                            - To submit form, preventDefault() 
                        - Set up path for Component in React
                            - install react-router-dom :it is a client-side routing , to install use the command npm i react-router-dom 
                            - React app muster render in "BrowserRouter" component
                            - Components needs to setup path must be inside 'Routes' component of react router dom in App.jsx 
                            - using Route component define each component path
                            - Link component used to redirect from one page to another within the page
                        - Route is a HOC(Higher Order Component : a component become argument of another component ) 
                        - React Toastify : A Library used to alert 
                        - Export const : used to export multiple item
                        - Export default : used to export singel item . Export is must be at end part
                        - API Call in React
                            - Axios Library : to use this install axios library : npm i axios
                            - Create a folder for services
                        - State Lifting : Used to share data btw componenets on react. here we create the state in the parent. 
                            (lifting the state from child to parent) sharing data btw siblings as well as child to parent

        ---------------------------------------------------------------------------------------------------------------------------------------
                    JSON SERVER
        ---------------------------------------------------------------------------------------
         1. Create a folder to hold json file
         2. Create package.json file inside the folder using the commamd :- npm init -y                               
         3. Create db.json file
         4. Create Resources for that file, a resource is a file that to be permenently stored in the json
         5  to run json file install json server : npm i json-server / npm i json-server@0.17.4 
         6. to run json file in local host :npx json-server db.json
        ---------------------------------------------------------------------------------------------------------------------------------------
                    JSON SERVER DEPLOYING Using NODE JS
        ---------------------------------------------------------------------------------------
        1. Create index.js file server folder
        2. Update script in package.json to "start":"node index.js"
        3. Create .gitignore file and add 'node_modules' in that
        