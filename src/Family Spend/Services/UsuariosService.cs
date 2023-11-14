using Family_Spend.Models;
using Microsoft.Extensions.Options;
using MongoDB.Bson;
using MongoDB.Driver;

namespace Family_Spend.Services
{
    public class UsuariosService : IUsuariosService
    {
        private readonly IMongoCollection<Usuario> _usuariosCollection;

        public UsuariosService(IOptions<FamilySpendDatabaseSettings> usuariosService)
        {
            var mongoClient = new MongoClient(usuariosService.Value.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(usuariosService.Value.DatabaseName);
            _usuariosCollection = mongoDatabase.GetCollection<Usuario>(usuariosService.Value.UsuarioConnectionName);
        }

        public async Task<List<Usuario>> GetAsync() => await _usuariosCollection.Find(x => true).ToListAsync();
        //public async Task<List<Usuario>> BuscarUsuarioPorIdFamilia(string idFamilia) => await _usuariosCollection.Find(x => x.FamiliaId == idFamilia).ToListAsync();
        public async Task<Usuario> BuscarUsuarioLogin(string nomeUsuario, string senha) => await _usuariosCollection.Find(x => x.NomeUsuario == nomeUsuario && x.Senha == senha).FirstOrDefaultAsync();
        public async Task<Usuario> GetAsync(string id) => await _usuariosCollection.Find(x => x.Id == id).FirstOrDefaultAsync();
        public async Task CreateAsync(Usuario usuarioNovo) => await _usuariosCollection.InsertOneAsync(usuarioNovo);
        public async Task UpdateAsync(string id, Usuario usuarioAtualizado) => await _usuariosCollection.ReplaceOneAsync(x => x.Id == id, usuarioAtualizado);
        public async Task RemoveAsync(string id) => await _usuariosCollection.DeleteOneAsync(x => x.Id == id);

       /* public async Task<IEnumerable<Usuario>> GetAllAsync()
        {
            var pipeline = new BsonDocument[]
            {
                new BsonDocument("$lookup", new BsonDocument
                {
                    { "from", "Familias" },
                    { "localField", "FamiliaId" },
                    { "foreignField", "_id" },
                    { "as", "usuario_familia" },
                }),
                new BsonDocument("$unwind", "$usuario_familia"),
                new BsonDocument("$project", new BsonDocument
                {
                    { "_id", 1 },
                    { "FamiliaId", 1 },
                    { "NomeUsuario", 1 },
                    { "NomeFamilia",  "$project_familia.NomeFamilia"}
                })
            };
            var results = await _usuariosCollection.Aggregate<Usuario>(pipeline).ToListAsync();

            return results;
        }*/
    }
}
