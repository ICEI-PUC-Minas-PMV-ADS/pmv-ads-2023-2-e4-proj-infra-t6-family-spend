using Family_Spend.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using WebApplicationfamily6.Models;

namespace Family_Spend.Services
{
    public interface IUsuariosService
    {
        Task<List<ApplicationUser>> BuscarUsuariosPorIdFamilia(string familiaId);
    }
}