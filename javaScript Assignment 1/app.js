///////////////////////////////// chapter 1
// task 1
function C1T1() {
    alert(" JavaScript Alerts \n\n Error! Please enter a valid password.");
  }
  // task 2
function C1T2() {
    alert(" JavaScript Alerts\n\n Welcome to JS Land... \n Happy Codding!");
  }
  // task 3
function C1T3() {
    alert(" JavaScript Alerts\n\n  Welcome to JS Land...");
  }
  // task 4
function C1T4() {
    alert(" JavaScript Alerts\n\n Happy Codding! \n Prevent this page to create aditional dialogs ");
  }
  // task 5
  function C1T5()
  {
  console.log("Hello... I can run through my web browser's console");
  };

  //////////////////////////////// chapter 2

  // task 2
  function C2T2() {
    var myName = "Muhammad Hassan" ;
    console.log(myName);

  }
    // task 3
function C2T2() {
var message = "Hello World !"
    alert(message);
  }
    // task 4
    function C2T3() {
     var studentName ="Muhammad Hassan"
     var studentId = "WM-6440"
     var courseStats = "web & mobile app develpoment course by saylani"
     alert(studentName);
     alert(studentId);
     alert(courseStats);
    }
    // task 5
    function C2T4() {
      var str = "PIZZA";
      for (let i = str.length; i >= 0; i--)
      {
      var temp = '';
      
      for (let j=0; j<i; j++)
      {
      temp= temp+ str[j];
      }
      document.write(temp + '<br>');
      }
      
      };
      
      // task 6
function C2T5() {
    var email = "hassanakram09123@gmail.com"
        alert("My Email Adress is  " + " " + email);
      }

    // task 7
function C2T6() {
    var book = "A smarter way to learn JavaScript"
        alert("I am trying to learan from the Book" + " " + book);
      }
      // task 8
      function C2T7() {
        document.getElementById("C2T72").innerHTML =
        "Yah! I can write HTML content through JavaScript";
      }

      // task 9
function C2T8() {
    alert(" “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬” ");
      }

        //////////////////////////////// chapter 3
// task 1
function C3T1() {
  var age = 20 ;
  alert("I am " + age + " years old");
}

// task 3
function C3T3() {
  var birthYear = 2000 ;
  document.getElementById("C3T3").innerHTML =
  "My birth year is " + birthYear ;

}
// task 4
function C3T4() {
  var yourName = prompt("Please enter your name", "John Doe");
  var tittle = prompt("Please enter T-shit Quantity", "5");
  if (yourName != null && tittle != null) {
    document.getElementById("yourName").innerHTML =
    yourName.bold() +" Ordered " + tittle.bold() +" T-shirts(s) on Hassan Clothing Store";
  }
}

///////////////////////////////// chapter 4

function C4T1() {
  var heading = "Rules for naming JS variables"
  var a = "Variable names can only contain numbers, $ and _ . For example $my_1stVariable"
  var b = " Variables must begin with a letter, $ or _ . For example $name, _name or name"
  var c = "Variable names are case Sensitive ."
  var d = "Variable names should not be JS Keyword."
  document.getElementById("C4T1").innerHTML =
    a +"<br> <br>" + b +"<br> <br>" + c +"<br> <br>" + d;
}

/////////////////////////////// Chapter 5

