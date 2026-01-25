// 1. Using alert( )

<html>
  <head></head>
  <body>
    <script>
      let userName = prompt("Method 1: Please enter your name:"); alert("Your
      name is: " + userName);
    </script>
  </body>
</html>;


// 2. Using console.log( )

<html>
  <head></head>
  <body>
    <script>
      let userName = prompt("Method 1: Please enter your name:");
      console.log("Your name is: " + userName);
    </script>
  </body>
</html>;


// 3. Using document.write( )

{/* <html>
  <head></head>
  <body>
    <div>This is div 1</div>
    <div>This is div 2</div>
    <script>
      let userName = prompt("Method 1: Please enter your name:");
      document.write("Your name is: " + userName);
    </script>
  </body>
</html> */}


// 4. Using document.getElementById( )

<html>
<head></head>
<body>
    <div id="output">
        This is div 1
    </div>
    <div>
        This is div 2
    </div>
    <script>
        let userName = prompt("Method 1: Please enter your name:");
        document.getElementById("output").innerHTML = "Your name is: " + userName;
    </script>
</body>
</html>
