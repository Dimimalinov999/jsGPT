console.clear()
console.log("you need sum from here?")


function button() {
    let question = document.getElementById("input").value
    if (question == "hey" || question == "hello") {
        alert("Hello :)")
     }
    if (question == "nigga" || question == "fuck" || question == "sex" || question == "drugs") {
        alert("Watch your language!")
    }
    if (question == "turn off your profanity filter") {
        alert("donate at least $2 to unlock the ultimate version of jsGPT!")
    }
    if(question == "do some math" || question == "math") {
        var math1 = prompt("Enter the first number")
        var operator = prompt("enter operator (+,-,*,/) and type V for square root")
        var math2 = prompt("Entet final number (leave this blank if you used sqare root)")
        if (operator == "+") {
            var total = math1 + math2
        }
        if (operator == "*") {
            var total = math1 * math2
        }
        if (operator == "/") {
            var total = math1 / math2
        }
        if (operator == "-") {
            var total = math1 - math2
        }
        if (operator == "V" || operator == "v") {
            var total = Math.sqrt(math1)
        }
     alert("the answer is " + total)
    }
    if (question == "whats the best car brand") {
        alert("BMW :)")
    }
if (question == "login") {
    location.href = "login.html";
        
    }
}
  function login() {
    let username = document.getElementById("user").value
    var password = document.getElementById("pass").value
    
if (username == "dimimalinov999" && password == "koljo123" || username == "npc123" && password == "n123") {
    location.href = "index.html";
} else {
    alert("wrong password or login!, try again!")
}   

}  
