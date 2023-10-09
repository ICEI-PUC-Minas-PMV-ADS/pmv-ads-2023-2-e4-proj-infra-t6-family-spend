using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Family_Spend.Models
{
    [BsonIgnoreExtraElements]
    public class Familia
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonElement("Nome")]
        public string NomeFamilia { get; set; } = null;

        [BsonElement("Endereco")]
        public string Endereco { get; set; }
    }
}