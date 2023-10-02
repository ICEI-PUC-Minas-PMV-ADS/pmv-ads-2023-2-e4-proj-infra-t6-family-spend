using Family_Spend.Models;
using Family_Spend.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.Configure<FamilySpendDatabaseSettings>(builder.Configuration.GetSection("FamilySpendDatabase"));

builder.Services.AddSingleton<FamiliasService>();
builder.Services.AddSingleton<UsuariosService>();
builder.Services.AddSingleton<GastosService>();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
