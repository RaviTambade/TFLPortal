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

        [HttpGet("Projects")]
        public IEnumerable<Project> GetAll()
        {
            List<Project> projects = _projectsrv.GetAll();
            return projects;
        }

        [HttpGet ("{id}")]
        public Project GetById(int id)
        {
            Project project = _projectsrv.GetById(id);
            return project;
        }


        // //[Authorize(Roles = Role.Admin)]
        [HttpPost ("projects")]
        //[Route("insert")]
        public bool Insert([FromBody] Project project)
        {
            bool status = _projectsrv.Insert(project);
            return status;
        }

        // //[Authorize(Roles = Role.Admin)]
        [HttpPut ("{id}")]
        public bool Update(Project project)
        {
            bool status = _projectsrv.Update(project);
            return status;
        }


        // //[Authorize(Roles = Role.Admin)]
        [HttpDelete ("{id}")]
        public bool Delete(int id)
        {
            bool status = _projectsrv.Delete(id);
            return status;
        }


        // [HttpGet]
        // [Route("/ongoingprojects/{fromdate}/{todate}")]
        // public List<Project> GetAllByProject(fromdate  , todate)
        // {
        //     List<Project> project = _projectsrv.GetByProject(projectName);
        //     return project;
        // }

        [HttpPost("betweendates")]
       // [Route("/ongoingprojects/{fromdate}/{todate}")]
        public List<Project> GetByProject([FromBody] Date date)
        {
            List<Project> projects = _projectsrv.GetByProject(date);
            return projects;
            }
        
    }
    
    
}
