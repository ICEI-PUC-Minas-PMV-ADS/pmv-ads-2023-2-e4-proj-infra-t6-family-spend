using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Family_Spend.Models
{
    public class Gasto
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        public string FamiliaId { get; set; }

        public string UsuarioId { get; set; }

        [BsonElement("NomeGasto")]
        public string NomeGasto { get; set; } = null;

        [BsonElement("ValorGasto")]
        public float? Valor { get; set; } = null;

        [BsonElement("Data")]
        public DateTime? Data { get; set; } = null;

        [BsonIgnoreIfNull]
        public string NomeUsuario { get; set; }
    }
}