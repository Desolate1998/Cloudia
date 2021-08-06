using Domain.Database_Models;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace API.Services
{
    public class TokenServices
    {
        public string CreateToken(User user)
        {
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Email,user.Email),
                new Claim(ClaimTypes.NameIdentifier,user.Id)

            };
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("OIUdywwwjmewknoiwnfwnewlinrwoubwfo"));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);
            var TokenDescrip = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(31),
                SigningCredentials =creds
            };
            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(TokenDescrip);
            return tokenHandler.WriteToken(token);
        }
    }
}
