namespace AuthenticationService.Models

{
    public class AuthenticateResponse
    {

        public int Id {get;set;}

        public string Email{get;set;}

        public string Password{get;set;}


        public string Token {get;set;}

        public AuthenticateResponse(User user, string token){
        Id =user.Id;
        Email= user.Email;
        Password=user.Password;
        Token=token;
        }

    } 
}