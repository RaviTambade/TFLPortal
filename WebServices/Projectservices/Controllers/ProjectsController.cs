using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using ProjectAPI.Models;
using ProjectAPI.Service;
using ProjectAPI.Service.Interface;
using Microsoft.AspNetCore.Mvc;


namespace ProjectsService.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class ProjectsController : ControllerBase

    {
        private readonly IProjectsService _projectsrv;
        public ProjectsController(IProjectsService projectsrv)
        {
            _projectsrv = projectsrv;
        }
        
        //http://localhost:5294/api/projects/projects
        [HttpGet("Projects")]
        public IEnumerable<Project> GetAll()
        {
            List<Project> projects = _projectsrv.GetAll();
            return projects;
        }

        //http://localhost:5294/api/projects/1
        [HttpGet ("{id}")]
        public Project GetById(int id)
        {
            Project project = _projectsrv.GetById(id);
            return project;
        }

        //http://localhost:5294/api/projects/project/PMSAPP
       [HttpGet ("project/{name}")]
        public Project Get(string name)
        {
            Project project = _projectsrv.Get(name);
            return project;
        }


        // //[Authorize(Roles = Role.Admin)]
        //http://localhost:5294/api/projects/projects
        [HttpPost ("projects")]
        //[Route("insert")]
        public bool Insert([FromBody] Project project)
        {
            bool status = _projectsrv.Insert(project);
            return status;
        }

        // //[Authorize(Roles = Role.Admin)]
        // http://localhost:5294/api/projects/project
        [HttpPut ("project")]
        public bool Update(Project project)
        {
            bool status = _projectsrv.Update(project);
            return status;
        }


        // //[Authorize(Roles = Role.Admin)]
        //http://localhost:5294/api/projects/5
        [HttpDelete ("{id}")]
        public bool Delete(int id)
        {
            bool status = _projectsrv.Delete(id);
            return status;
        }


        //http://localhost:5294/api/projects/betweendates  // frombody {"fromdate":"2022/01/01","todate": "2022/12/12"}
        [HttpPost("betweendates")]
       // [Route("/ongoingprojects/{fromdate}/{todate}")]
        public List<Project> GetByProject([FromBody] Date date)
        {
            List<Project> projects = _projectsrv.GetByProject(date);
            return projects;
            }
        
    }
    
    
}
