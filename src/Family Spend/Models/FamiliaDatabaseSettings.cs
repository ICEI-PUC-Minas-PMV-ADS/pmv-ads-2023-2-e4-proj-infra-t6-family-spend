namespace Family_Spend.Models
{
    public class FamiliaDatabaseSettings
    {
        public string ConnectionString { get; set; } = null;
        public string Database { get; set; } = null;
        public string FamiliaConnectionName { get; set; } = null;
        public string ApplicationUserConnectionName { get; set; } = null;
        public string GastoConnectionName { get; set; } = null;
    }
}