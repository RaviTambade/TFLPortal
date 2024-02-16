

using System.Reflection;
using System.Text;

public class CsvRepositoryManager {

      public void GenerateCSVFile<T>(IEnumerable<T> list, string fileName)
    {
        StringBuilder sb = new StringBuilder();

        PropertyInfo[]? properties = typeof(T).GetProperties();
        IEnumerable<string> columnNames = properties.Select(p => p.Name).ToList();

        sb.AppendLine(string.Join(",", columnNames));

        foreach (T obj in list)
        {
            List<string>? values = new List<string>();
            foreach (PropertyInfo property in properties)
            {
                object? value = property.GetValue(obj);
                if (value is not null)
                {
                    values.Add(value.ToString()!);
                }
                else
                {
                    values.Add(" ");
                }
            }
            sb.AppendLine(string.Join(",", values));
        }
        File.WriteAllText($"{fileName}.csv", sb.ToString());
    }
}