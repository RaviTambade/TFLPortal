using TFL.Data.Managers;
using TFL.Data.Entities;
using System.Xml;


Employee e1= new Employee{ Id=66, Name="Shama"};
Employee e2= new Employee{ Id=67, Name="Rama"};
Employee e3= new Employee{ Id=68, Name="Krishna"};

List<Employee> employees=new List<Employee>();
employees.Add(e1);
employees.Add(e2);
employees.Add(e3);

XMLManager.ReadXMLFileUsingXMLDocument();
//XMLManager.WriteXMLFileUsingXMLDocument(employees);


