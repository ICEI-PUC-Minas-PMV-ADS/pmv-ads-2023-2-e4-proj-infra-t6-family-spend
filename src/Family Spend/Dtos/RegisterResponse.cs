using System.ComponentModel.DataAnnotations;

namespace WebApplicationfamily6.Dtos
{
    public class RegisterResponse
    {
        public string Message { get; set; } = string.Empty;
        public bool Success { get; set; }
    }
}
