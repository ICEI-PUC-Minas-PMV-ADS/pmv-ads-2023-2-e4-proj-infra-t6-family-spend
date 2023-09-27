using Family_Spend.Models;
using Family_Spend.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Family_Spend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FamiliaController : ControllerBase
    {
        private readonly FamiliaService _familiaService;

        public FamiliaController(FamiliaService familiaService)
        {
            _familiaService = familiaService;
        }

        [HttpGet]
        public async Task<List<Familia>> GetFamilias() => await _familiaService.GetAsync();

        [HttpPost]
        public async Task<Familia> PostFamilia(Familia familia)
        {
            await _familiaService.CreateAsync(familia);

            return familia;
        }
    }
}