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
        [Route("getall")]
        public IEnumerable<Projects> GetAllAccount()
        {
            List<Projects> projects = _projectsrv.GetAll();
            return projects;
        }

        [HttpGet]
        [Route("getprojectsdetails/{id}")]
        public Projects GetById(int id)
        {
            Projects project = _projectsrv.GetById(id);
            return project;
        }



        // //[Authorize(Roles = Role.Admin)]
        [HttpPost]
        [Route("addproject")]
        public bool Insert([FromBody] Projects project)
        {
            bool status = _projectsrv.Insert(project);
            return status;
        }

        // //[Authorize(Roles = Role.Admin)]
        [HttpPut]
        [Route("update/{id}")]
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
