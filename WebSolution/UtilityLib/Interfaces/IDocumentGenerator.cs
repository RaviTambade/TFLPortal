
using Transflower.UtilityLib.DTO;

namespace  Transflower.UtilityLib.Interfaces;
public interface IDocumentGenerator{

    string Generate(SalaryDTO salaryStructure);
}