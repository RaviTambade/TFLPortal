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
public List<Project> GetAll()=>_repo.GetAll();

public List<Project> GetByProject(string projectName) => _repo.GetByProject(projectName);
public Project GetById(int projectId)=>_repo.GetById(projectId);
 public bool Insert(Project project)=>_repo.Insert(project);
 public bool Update(Project project)=>_repo.Update(project);
 public bool Delete(Int32  projectId)=>_repo.Delete(projectId);

}
