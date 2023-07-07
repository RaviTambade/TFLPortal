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
        public async Task<IEnumerable<Project>> GetAll()
        {
            IEnumerable<Project> projects =await _projectsrv.GetAll();
            return projects;
        }

        //http://localhost:5294/api/projects/1
        [HttpGet ("{id}")]
        public async Task<Project> GetById(int id)
        {
            Project project =await _projectsrv.GetById(id);
            return project;
        }

        //http://localhost:5294/api/projects/project/PMSAPP
       [HttpGet ("project/{name}")]
        public async Task<Project> Get(string name)
        {
            Project project =await _projectsrv.Get(name);
            return project;
        }


        // //[Authorize(Roles = Role.Admin)]
        //http://localhost:5294/api/projects/projects
        [HttpPost ("projects")]
        //[Route("insert")]
        public async Task<bool> Insert([FromBody] Project project)
        {
            bool status =await _projectsrv.Insert(project);
            return status;
        }

        // //[Authorize(Roles = Role.Admin)]
        // http://localhost:5294/api/projects/project
        [HttpPut ("project")]
        public async Task<bool> Update(Project project)
        {
            bool status =await _projectsrv.Update(project);
            return status;
        }


        // //[Authorize(Roles = Role.Admin)]
        //http://localhost:5294/api/projects/5
        [HttpDelete ("{id}")]
        public async Task<bool> Delete(int id)
        {
            bool status =await _projectsrv.Delete(id);
            return status;
        }


        //http://localhost:5294/api/projects/betweendates  // frombody {"fromdate":"2022/01/01","todate": "2022/12/12"}
        [HttpPost("betweendates")]
       // [Route("/ongoingprojects/{fromdate}/{todate}")]
        public async Task<IEnumerable<Project>> GetByProject([FromBody] Date date)
        {
            IEnumerable<Project> projects =await _projectsrv.GetByProject(date);
            return projects;
            }
        
    }
    
    
}
