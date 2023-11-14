using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Family_Spend.Models
{
    public class Usuario
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        public string? FamiliaId { get; set; }

        [BsonElement("NomeUsuario")]
        public string NomeUsuario { get; set; } = null;

        [BsonElement("Email")]
        public string Email { get; set; }

        public string Senha { get; set; }

        [BsonIgnoreIfNull]
        public string NomeFamilia { get; set; }
    }
}