public class CelebrityService
{
    public List<Celebrity> GetCelebritiesByGender(string gender)
    {
        return celebrities.Where(c => c.Gender.ToLower() == gender.ToLower()).ToList();
    }
}