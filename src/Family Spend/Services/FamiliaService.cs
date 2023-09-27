using Family_Spend.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace Family_Spend.Services
{
    public class FamiliaService
    {
        private readonly IMongoCollection<Familia> _familiaConnection;

        public FamiliaService(IOptions<FamiliaDatabaseSettings> familiaService)
        {
            var mongoClient = new MongoClient(familiaService.Value.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(familiaService.Value.Database);

            _familiaConnection = mongoDatabase.GetCollection<Familia>(familiaService.Value.FamiliaConnectionName);
        }

        public async Task<List<Familia>> GetAsync() => await _familiaConnection.Find(x => true).ToListAsync();
        public async Task<Familia> GetAsync(string id) => await _familiaConnection.Find(x => x.Id == id).FirstOrDefaultAsync();
        public async Task CreateAsync(Familia familia) => await _familiaConnection.InsertOneAsync(familia);
        public async Task UpdateAsync(string id, Familia familia) => await _familiaConnection.ReplaceOneAsync(x => x.Id == id, familia);
        public async Task RemoveAsync(string id) => await _familiaConnection.DeleteOneAsync(x => x.Id == id);
    }
}
