
using Transflower.TFLPortal.TFLSAL.DTO;

namespace Transflower.TFLPortal.TFLSAL.Services.Interfaces;

public interface IPdfGeneratorService{

    string GenerateSalarySlip(SalaryStructureDTO salaryStructure);
}