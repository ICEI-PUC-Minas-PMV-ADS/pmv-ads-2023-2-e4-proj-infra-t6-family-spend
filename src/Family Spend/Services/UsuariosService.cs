using Family_Spend.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace Family_Spend.Services
{
    public class UsuariosService
    {
        private readonly IMongoCollection<Usuario> _usuariosCollection;

        public UsuariosService(IOptions<FamilySpendDatabaseSettings> usuariosService)
        {
            var mongoClient = new MongoClient(usuariosService.Value.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(usuariosService.Value.DatabaseName);

            _usuariosCollection = mongoDatabase.GetCollection<Usuario>(usuariosService.Value.UsuarioConnectionName);
        }

        public async Task<List<Usuario>> GetAsync() => await _usuariosCollection.Find(x => true).ToListAsync();
        public async Task<Usuario> GetAsync(string id) => await _usuariosCollection.Find(x => x.Id == id).FirstOrDefaultAsync();
        public async Task CreateAsync(Usuario usuarioNovo) => await _usuariosCollection.InsertOneAsync(usuarioNovo);
        public async Task UpdateAsync(string id, Usuario usuarioAtualizado) => await _usuariosCollection.ReplaceOneAsync(x => x.Id == id, usuarioAtualizado);
        public async Task RemoveAsync(string id) => await _usuariosCollection.DeleteOneAsync(x => x.Id == id);
    }
}
