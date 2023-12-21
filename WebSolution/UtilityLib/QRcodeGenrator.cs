using System.Text;
using Net.Codecrete.QrCodeGenerator;
namespace UtilityLib;

public static class QRCodeGenerator
{
    public static void GenerateQRCode(string text,string filename)
    {
        var qr = QrCode.EncodeText(text, QrCode.Ecc.Medium);
        string svg = qr.ToSvgString(4);
        File.WriteAllText($"{filename}.svg", svg, Encoding.UTF8);
    }
}
