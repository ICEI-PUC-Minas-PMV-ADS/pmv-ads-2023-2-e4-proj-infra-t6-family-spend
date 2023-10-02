using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Family_Spend.Models
{
    public class Gasto
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonElement("NomeGasto")]
        public string NomeGasto { get; set; } = null;

        [BsonElement("ValorGasto")]
        public float? Valor { get; set; } = null;

        [BsonElement("Data")]
        public DateTime? Data { get; set; } = null;
    }
}