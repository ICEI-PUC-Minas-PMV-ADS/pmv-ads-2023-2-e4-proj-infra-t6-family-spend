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

        [BsonElement("nomeFamilia")]
        public string NomeFamilia { get; set; } = null;

        [BsonElement("endereco")]
        public string Endereco { get; set; }
    }
}