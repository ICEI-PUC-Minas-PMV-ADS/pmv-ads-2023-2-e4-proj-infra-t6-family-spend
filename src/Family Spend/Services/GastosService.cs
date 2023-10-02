using Family_Spend.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace Family_Spend.Services
{
    public class GastosService
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
    }
}
