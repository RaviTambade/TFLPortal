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
public async Task<IEnumerable<Project>> GetAll()=>await _repo.GetAll();

//public List<Project> GetByProject(string projectName) => _repo.GetByProject(projectName);
public async Task<Project> GetById(int projectId)=>await _repo.GetById(projectId);
public async Task<Project> Get(string name)=>await _repo.Get(name);
 public async Task<bool> Insert(Project project)=>await _repo.Insert(project);
 public async Task<bool> Update(Project project)=>await _repo.Update(project);
 public async Task<bool> Delete(Int32  projectId)=>await _repo.Delete(projectId);

public async Task<IEnumerable<Project>> GetByProject(Date date)=>await _repo.GetByProject(date);

}
