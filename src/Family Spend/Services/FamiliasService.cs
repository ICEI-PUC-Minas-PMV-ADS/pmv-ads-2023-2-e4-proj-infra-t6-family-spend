using Family_Spend.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace Family_Spend.Services
{
    public class FamiliasService
    {
        private readonly IMongoCollection<Familia> _familiasCollection;

        public FamiliasService(IOptions<FamilySpendDatabaseSettings> familiasService)
        {
            var mongoClient = new MongoClient(familiasService.Value.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(familiasService.Value.DatabaseName);

            _familiasCollection = mongoDatabase.GetCollection<Familia>(familiasService.Value.FamiliaConnectionName);
        }

        public async Task<List<Familia>> GetAsync() => await _familiasCollection.Find(x => true).ToListAsync();
        public async Task<Familia> GetAsync(string id) => await _familiasCollection.Find(x => x.Id == id).FirstOrDefaultAsync();
        public async Task CreateAsync(Familia familiaNova) => await _familiasCollection.InsertOneAsync(familiaNova);
        public async Task UpdateAsync(string id, Familia familiaAtualizada) => await _familiasCollection.ReplaceOneAsync(x => x.Id == id, familiaAtualizada);
        public async Task RemoveAsync(string id) => await _familiasCollection.DeleteOneAsync(x => x.Id == id);
    }
}
