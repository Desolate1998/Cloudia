using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Error_Handling_Models
{
    public class APIResponse<T>
    {
        public bool IsSuccessful { get; set; }
        public T Data { get; set; }
        public string ErrorMessage { get; set; }
    }
}
