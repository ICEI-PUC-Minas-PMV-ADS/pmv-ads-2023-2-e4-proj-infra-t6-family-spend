using System.ComponentModel.DataAnnotations;

namespace WebApplicationfamily6.Dtos
{
    public class LoginRequest
    {
        [Required, EmailAddress]
        public string Email { get; set; } = string.Empty;
        [Required, DataType(DataType.Password)]
        public string Password { get; set; } = string.Empty;
    }
}
