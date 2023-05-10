using TeamService.Models;

namespace TeamService.Repositories.Interfaces;
public interface ITeamRepository{

    List<Team> GetAll();

     Team GetById(int teamId);

     bool Insert(Team team);
     bool Update(Team team);
     bool Delete(int teamId);
   
}