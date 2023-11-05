namespace WhosThatGuy.Celebrity_Classes {
    [Route("api/[controller]")]
    public class CelebrityController : Controller
    {
        [HttpGet("getCelebritiesByGenderMale")]
        public IActionResult GetCelebritiesByGenderMale()
        {

            var result = new
            {
                Message = "Male",
                DateTime = DateTime.Now
            };

            // Return the result as a JSON response.
            return Json(result);
        }

        [HttpGet("getCelebritiesByGenderFemale")]
        public IActionResult GetCelebritiesByGenderFemale()
        {
            var result = new
            {
                Message = "Female",
                DateTime = DateTime.Now
            };

            // Return the result as a JSON response.
            return Json(result);
        }
    }
}