using Domain;
using Domain.Database_Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Persistence
{
    public class DataContext:IdentityDbContext<User>
    {
        public DataContext(DbContextOptions opt):base(opt)
        {

        }

       
    }
}
