using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Family_Spend.Models
{
    public class Itens
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? IdListaCompras { get; set; }

        [BsonElement("Nome")]
        public string Nome { get; set; } = null;

        public long Preco { get; set; }

        public string Categoria { get; set; }

        public int? GastoId { get; set; }
    }
}