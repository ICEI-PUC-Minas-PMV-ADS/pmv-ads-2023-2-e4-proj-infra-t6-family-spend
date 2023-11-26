using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Family_Spend.Models
{
    [BsonIgnoreExtraElements]
    public class Gasto
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonElement("familiaId")]
        public string FamiliaId { get; set; }

        [BsonElement("usuarioId")]
        public string UsuarioId { get; set; }

        [BsonElement("nomeGasto")]
        public string NomeGasto { get; set; } = null;

        [BsonElement("valorGasto")]
        public float? Valor { get; set; } = null;

        [BsonElement("data")]
        public DateTime? Data { get; set; } = null;

        [BsonIgnoreIfNull]
        public string NomeUsuario { get; set; }
    }
}