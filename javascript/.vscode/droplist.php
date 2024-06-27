<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
    /* Navbar container */
    .navbar {
      
      background-color: #333;
      font-family: Arial;
    }
    
    /* Links inside the navbar */
    .navbar a {
      float: left;
      font-size: 16px;
  
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
    }
    
    /* The dropdown container */
    .dropdown {
      float: left;
   
    }
    
    /* Dropdown button */
    .dropdown .dropbtn {
      font-size: 16px;
      border: none;
      outline: none;

      padding: 14px 16px;
      background-color: inherit;
      font-family: inherit; /* Important for vertical align on mobile phones */
      margin: 0; /* Important for vertical align on mobile phones */
    }
    
    /* Add a red background color to navbar links on hover */
    .navbar a:hover, .dropdown:hover .dropbtn {
      background-color: red;
    }
    
    /* Dropdown content (hidden by default) */
    .dropdown-content {
      display: none;
      position: absolute;

      display: block;
      text-align: left;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);

    }
    
    /* Links inside the dropdown */
    .dropdown-content a {
      float: none;
      color: black;
      padding: 12px 16px;
      text-decoration: none;

    }
    
    /* Add a grey background color to dropdown links on hover */
    .dropdown-content a:hover {
      background-color: #ddd;
    }
    
    /* Show the dropdown menu on hover */
    .dropdown:hover .dropdown-content {
      display: block;
    }
</style>
</head>
<body>
    <div class="navbar">
        <a href="#home">Home</a>
        <a href="#news">News</a>
             <div class="dropdown">
                        <button class="dropbtn">Dropdown
                        <i class="fa fa-caret-down"></i>
                        </button>
                        <div class="dropdown-content">
                         <a href="#">Link 1</a>
                         <a href="#">Link 2</a>
                         <a href="#">Link 3</a>
                        </div>
                  </div>
      </div>
</body>
</html>