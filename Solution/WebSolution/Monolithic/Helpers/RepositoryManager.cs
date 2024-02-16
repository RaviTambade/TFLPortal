using System.Collections.Generic;
using System.IO;
using System.Text.Json;
using TFLPortal.Models;

namespace TFLPortal.Helpers;

public class JsonRepositoryManager
{
    public void Serialize<T>(T records, string fileName)
    {
        var options = new JsonSerializerOptions { IncludeFields = true };
        var employeesJson = JsonSerializer.Serialize<T>(records, options);
        File.WriteAllText(fileName, employeesJson);
    }

    public T DeSerialize<T>(string fileName)
    {
        //Deserialize from JSON file
        string jsonString = File.ReadAllText(fileName);
        T records = JsonSerializer.Deserialize<T>(jsonString);
        return records;
    }
}
