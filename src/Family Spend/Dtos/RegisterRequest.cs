using System.ComponentModel.DataAnnotations;

namespace WebApplicationfamily6.Dtos
{
    public class RegisterRequest
    {
        [Required, EmailAddress]
        public string Email { get; set; } = string.Empty;

        public string Username { get; set; } = string.Empty;

        [Required]
        public string FullName { get; set; } = string.Empty;

        [Required]
        public string FamiliaId { get; set; } = string.Empty;

        [Required, DataType(DataType.Password)]
        public string Password { get; set; } = string.Empty;

        [Required, DataType(DataType.Password), Compare(nameof(Password), ErrorMessage = "As senhas precisam ser iguais.")]
        public string ConfirmPassword { get; set; } = string.Empty;
    }
}
