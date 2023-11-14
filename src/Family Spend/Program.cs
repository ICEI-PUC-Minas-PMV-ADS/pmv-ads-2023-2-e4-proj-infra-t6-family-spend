using Family_Spend.Models;
using Family_Spend.Services;
using MongoDB.Bson.Serialization.Serializers;
using MongoDB.Bson.Serialization;
using MongoDB.Driver;
using AspNetCore.Identity.MongoDbCore.Infrastructure;
using AspNetCore.Identity.MongoDbCore.Extensions;
using Microsoft.AspNetCore.Identity;
using WebApplicationfamily6.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using static System.Net.WebRequestMethods;

var builder = WebApplication.CreateBuilder(args);

var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";


// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.Configure<FamilySpendDatabaseSettings>(builder.Configuration.GetSection("FamilySpendDatabase"));
builder.Services.AddTransient<IFamiliasService, FamiliasService>();
builder.Services.AddTransient<IUsuariosService, UsuariosService>();
builder.Services.AddTransient<IGastosService, GastosService>();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      policy =>
                      {
                          policy.AllowAnyOrigin()
                                .AllowAnyHeader()
                                .AllowAnyMethod();
                      });
});

// Add services to the container.
BsonSerializer.RegisterSerializer(new GuidSerializer(MongoDB.Bson.BsonType.String));
BsonSerializer.RegisterSerializer(new DateTimeSerializer(MongoDB.Bson.BsonType.String));
BsonSerializer.RegisterSerializer(new DateTimeOffsetSerializer(MongoDB.Bson.BsonType.String));

//add mongoIdentityConfiguration...
var mongoDbIdentityConfig = new MongoDbIdentityConfiguration
{
    MongoDbSettings = new MongoDbSettings
    {
        ConnectionString = "mongodb+srv://gabrielmcangussu:Fidgetspinner13@familyspend.5aobt8n.mongodb.net/?retryWrites=true&w=majority",
        DatabaseName = "FamilySpend"
    },
    IdentityOptionsAction = options =>
    {
        options.Password.RequireDigit = false;
        options.Password.RequiredLength = 8;
        options.Password.RequireNonAlphanumeric = true;
        options.Password.RequireLowercase = false;

        //lockout
        options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(10);
        options.Lockout.MaxFailedAccessAttempts = 5;

        options.User.RequireUniqueEmail = true;

    }
};

builder.Services.ConfigureMongoDbIdentity<ApplicationUser, ApplicationRole, Guid>(mongoDbIdentityConfig)
    .AddUserManager<UserManager<ApplicationUser>>()
    .AddSignInManager<SignInManager<ApplicationUser>>()
    .AddRoleManager<RoleManager<ApplicationRole>>()
    .AddDefaultTokenProviders();

var issuers = new List<string>()
{
    "http://localhost:5173/",
    "https://localhost:7254/"
};

builder.Services.AddAuthentication(x =>
{
    x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;


}).AddJwtBearer(x =>
{
    x.RequireHttpsMetadata = true;
    x.SaveToken = true;
    x.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuerSigningKey = true,
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidIssuers = issuers,
        ValidAudiences = issuers,
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("1swek3u4uo2u4a6e")),
        ClockSkew = TimeSpan.Zero

    };
});

builder.Services.AddEndpointsApiExplorer();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(MyAllowSpecificOrigins);

app.UseHttpsRedirection();

app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.Run();