// task 1
function C5T1(){
var value1 = prompt("Enter first value", 3);
var value2 = prompt("Enter second value", 5);
var num1 = parseInt(value1); var num2 = parseInt(value2); 
var resultAdd = num1 + num2;
document.getElementById("C5T1").innerHTML ="Sum of " + num1 + " & " +num2 + " is = " + resultAdd ;

}
// task 2
function C5T2(){
var value1 = prompt("Enter first value", 10);
var value2 = prompt("Enter second value", 2);
var num1 = parseInt(value1); var num2 = parseInt(value2); 
var resultAdd = num1 - num2;
document.getElementById("C5T2").innerHTML ="Subtraction of " + num1 + " & " +num2 + " is = " + resultAdd ;

}
// task 3
function C5T3(){
var value1 = prompt("Enter first value", 4);
var value2 = prompt("Enter second value", 2);
var num1 = parseInt(value1); var num2 = parseInt(value2); 
var resultAdd = num1 * num2;
document.getElementById("C5T3").innerHTML ="Multiplication of " + num1 + " & " +num2 + " is = " + resultAdd ;

}
// task 4
function C5T4(){
var value1 = prompt("Enter first value", 16);
var value2 = prompt("Enter second value", 2);
var num1 = parseInt(value1); var num2 = parseInt(value2); 
var resultAdd = num1 / num2;
document.getElementById("C5T4").innerHTML ="Division of " + num1 + " & " +num2 + " is = " + resultAdd ;
}
// task 5
function C5T5(){
var value1 = prompt("Enter first value", 16);
var value2 = prompt("Enter second value", 2);
var num1 = parseInt(value1);
var num2 = parseInt(value2); 
var resultAdd = num1 % num2;
document.getElementById("C5T5").innerHTML ="Modulus of " + num1 + " & " +num2 + " is = " + resultAdd ;
}
// task 6
function C5T6() {
  var heading = "Value after Variable declaration is undefined "
  var a = 5;
  var b = a+1
  var c = b+7
  var d = c-1
  var e = d % 3
  var initial = "Initial Value = " + a
  var increment = "Value after increment is = " + b
  var addition = "Value after addition is = " + c
  var decrement = "Value after decrement is = " + d
  var reminder = "By Dividing with 3, Reminder will be = " + e
  document.getElementById("C5T6").innerHTML = "<br>"+
  heading +"<br>" +initial +"<br>" + increment +"<br>" + addition +"<br>" + decrement+"<br>" + reminder;
}
//task 7
function C5T7() {
  var movieTicket1 = 600 
  var movieTicket5 = movieTicket1 * 5
  document.getElementById("C5T7").innerHTML =  "<br>"+
  "Coct of one movie ticket is = " + movieTicket1+"PKR" + "<br>" +" Total cost of buying five movie tickets is = " +movieTicket5+"PKR";
}
//task 8
function C5T8() {
  var n = prompt("enter a value", 4)
  document.write("Table of "+ n + "<br> <br>" )
  for(var i=1; i<=10; i++)
  {
    document.write(  "<br>"+ n + "x " + i + " = " + n*i + "<br><br>");
  }
}
//task 9
function C5T9() {
  var tempC = prompt("Enter Temprature in Celsius", 25)
  var tempF = prompt("Enter Temprature in Fahrenheit", 70)
  var fahrenheit = (tempC * 1.8) + 32
  var celcius =  (tempF - 32) *5/9
  document.getElementById("C5T9").innerHTML =  "<br>"+
  tempC + "°C is " + fahrenheit +"°F" +"<br> <br>"+ tempF+"°F is "+ celcius+"°C";
}
//task 10
function C5T10() {
  var heading = "Shoping Cart"
  var item1 = prompt("Enter Quantity of item 1 (price is 650)", 3)
  var item2 = prompt("Enter Quantity of item 2 (price is 100)", 7)
  var priceItem1 = item1 * 650
  var priceItem2 = item2 * 100
  var total = priceItem1 + priceItem2;
  alert("Shipping Charges are 100");
  document.getElementById("C5T10").innerHTML = "<br>"+
  heading.bold() +"<br> <br>"+ "Price of item 1 is 650" +"<br>"+ "Quantity of item 1 is " +item1  +"<br>"+
   "Price of item 2 is 100" +"<br>"+ "Quantity of item 2 is " +item2  +"<br>"+ "Shipping Charges 100" +"<br> <br>"+ "Total Cost of your Order is "+ total ;
}
//task 11
function C5T11() {
  var heading = "Marks Sheet"
  var obtainMarks = prompt("Enter Obtained Marks", 804)
  var totalMarks = prompt("Enter Total Marks", 980)
  var percentage = obtainMarks * 100 / totalMarks
  document.getElementById("C5T11").innerHTML = "<br>"+
  "Marks Obtained : "+ obtainMarks+ "<br>"+ " Total Marks : " +totalMarks+"<br>"+ "Percentage : " + percentage +" %" 
}
//task 12
function C5T12() {
  var us = 10*104.80
  var sr = 25*28
  var pakistaniRP = us + sr
  document.getElementById("C5T12").innerHTML = "<br>" + "10 US Dollors & 25 Saudi Riyals" +"<br>"+ "Total Currency in PKR : " + pakistaniRP;
}
//task 13
function C5T13() {
  var num = prompt("Enter a veriable (only number)", 25)
  var n = parseInt(num);
  var result = n + 5 * 10 / 2 
  document.getElementById("C5T13").innerHTML = "<br>"+  n +" + 5 * 10 / 2 " + "<br>"+ "Calculated Value : " + result;
}
//task 14
function C5T14() {
  var heading = "Age Calculator"
  var currentYear = prompt("Enter Current Year ", 2020)
  var birthYear = prompt("Enter your Birth Year ", 2000)
  var age = currentYear - birthYear
  document.getElementById("C5T14").innerHTML = "<br>"+ heading.bold() + "<br> <br>"+ "You are " + age + " years Old.";
}
//task 15
function C5T15() {
  var heading = "The Geometrizer"
  var r = prompt("Enter radius of circle ", 20)
  var circumferansce = 2 * 3.142 * r
  var area = 3.142 * r * r
  document.getElementById("C5T15").innerHTML = "<br>"+ heading.bold() + "<br> <br>"+ "Radius of the circle is : " + r +"<br>"+  " Circumferance of the circle is : "+circumferansce +"<br>"+  " Area of the circle is : "+area ;
}
//task 16
function C5T16() {
  var heading = "The Lifetime Supply Calculator"
  var snack = prompt("Enter your Favorite Snack", "Cup-Cakes")
  var snackAmmount = prompt( "Enter Snack amount (per day)", 5)
  var currentAge = prompt("Enter your Current Age", 20 )
  var estimatedAge = prompt("Enter your Estimated Age", 65 )
  var days = (estimatedAge - currentAge) * 365
  var totalSnacks = days * snackAmmount
  document.getElementById("C5T16").innerHTML = "<br>"+ heading.bold() + "<br> <br>"+ "Favorite Snack : " + snack +"<br>"+  
  "Amount of Snacks per day : "+snackAmmount +"<br>"+  "Current Age : "+currentAge  +"<br>"+  "Estimated Age : "+estimatedAge
  +"<br> You will need " +totalSnacks+" "+snack+ " to last you until the ripe old age of " + estimatedAge ;
}
//////////////////////////////Chapter 6

