//Facebook
window.fbAsyncInit = function() {
  FB.init({
    appId      : '260158550205238',
    cookie     : true,
    xfbml      : true,
    version    : 'v18.0'
  });
    
  FB.AppEvents.logPageView();   
    
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "https://connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));

 
FB.getLoginStatus(function(response) {
  statusChangeCallback(response);
  if (response.status === 'connected') {
    console.log(response.authResponse.accessToken);
  }
});


function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
    if (response.status === 'connected') {
      console.log(response.authResponse.accessToken);
    }
  });
}

function customFacebookLogin() {
  FB.login(function(response) {
    if (response.authResponse) {
         console.log('Bienvenido!  Gracias por tu informacion.... ');
         FB.api('/me', {fields: 'name, email'}, function(response) {
          alert("Tu nombre es, " + response.name + ". y tu email es " + response.email);
         });
    } else { 
         console.log('Inicio de Sesion Cancelado'); }
  });
}

FB.api('/me', function(response) {
  console.log(JSON.stringify(response));
});



//GOOGLE

function onSuccess(googleUser) {
  console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
  var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId());
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());

    // Mostrar los datos en una ventana
    var userData = {
        id: profile.getId(),
        name: profile.getName(),
        imageUrl: profile.getImageUrl(),
        email: profile.getEmail()
    };

    var userDataString = JSON.stringify(userData, null, 2);
    document.getElementById('google-data').innerText = userDataString;
}

function onFailure(error) {
  console.log(error);
  
  console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
  var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId());
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());

    // Mostrar los datos en una ventana
    var userData = {
        id: profile.getId(),
        name: profile.getName(),
        imageUrl: profile.getImageUrl(),
        email: profile.getEmail()
    };

    var userDataString = JSON.stringify(userData, null, 2);
    document.getElementById('google-data').innerText = userDataString;
    alert("Fallo")
}

function renderButton() {
  gapi.signin2.render('my-signin2', {
      'scope': 'profile email',
      'width': 300,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
      'onsuccess': onSuccess,
      'onfailure': onFailure
  });
}