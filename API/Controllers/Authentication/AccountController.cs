using API.Services;
using Domain.Authentication_Models;
using Domain.Database_Models;
using Domain.Error_Handling_Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers.Authentication
{
    
    [Route("api/[controller]"),AllowAnonymous,ApiController]
    public class AccountController : ControllerBase
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private readonly TokenServices _tokenServices;

        public AccountController(UserManager<User> userManager, SignInManager<User> signInManager,TokenServices tokenServices)
        {
            this._userManager = userManager;
            this._signInManager = signInManager;
            this._tokenServices = tokenServices;
        }
        
        [HttpPost("login")]
        public async Task<ActionResult<APIResponse<LoggedInModel>>> Login([FromBody]LoginModel loginInfo)
        {
            var user = await _userManager.FindByEmailAsync(loginInfo.Email);
            if (user==null)  return Unauthorized();
            var result = await _signInManager.CheckPasswordSignInAsync(user, loginInfo.Password, false);
            if (result.Succeeded)
            {
                return new APIResponse<LoggedInModel>
                {
                    Data = new LoggedInModel
                    {
                        Token = _tokenServices.CreateToken(user),
                    },
                    IsSuccessful = true,
                    ErrorMessage=""
                
                };
            }
            return Unauthorized();
        }

        [HttpPost("register")]
        public async Task<ActionResult<APIResponse<bool>>> RegisterNewUser([FromBody]RegisterModel data)
        {
            if (await _userManager.Users.AnyAsync(x => x.Email == data.Email)) return new APIResponse<bool>() { ErrorMessage = "Email Already In User",IsSuccessful=false };
            var user = new User()
            {
                Email = data.Email,
                UserName = data.FirstName + data.LastName,

            };
            var results = await _userManager.CreateAsync(user, data.Password);
            if (results.Succeeded)
            {
                return new APIResponse<bool>()
                {
                    IsSuccessful = true,
                    Data = true
                };
            }
            else
            {
                return new APIResponse<bool>()
                {
                    ErrorMessage = results.Errors.First().Description,
                    IsSuccessful = false
                };
            }
        }
       
        [HttpGet]
        public async Task<string> test()
        {
            return "meh";
        }

        
    
    }
}
