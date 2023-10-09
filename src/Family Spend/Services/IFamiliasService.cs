using Family_Spend.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace Family_Spend.Services
{
    public interface IFamiliasService
    {
        Task<List<Familia>> GetAsync();
        Task<Familia> GetAsync(string id);
        Task CreateAsync(Familia familiaNova);
        Task UpdateAsync(string id, Familia familiaAtualizada);
        Task RemoveAsync(string id);
    }
}