using Family_Spend.Models;
using Family_Spend.Services;
using Microsoft.AspNetCore.Mvc;

namespace Family_Spend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FamiliaController : ControllerBase
    {
        private readonly FamiliasService _familiasService;

        public FamiliaController(FamiliasService familiaService)
        {
            _familiasService = familiaService;
        }

        [HttpGet]
        public async Task<List<Familia>> Get() => await _familiasService.GetAsync();

        [HttpGet("{id}")]
        public async Task<ActionResult<Familia>> Get(string id)
        {
            var familia = await _familiasService.GetAsync(id);
            return familia is null ? NotFound() : Ok(familia);
        }

        [HttpPost]
        public async Task<IActionResult> Post(Familia familiaNova)
        {
            await _familiasService.CreateAsync(familiaNova);
            return CreatedAtAction(nameof(Get), new { id = familiaNova.Id }, familiaNova);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(string id, Familia familiaAtualizada)
        {
            var familia = await _familiasService.GetAsync(id);
            if (familia is null)
                return NotFound();
            familiaAtualizada.Id = familia.Id;
            await _familiasService.UpdateAsync(id, familiaAtualizada);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            var familia = await _familiasService.GetAsync(id);
            if (familia is null)
                return NotFound();
            await _familiasService.RemoveAsync(id);
            return NoContent();
        }
    }
}