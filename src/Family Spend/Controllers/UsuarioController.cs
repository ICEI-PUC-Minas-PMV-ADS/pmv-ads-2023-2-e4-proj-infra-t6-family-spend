using Family_Spend.Models;
using Family_Spend.Services;
using Microsoft.AspNetCore.Mvc;

namespace Family_Spend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsuarioController : ControllerBase
    {
        private readonly IUsuariosService _usuariosService;
        private readonly IFamiliasService _familiasService;

        public UsuarioController(IUsuariosService usuarioService, IFamiliasService familiaService)
        {
            _usuariosService = usuarioService;
            _familiasService = familiaService;
        }

        [HttpGet]
        public async Task<List<Usuario>> Get() => await _usuariosService.GetAsync();

        [HttpGet("{id}")]
        public async Task<ActionResult<Usuario>> Get(string id)
        {
            var usuario = await _usuariosService.GetAsync(id);
            return usuario is null ? NotFound() : Ok(usuario);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Usuario usuarioNovo)
        {
            var familia = await _familiasService.GetAsync(usuarioNovo.FamiliaId);
            if (familia is null)
                throw new Exception("Usuário precisa ser associado a um grupo familiar");
            else
                usuarioNovo.NomeFamilia = familia.NomeFamilia;

            await _usuariosService.CreateAsync(usuarioNovo);
            return CreatedAtAction(nameof(Get), new { id = usuarioNovo.Id }, usuarioNovo);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(string id, Usuario usuarioAtualizado)
        {
            usuarioAtualizado.NomeFamilia = null;
            var usuario = await _usuariosService.GetAsync(id);
            if (usuario is null)
                return NotFound();
            usuarioAtualizado.Id = usuario.Id;
            await _usuariosService.UpdateAsync(id, usuarioAtualizado);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            var usuario = await _usuariosService.GetAsync(id);
            if (usuario is null)
                return NotFound();
            await _usuariosService.RemoveAsync(id);
            return NoContent();
        }
    }
}