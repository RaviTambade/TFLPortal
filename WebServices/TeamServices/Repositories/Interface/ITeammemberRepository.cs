using PMS.Models;

namespace PMS.Repositories.Interfaces;
public interface ITeamMemberRepository{

    List<TeamMember> GetAll();

     TeamMember GetById(int teamId);

     bool Insert(TeamMember teamMember);
     bool Update(TeamMember teamMember);
     bool Delete(TeamMember teamMember);
   
}