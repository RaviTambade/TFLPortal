using ProjectAPI.Models;

namespace ProjectAPI.Repository.Interface;
public interface IProjectsRepository
{

    List<Projects> GetAll();

    Projects GetById(int projId);

    public List<Projects> GetByProject(string projectName);
    bool Insert(Projects projects);
    bool Update(Projects projects);
    bool Delete(int projId);

}