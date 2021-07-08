// Chapter no 38to44

// Task no 1

// 1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.

// function sum(a,b) {
//     var c = Math.pow(a,b);
//     document.write(c);
// }
// sum(5,6);

// Task no 2

// 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, …

// var year = parseInt(prompt("Enter a year to check year is leap year or not "));

// function leapyear(year)
// {
// return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// }
// document.write( leapyear(year));

// Task no 3

// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions

// function sValue(a,b,c) {
//     var sval = (a + b + c)/2;
//     return sval;
// }
// function area(a,b,c) {
//     S = sValue(5,6,7)
//     var area = Math.sqrt(S*((S-a)*(S-b)*(S-c)));
//     document.write("Area of triangle is "+ area);
// }
// area(5,6,7);

// Task no 4

// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.

// var sub1 = parseInt(prompt("Enter your Math marks"));
// var sub2 = parseInt(prompt("Enter your Biology marks"));
// var sub3 = parseInt(prompt("Enter your English marks"));
// var totalSub = parseInt(prompt("Enter your total marks"));

// var a = sub1+sub2+sub3;

// function average(){
//     return(a/3);
// }

// function percentage(){
//     return(a/totalSub*100);
// }
// function Main() {
//   document.write("average marks : "+average(a) + "<br />" + "percentage : " + percentage(a));
// }
// Main();

// Task no 5

// 5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.

// var a = "Pakistan";

// function character(){
//     return(a.indexOf("t"))
// }
// document.write(" In " + a + " the indexof  't' is  "  + character(a));

// Task no 6

// 6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.


// var string = prompt("Write a word to remove vowels in it")

// function removeVowels() {
//    return string.replace(/[aeiouAEIOU]/gi, '');
//  }

// document.write("Before removing vowel " + string + "<br>" + "After removing vowel " + removeVowels(string))


// Task no 7

// 7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence


// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var chars = str.toLowerCase().split("");
//     var count = 0;
    
    
//     for(let i = 0; i < chars.length - 1; i++) {
//       var char = chars[i];
//       var next = chars[i + 1];
      
//       if(isCorrectCharacter(char) && isCorrectCharacter(next)) {
//         count++
//       }
//     }
    
//     return count;
//   }
  
//   function isCorrectCharacter(char) {
//     switch (char) {
//       case 'a':
//       case 'e':
//       case 'i':
//       case 'o':
//       case 'u':
//         return true;
//       default:
//         return false;
//     }
//   }
  
//   var found = findOccurrences();
  
//   document.write(found);


// Task no 8

// 8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.

// var distance = parseInt(prompt("Write a distance between two cities in ('km')"));

// function convertMeter(){
//     return(distance*1000)
// }
// function convertFeet(){
//     return(distance*3280.84)
// }
// function convertInches(){
//     return(distance*39370.1)
// }
// function convertCm(){
//     return(distance*100000)
// }

// document.write(distance + "km" + "<br>" + convertMeter(distance) + "m" + "<br>" + convertFeet(distance) + "feet" + "<br>" + convertInches(distance) + "inches" + "<br>" + convertCm(distance) +  "cm"  ) 

// Task no 9

// 9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.


// function get_salary() {

//     var hours = 40;
//     var rate = 12.00;
    
    
//     if (hours>= 40)
    
//     {
//     regpay = (rate * 40)
//     overtimepay = ((rate * 1.5) * (hours - 40))
//     pay = (regpay + overtimepay)
    
//         return ("You earned overtime " + hours + "hours !" + " Your total pay is " + pay);
    
//     }
    
//     else 
//     {
//     regpay = (rate * hours)
//     overtimepay = 0.00
    
//     document.write("Your total pay is " + regpay);
//     }
//     }

//     document.write(get_salary());

// Task no  10

// 10. A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer.


// var cash = +prompt("Enter cash (in hundreds): ");
//     var hundred = Math.round(cash / 130);
//     var fifty = Math.round((cash %100 )/ 50);
//     var ten = Math.round(((cash %100)%50)/10);

// function currencyDenomination() {
//      return ( "You have " + hundred + "Hundred notes" + fifty  + "fifty notes"+ ten + "ten notes" )
//     }

// document.write (currencyDenomination());


// Chapter no 43 to 48

// Task no 1

// 1. Show an alert box on click on a link.

//// In HTML file we code like this////

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
    //<a href="#" onclick="alert('Welcome!')"> click </a>
// </body>
// <script src="app.js"></script>
// </html>

// Task no 2

