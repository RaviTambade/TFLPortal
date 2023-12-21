using System.Text;
using Net.Codecrete.QrCodeGenerator;
namespace Transflower.Generators;

public class QRCodeGenerator:IGenerator
{
    public void Generate(string content,string filename)
    {
        var qr = QrCode.EncodeText(content, QrCode.Ecc.Medium);
        string svg = qr.ToSvgString(4);
        File.WriteAllText($"{filename}.svg", svg, Encoding.UTF8);
    }
}
