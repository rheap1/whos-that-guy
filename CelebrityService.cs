namespace WhosThatGuy.Celebrity_Classes {
    public class CelebrityService
    {
        List<Celebrity> Celebrity_Data = new List<Celebrity>();

        // Initialize celebrities
        Celebrity joshHutcherson = new Celebrity
        {
            Name = "Josh Hutcherson",
            Gender = "Male",
            Race = "White",
            HairColor = "Brown",
            EyeColor = "Brown",
            Movies = ["FNAF", "The Hunger Games", "Bridge To Terabithia"]
        };

        Celebrity piperRubio = new Celebrity
        {
            Name = "Piper Rubio",
            Gender = "Female",
            Race = "White",
            HairColor = "Brown",
            EyeColor = "Brown",
            Movies = ["FNAF"]
        };

        Celebrity elizabethLail = new Celebrity
        {
            Name = "Elizabeth Lail",
            Gender = "Female",
            Race = "White",
            HairColor = "Blonde",
            EyeColor = "Green",
            Movies = ["FNAF"]
        };

        Celebrity matthewLillard = new Celebrity
        {
            Name = "Matthew Lillard",
            Gender = "Male",
            Race = "White",
            HairColor = "Brown",
            EyeColor = "Brown",
            Movies = ["FNAF", "Scream", "Scooby-Doo"]
        };

        Celebrity maryStuartMasterson = new Celebrity
        {
            Name = "Mary Stuart Masterson",
            Gender = "Female",
            Race = "White",
            HairColor = "Blonde",
            EyeColor = "Brown",
            Movies = ["FNAF", "Benny & Joon", "Some Kind of Wonderful" "Fried Green Tomatoes", "Bad Girls"]
        };

        // Add celebrities to the dictionary
        Celebrity_Data.Add(joshHutcherson);
        Celebrity_Data.Add(piperRubio);
        Celebrity_Data.Add(elizabethLail);
        Celebrity_Data.Add(matthewLillard);
        Celebrity_Data.Add(maryStuartMasterson);
        public List<Celebrity> GetCelebritiesByGender(string gender)
        {
            return celebrities.Where(c => c.Gender.ToLower() == gender.ToLower()).ToList();
        }
    }
}