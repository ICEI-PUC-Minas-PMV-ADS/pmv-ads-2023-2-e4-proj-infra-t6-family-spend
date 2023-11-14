using AspNetCore.Identity.MongoDbCore.Models;

namespace WebApplicationfamily6.Models
{
    public class ApplicationUser : MongoIdentityUser<Guid>
    {
        public string FullName { get; set; } = string.Empty;
    }
}