////task 1
function C6T1() {
  var heading = "Result : "
  var a = prompt("Please Enter the value of a", 10)
    document.getElementById("C6T1").innerHTML = 
    "<br>"+ heading.bold() + "<br> <br>"+ "The Value of a is : " + a +"<br>"+
     "______________________________________" + "<br>"+
     "The Value of ++a is : " + ++a +"<br>"+
     "Now the Value of a is : " + a +"<br> <br>"+
     "The Value of a++ is : " + a++ +"<br>"+
     "Now the Value of a is : " + a +"<br> <br>" +
     "The Value of --a is : " + --a +"<br>"+
     "Now the Value of a is : " + a +"<br> <br>"+
     "The Value of a-- is : " + a-- +"<br>"+
     "Now the Value of a is : " + a +"<br>" ; 
}
////task 2
function C6T2() {
  var heading = "a=2, b=1"
  var a = 2
  var b = 1
  var w = --a
  var x = --b
  var y = ++b
  var z = b--

    document.getElementById("C6T2").innerHTML = 
"<br>"+ heading.bold() + "<br> <br>"+
"--a ; " + w+ "<br>" +
"--a - --b ; " + w - x + "<br>" +
"--a - --b + ++b ; " + w - x + y + "<br>" +
"Result: --a - --b + ++b + b-- ; " + w - x + y + z ;
}
////// task 3
function C6T3() {
  var name = prompt("What is your nice name __?",)
  if(name == ""){
  alert("Please enter your name...");
}
else{
  document.getElementById("C6T3").innerHTML = 
  name.bold()+", <br> Good Morning ";
}
}
/////task 4
function C6T4() {
  var n = prompt("Enter a value to get it's table",)
  if(n == ""){
    n = 5
    document.write("<b>Table of " +n+ "</b>" + "<br> <br>")
    for(var i=1; i<=10; i++)
    {
      document.write("<br>"+ n + "x " + i + " = " + n*i + "<br>");
    } 
}
else{
  document.write("<b>Table of " +n + "</b>" + "<br> <br>")
  for(var i=1; i<=10; i++)
  {
    document.write("<br>"+ n + "x " + i + " = " + n*i + "<br>");
  } 
}
}
