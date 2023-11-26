using AspNetCore.Identity.MongoDbCore.Models;

namespace WebApplicationfamily6.Models
{
    public class ApplicationUser : MongoIdentityUser<Guid>
    {
        public string FullName { get; set; } = string.Empty;

        public string FamiliaId { get; set; } = string.Empty;
    }
}
