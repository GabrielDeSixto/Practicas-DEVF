const cuentas = [
    {nombre:"Mali", saldo:200},
    {nombre:"Gera", saldo:290},
    {nombre:"Maui", saldo:67},
];


function login(){
  let username = document.getElementById('user').value;
  let password = document.getElementById('contraseña').value;

    let account = cuentas.find(function(cuenta) {
      return cuenta.nombre == username;
    });
    
    if (account && password === "12345") { 
      alert("Login successful!");
      window.location.href = "./pages/cuentas.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
}







