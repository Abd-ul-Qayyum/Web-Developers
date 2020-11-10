// import logo from './logo.svg';
import './App.css';
import './assets/style.css';
// import 'https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha2/css/bootstrap.min.css'
// import '/https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha2/js/bootstrap.bundle.min.js" integrity="sha384-BOsAfwzjNJHrJ8cZidOg56tcQWfp6y72vEJ8xQ9w6Quywb24iOsW913URv1IS4GD'

function App() {
    return ( <
        div >
        <
        nav className = { "py-3 navbar navbar-expand-lg fixed-top auto-hiding-navbar" } >
        <
        div classname = { "container" } >
        <
        a classname = { "navbar-brand" }
        href = "#" >
        <
        img src = "asset/logo5.png"
        alt = "Logo"
        srcset = "" / >
        <
        /a> <
        button className = "navbar-toggler"
        type = "button"
        dataToggle = "collapse"
        dataTarget = "#navbarSupportedContent"
        ariaControls = "navbarSupportedContent"
        ariaExpanded = "false"
        ariaLabel = "Toggle navigation" >
        <
        span classname = { "navbar-toggler-icon" } > < img src = "asset/menu.png"
        width = "30px"
        alt = "" / > < /span> < /
        button > <
        div classname = { "collapse navbar-collapse" }
        id = "navbarSupportedContent" >
        <
        ul classname = { "navbar-nav ml-auto" } >
        <
        li classname = { "nav-item" } >
        <
        a classname = { "nav-link active" }
        ariaCurrent = "page"
        href = "index.html" > Home < /a> < /
        li > <
        li classname = { "nav-item" } >
        <
        a classname = { "nav-link" }
        href = "pages/about.html" > About Us < /a> < /
        li > <
        li classname = { "nav-item" } >
        <
        a classname = { "nav-link" }
        href = "pages/services.html" > Services < /a> < /
        li > <
        li classname = { "nav-item" } >
        <
        a classname = { "nav-link" }
        href = "pages/features.html" > Features < /a> < /
        li > <
        li classname = { "nav-item" } >
        <
        a classname = { "nav-link" }
        href = "pages/contact.html" > Contact < /a> < /
        li > <
        /ul> < /
        div > <
        /div> < /
        nav > <
        /div>
    );
}

export default App;