function registerUser(){
    let userName = document.getElementById("userNameInput").value;
    let userPassword = document.getElementById("userPasswordInput").value;

    if(userName && userPassword){
        let storedUsers = JSON.parse(localStorage.getItem("users")) || [];
        console.log(storedUsers);

        storedUsers.push({username: userName, password: userPassword});

        localStorage.setItem("users", JSON.stringify(storedUsers));
        alert("User registered successfully");
    } else {
        alert("Please enter both username and password");
    }
   }

   function userLogin(){
    let loginUserName = document.getElementById("loginUserNameInput").value;
    let loginUserPassword = document.getElementById("loginUserPasswordInput").value;
    
    let storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = storedUsers.some(user => user.username === loginUserName && user.password === loginUserPassword);

    if(userExists){
        alert("Login successful");
    } else {
        alert("No credentials found, unable to login");
    }
   }