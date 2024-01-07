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
});


function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function customFacebookLogin() {
  FB.login(function(response) {
    if (response.authResponse) {
      checkLoginState();
    } else {
      console.log('Inicio de sesión con Facebook cancelado.');
    }
  }, { scope: 'public_profile,email' });
}


//GOOGLE


