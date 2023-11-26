using Family_Spend.Models;
using Family_Spend.Services;
using Microsoft.AspNetCore.Mvc;

namespace Family_Spend.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class GastoController : ControllerBase
    {
        private readonly IGastosService _gastosService;

        public GastoController(IGastosService gastoService)
        {
            _gastosService = gastoService;
        }

        [HttpGet]
        public async Task<List<Gasto>> Get() => await _gastosService.GetAsync();

        [HttpGet("{id}")]
        public async Task<ActionResult<Gasto>> Get(string id)
        {
            var gasto = await _gastosService.GetAsync(id);
            return gasto is null ? NotFound() : Ok(gasto);
        }

        [HttpGet("{familiaId}")]
        public async Task<ActionResult<List<Gasto>>> GetFamilia(string familiaId)
        {
            var gasto = await _gastosService.GetAsyncFamilia(familiaId);
            return gasto is null ? NotFound() : Ok(gasto);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Gasto gastoNovo)
        {
            await _gastosService.CreateAsync(gastoNovo);
            return CreatedAtAction(nameof(Get), new { id = gastoNovo.Id }, gastoNovo);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(string id, Gasto gastoAtualizado)
        {
            var gasto = await _gastosService.GetAsync(id);
            if (gasto is null)
                return NotFound();
            gastoAtualizado.Id = gasto.Id;
            await _gastosService.UpdateAsync(id, gastoAtualizado);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            var gasto = await _gastosService.GetAsync(id);
            if (gasto is null)
                return NotFound();
            await _gastosService.RemoveAsync(id);
            return NoContent();
        }
    }
}