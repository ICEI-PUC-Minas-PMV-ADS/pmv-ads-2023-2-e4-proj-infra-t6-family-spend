using Family_Spend.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace Family_Spend.Services
{
    public interface IGastosService
    {
        Task<List<Gasto>> GetAsync();
        Task<Gasto> GetAsync(string id);
        Task<List<Gasto>> GetAsyncFamilia(string familiaId);
        Task CreateAsync(Gasto gastoNovo);
        Task UpdateAsync(string id, Gasto gastoAtualizado);
        Task RemoveAsync(string id);
        Task<IEnumerable<Gasto>> GetAllAsync();
    }
}