// 2. Display some Mobile images in browser. On click on an
// image Show the message in alert to user.

////// In HTML file we write this//////

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <img src="https://images.unsplash.com/photo-1548094891-c4ba474efd16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1370&q=80" 
//     style="height: 200px; margin: 10px; width: 200px;" onclick="alert('Thank you ! for purchasing a mobile phone from us');" alt="">
//     <img src="https://images.unsplash.com/photo-1505156868547-9b49f4df4e04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1318&q=80" 
//     style="height: 200px; margin: 10px; width: 200px;" onclick="alert('Thank you ! for purchasing a mobile phone from us');" alt="">
//     <img src="https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1301&q=80" 
//     style="height: 200px; margin: 10px; width: 200px;" onclick="alert('Thank you ! for purchasing a mobile phone from us');" alt="">
//     <img src="https://images.unsplash.com/photo-1567700853887-bf34052f994b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80" 
//     style="height: 200px; margin: 10px; width: 200px;" onclick="alert('Thank you ! for purchasing a mobile phone from us');" alt="">
// </body>
// <script src="app.js"></script>
// </html>

// Task no 3

// 3. Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted.

// var arrHead = new Array();	// array for header.
//     arrHead = ['', 'Index', 'Name', 'Class'];

//     // first create TABLE structure with the headers. 
//     function createTable() {
//         var empTable = document.createElement('table');
//         empTable.setAttribute('id', 'empTable'); // table id.

//         var tr = empTable.insertRow(-1);
//         for (var h = 0; h < arrHead.length; h++) {
//             var th = document.createElement('th'); // create table headers
//             th.innerHTML = arrHead[h];
//             tr.appendChild(th);
//         }

//         var div = document.getElementById('cont');
//         div.appendChild(empTable);  // add the TABLE to the container.
//     }

//     // now, add a new to the TABLE.
//     function addRow() {
//         var empTab = document.getElementById('empTable');

//         var rowCnt = empTab.rows.length;   // table row count.
//         var tr = empTab.insertRow(rowCnt); // the table row.
//         tr = empTab.insertRow(rowCnt);

//         for (var c = 0; c < arrHead.length; c++) {
//             var td = document.createElement('td'); // table definition.
//             td = tr.insertCell(c);

//             if (c == 0) {      // the first column.
//                 // add a button in every new row in the first column.
//                 var button = document.createElement('input');

//                 // set input attributes.
//                 button.setAttribute('type', 'button');
//                 button.setAttribute('value', 'Remove');
//                 button.setAttribute('id', 'oButton');
//                 // add button's 'onclick' event.
//                 button.setAttribute('onclick', 'removeRow(this)');

//                 td.appendChild(button);
//             }
//             else {
//                 // 2nd, 3rd and 4th column, will have textbox.
//                 var ele = document.createElement('input');
//                 ele.setAttribute('type', 'text');
//                 ele.setAttribute('value', '');

//                 td.appendChild(ele);
//             }
//         }
//     }

//     // delete TABLE row function.
//     function removeRow(oButton) {
//         var empTab = document.getElementById('empTable');
//         empTab.deleteRow(oButton.parentNode.parentNode.rowIndex); // button -> td -> tr.
//     }



// Task no 4

// 4. Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.


// function swapImg() {
//     document.getElementById("imG").src = "https://images.unsplash.com/photo-1548094891-c4ba474efd16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1370&q=80";
// }
// function returnImg() {
//     document.getElementById("imG").src = "https://images.unsplash.com/photo-1567700853887-bf34052f994b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
// }



// document.write("<img src='https://images.unsplash.com/photo-1567700853887-bf34052f994b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80' id= 'imG' onMouseover='swapImg()' onmouseout='returnImg()' style=' height= '100px'; width ='200px ' ' alt =''>")

// Task no 5


/////// In HTML file we code like this//////////////////


// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//<div>
// <h1 id= "count">0</h1>
// </div>
//<button id= "increase" onclick= "start()">Increase</button>
//<button id = "decrease" onclick= "deCount()">Decrease</button>
// </body>
// <script src="app.js"></script>
// </html>

///////// And in Javascript file we code like this //////////

//var count = 0;
//var count.Heading = document.getElementById("count");
// interval;

//function counter(){
            //count++
            //countHeading.innerHTML = count;
//}
//function start() {
     //count++
            //countHeading.innerHTML = count;
            //clearInterval(interval)

            
// }
//function deCount() {
        // --count
        //countHeading.innerHTML = count;
            //clearInterval(interval);
// }
