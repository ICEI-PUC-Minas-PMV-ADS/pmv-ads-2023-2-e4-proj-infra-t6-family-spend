using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Family_Spend.Models
{
    public class Usuario
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonElement("NomeUsuario")]
        public string NomeUsuario { get; set; } = null;

        [BsonElement("Email")]
        public string Email { get; set; }        
        
        [BsonElement("Senha")]
        public string Senha { get; set; }

        [BsonElement("RelacaoFamiliar")]
        public string RelacaoFamiliar { get; set; }

        public List<Gasto> Gastos { get; set; }

        public float? TotalMensal 
        { 
            get 
            {
                float? total = 0;
                foreach (var gasto in Gastos)
                {
                    total += gasto.Valor;
                }
                return total;
            }
        }
    }
}