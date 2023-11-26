using Family_Spend.Models;
using Microsoft.Extensions.Options;
using MongoDB.Bson;
using MongoDB.Driver;
using System;
using WebApplicationfamily6.Models;

namespace Family_Spend.Services
{
    public class UsuariosService : IUsuariosService
    {
        private readonly IMongoCollection<ApplicationUser> _usuariosCollection;

        public UsuariosService(IOptions<FamilySpendDatabaseSettings> usuariosService)
        {
            var mongoClient = new MongoClient(usuariosService.Value.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(usuariosService.Value.DatabaseName);
            _usuariosCollection = mongoDatabase.GetCollection<ApplicationUser>(usuariosService.Value.ApplicationUserConnectionName);
        }

        public async Task<List<ApplicationUser>> BuscarUsuariosPorIdFamilia(string familiaId) => await _usuariosCollection.Find(x => x.FamiliaId == familiaId).ToListAsync();
    }
}
