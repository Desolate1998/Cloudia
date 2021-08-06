using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Persistence;
using System;

namespace API.Extensions
{
    public static class ApplicationServicesExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config)
        {
            //services.AddSwaggerGen(c =>
            //{
            //    c.SwaggerDoc("v1", new OpenApiInfo { Title = "API", Version = "v1" });
            //});

         

            services.AddDbContext<DataContext>(opt =>
                {
                    opt.UseLazyLoadingProxies();
                    opt.UseSqlServer("Server=localhost\\SQLEXPRESS;Database=Cloudia;Trusted_Connection=True;");
                }
            );
            return services;
        }
    }
}