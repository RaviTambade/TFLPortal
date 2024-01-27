
using Transflower.UtilityLib.Content;

namespace  Transflower.UtilityLib.Interfaces;
public interface IDocumentGenerator{

     Task<string> GenerateSalarySlip(SalarySlipDocumentContent salaryStructure);
}