using Family_Spend.Models;
using Microsoft.Extensions.Options;
using MongoDB.Bson;
using MongoDB.Driver;

namespace Family_Spend.Services
{
    public class GastosService : IGastosService
    {
        private readonly IMongoCollection<Gasto> _gastosCollection;

        public GastosService(IOptions<FamilySpendDatabaseSettings> gastosService)
        {
            var mongoClient = new MongoClient(gastosService.Value.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(gastosService.Value.DatabaseName);

            _gastosCollection = mongoDatabase.GetCollection<Gasto>(gastosService.Value.GastoConnectionName);
        }

        public async Task<List<Gasto>> GetAsync() => await _gastosCollection.Find(x => true).ToListAsync();
        public async Task<Gasto> GetAsync(string id) => await _gastosCollection.Find(x => x.Id == id).FirstOrDefaultAsync();
        public async Task CreateAsync(Gasto gastoNovo) => await _gastosCollection.InsertOneAsync(gastoNovo);
        public async Task UpdateAsync(string id, Gasto gastoAtualizado) => await _gastosCollection.ReplaceOneAsync(x => x.Id == id, gastoAtualizado);
        public async Task RemoveAsync(string id) => await _gastosCollection.DeleteOneAsync(x => x.Id == id);

        public async Task<IEnumerable<Gasto>> GetAllAsync()
        {
            var pipeline = new BsonDocument[]
            {
                new BsonDocument("$lookup", new BsonDocument
                {
                    { "from", "Usuarios" },
                    { "localField", "UsuarioId" },
                    { "foreignField", "_id" },
                    { "as", "gastos_usuario" },
                }),
                new BsonDocument("$unwind", "$gastos_familia"),
                new BsonDocument("$project", new BsonDocument
                {
                    { "_id", 1 },
                    { "UsuarioId", 1 },
                    { "NomeGasto", 1 },
                    { "NomeUsuario", 1 }
                })
            };
            var results = await _gastosCollection.Aggregate<Gasto>(pipeline).ToListAsync();

            return results;
        }
    }
}
