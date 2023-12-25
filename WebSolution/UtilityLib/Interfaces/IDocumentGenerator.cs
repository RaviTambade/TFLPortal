
using Transflower.UtilityLib.Content;

namespace  Transflower.UtilityLib.Interfaces;
public interface IDocumentGenerator{

    string GenerateSalarySlip(SalarySlipDocumentContent salaryStructure);
}