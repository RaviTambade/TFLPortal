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

        [HttpGet]
        public IEnumerable<Project> GetAll()
        {
            List<Projects> projects = _projectsrv.GetAll();
            return projects;
        }

        [HttpGet]
        [Route("/{id}")]
        public Project GetById(int id)
        {
            Projects project = _projectsrv.GetById(id);
            return project;
        }



        [HttpGet]
        [Route("/ongoingprojects/{fromdate}/{todate}")]
        public List<Projects> GetAllByProject(fromdate  , todate  )
        {
            List<Projects> projects = _projectsrv.GetByProject(projectName);
            return projects;
        }



        // //[Authorize(Roles = Role.Admin)]
        [HttpPost]
    
        public bool Insert([FromBody] Projects project)
        {
            bool status = _projectsrv.Insert(project);
            return status;
        }

        // //[Authorize(Roles = Role.Admin)]
        [HttpPut]
        [Route("update")]
        public bool Update(Projects project)
        {
            bool status = _projectsrv.Update(project);
            return status;
        }


        // //[Authorize(Roles = Role.Admin)]
        [HttpDelete]
        [Route("delete/{id}")]
        public bool Delete(int id)
        {
            bool status = _projectsrv.Delete(id);
            return status;
        }
        
    }
    
    
}
