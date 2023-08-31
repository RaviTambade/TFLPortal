using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Transflower.PMS.ProjectAPI.Models;
using ProjectAPI.Service;
using ProjectAPI.Service.Interface;
using Microsoft.AspNetCore.Mvc;
using Transflower.PMS.ProjectAPI.Helpers;
using Transflower.PMS.ProjectAPI.Models;

namespace Transflower.PMS.ProjectsService.Controllers
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
        
        //httpGet : http://localhost:5294/api/projects/projects
       // [Authorize]
        [HttpGet]
        [Route ("Projects")]
        public async Task<IEnumerable<Project>> GetAll()
        {
            IEnumerable<Project> projects =await _projectsrv.GetAll();
            return projects;
        }

        //httpGet : http://localhost:5294/api/projects/1
        //[Authorize]
        [HttpGet ]
        [Route ("{id}")]
        public async Task<Project> GetById(int id)
        {
            Project project =await _projectsrv.GetById(id);
            return project;
        }

        //httpGet :  http://localhost:5294/api/projects/project/PMSAPP
       //[Authorize]
       [HttpGet ]
       [Route ("project/{name}")]
        public async Task<Project> Get(string name)
        {
            Project project =await _projectsrv.Get(name);
            return project;
        }


        // //[Authorize(Roles = Role.Admin)]
        //httpPost : http://localhost:5294/api/projects/projects
        //[Authorize]
        [HttpPost ]
        [Route ("projects")]
        public async Task<bool> Insert([FromBody] Project project)
        {
            bool status =await _projectsrv.Insert(project);
            return status;
        }

        // //[Authorize(Roles = Role.Admin)]
        //httpPut : http://localhost:5294/api/projects/project
        //[Authorize]
        [HttpPut ]
        [Route ("project")]
        public async Task<bool> Update(Project project)
        {
            bool status =await _projectsrv.Update(project);
            return status;
        }


        // //[Authorize(Roles = Role.Admin)]
        //httpDelete : http://localhost:5294/api/projects/5
        //[Authorize]
        [HttpDelete ]
        [Route ("{id}")]
        public async Task<bool> Delete(int id)
        {
            bool status =await _projectsrv.Delete(id);
            return status;
        }


        //httpPost : http://localhost:5294/api/projects/betweendates  // frombody {"fromdate":"2022/01/01","todate": "2022/12/12"}
        //[Authorize]
        [HttpPost]
        [Route ("betweendates")]
        public async Task<IEnumerable<Project>> GetByProject([FromBody] Date date)
        {
            IEnumerable<Project> projects =await _projectsrv.GetByProject(date);
            return projects;
            }

   //httpGet :  http://localhost:5294/api/projects/projectdetails/2
    [HttpGet ("projectdetails/{projectid}")]
       public async Task<IEnumerable<ProjectDetails>>GetAllDetails(int projectid)
    {
       IEnumerable<ProjectDetails> projectDetails = await _projectsrv.GetAllDetails(projectid);
        return projectDetails;
    }


     //httpGet : http://localhost:5294/api/projects/status
       // [Authorize]
        [HttpGet]
        [Route ("status")]
       public async Task<IEnumerable<ProjectStatus>> GetStatus()
        {
            IEnumerable<ProjectStatus> projects =await _projectsrv.GetStatus();
            return projects;
        }


   
    }
    
    
}
