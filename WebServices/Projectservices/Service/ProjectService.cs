using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using ProjectAPI.Models;
using ProjectAPI.Repository.Interface;
using ProjectAPI.Service.Interface;

namespace ProjectAPI.Service;
public class ProjectService:IProjectsService{
private readonly IProjectsRepository _repo;
public ProjectService(IProjectsRepository repo){
    this._repo=repo;

}
public List<Projects> GetAll()=>_repo.GetAll();
 public Projects GetById(int projectId)=>_repo.GetById(projectId);
 public bool Insert(Projects project)=>_repo.Insert(project);
 public bool Update(Projects project)=>_repo.Update(project);
 public bool Delete(Int32  projectId)=>_repo.Delete(projectId);
public List<Projects> GetByProject(string projectName)=>_repo.GetByProject(projectName);

}
