/*using Family_Spend.Models;
using Family_Spend.Services;
using Microsoft.AspNetCore.Mvc;

namespace Family_Spend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsuarioController : ControllerBase
    {
        private readonly UsuariosService _usuariosService;

        public UsuarioController(UsuariosService usuarioService)
        {
            _usuariosService = usuarioService;
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
        public async Task<IActionResult> Post(Usuario usuarioNovo)
        {
            await _usuariosService.CreateAsync(usuarioNovo);
            return CreatedAtAction(nameof(Get), new { id = usuarioNovo.Id }, usuarioNovo);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(string id, Usuario usuarioAtualizado)
        {
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
}*/