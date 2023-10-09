using Family_Spend.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace Family_Spend.Services
{
    public interface IUsuariosService
    {
        Task<List<Usuario>> GetAsync();
        Task<List<Usuario>> BuscarUsuarioPorIdFamilia(string idFamilia);
        Task<Usuario> GetAsync(string id);
        Task CreateAsync(Usuario usuarioNovo);
        Task UpdateAsync(string id, Usuario usuarioAtualizado);
        Task RemoveAsync(string id);
        Task<IEnumerable<Usuario>> GetAllAsync();
    }
}