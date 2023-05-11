using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using TeamService.Models;
using TeamService.Repositories.Interfaces;
using TeamService.Services.Interfaces;

namespace TeamService.Services;
public class TeamServices:ITeamService{
private readonly ITeamRepository _repo;

public TeamServices(ITeamRepository repo){
    this._repo=repo;

}
public List<Team> GetAll()=>_repo.GetAll();
 public Team GetById(int teamId)=>_repo.GetById(teamId);
 public bool Insert(Team team)=>_repo.Insert(team);
 public bool Update(Team team)=>_repo.Update(team);
 public bool Delete(int  teamId)=>_repo.Delete(teamId);

}
