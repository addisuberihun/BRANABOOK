<?php

error_reporting(E_ERROR | E_PARSE);
$conn=mysqli_connect("localhost","root","","usercontrol");
session_start();
if(isset($_SESSION['LOGGEDIN'])==false){
    echo '<script>alert("first login");</script>';
    header('Refresh:2; url =login.php');
}

if(isset($_POST['submit'])){
    
    $price_item=$_POST['price_item'];
    $email=$_POST['email'];
    $password=$_POST['password'];
    // $deposite=$_POST['deposite'];
    $date=$_POST['date'];
    // $_SESSION["price_item"] = $row['price_item'];
    // $_SESSION["email"]= $row['email'];

    if(empty($email)){
        echo "please enter email account";
    }
    else if(empty($password)){
    
            echo "please enter valid email password";
    }
    else{
        $depo ="SELECT * FROM `account_book` WHERE `email` = '$email' AND `password` = '$password'";
        $select = mysqli_query($conn,$depo);
if( mysqli_num_rows($select)){
    $num = mysqli_fetch_assoc($select);
    $normal= $num['deposite'];

           if($price_item <=$normal){
            echo "<div class= 'msg' style ='color: #6de581b8;'>
           please add to account here
			</div>" ;
          
          header('Refresh:2; url =certificate.php');
            }
        
               }
       else{
        // header('Refresh:5; url =bookaccount.php');
            
        }
    }
        mysqli_close($conn);
    
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="stylsheet_folder/shopping.css">
</head>
<body>
<?php include 'homeheader.php';?>
<div class="containe">
<div>

</div>
    
        <header>
            <h1>Your Shopping Cart</h1>
            <div class="shopping">
                <img src="image/shopping.svg">
                <span class="quantity">0</span>
            </div>
        </header>

        <div class="list">

        </div>
    </div>
    <div class="card">
        <h1>Card</h1>
        <ul class="listCard">
        </ul>
      
            <div class="checkOut">
                <div class="total">
                   0 
                </div>
                <div class="closeShopping">Close</div>
            </div>
            <div class="Buynow">
            
            <button id="payment">Buynow</button>
            </div>
        <div class="hecontainer">
       <form action="christain.php" method="post">
       <h1>Confirm Your Payment</h1>
        <div class="first-row">
            <div class="owner">
                <h3>your email</h3>
                <div class="input-field">
                    <input type="email" name="email" placeholder="enter email">
                </div>
            </div>
            <div class="cvv">
                <h3>password</h3>
                <div class="input-field">
                    <input type="password" name="password" id="pass">
                    <img src="photo/closed.png" alt="" id="icon">
                </div>
            </div>
        </div>
        
        <div class="third-row">
            <h3>Date</h3>
            <div class="selection">
                <div class="date">
                    <input type="date" name="date" id="">


                </div>
                <div class="cards">
                    <img src="photo/birr.jpg" alt="" id="birr">
                    <img src="photo/mc.png" alt="">
                    <img src="photo/vi.png" alt="">
                    <img src="photo/pp.png" alt="">

                </div>
            </div>
            <div style="display:none">
        <input type="number" class="price" name="price_item" value="0">
        </div>
        <input type="submit" name="submit" value="Confirm">
        </div>
        
       </form>
    </div>
    </div>
<script>
    var paymet=document.getElementById("payment");
    paymet.onclick = () => {
        if(hecontainer.style.display =="none"){
    hecontainer.style.display = "flex";}
          else
          {
        hecontainer.style.display = "none";
         }
         }
</script>

    <script src="javascript/christain.js"></script>
</body>
<?php include 'footer.php'; ?>
</html>
