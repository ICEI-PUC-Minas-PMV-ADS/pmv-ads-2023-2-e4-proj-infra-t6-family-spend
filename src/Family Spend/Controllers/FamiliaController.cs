using Family_Spend.Models;
using Family_Spend.Services;
using Microsoft.AspNetCore.Mvc;

namespace Family_Spend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FamiliaController : ControllerBase
    {
        private readonly IFamiliasService _familiasService;
        private readonly IUsuariosService _usuariosService;

        public FamiliaController(IFamiliasService familiaService, IUsuariosService usuarioService)
        {
            _familiasService = familiaService;
            _usuariosService = usuarioService;
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
        public async Task<IActionResult> Post([FromBody] Familia familiaNova)
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
            return Ok("Atualizado com sucesso");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            var familia = await _familiasService.GetAsync(id);
            if (familia is null)
                return NotFound();
            await _familiasService.RemoveAsync(id);
            return Ok("Deletado com sucesso");
        }
    }
}