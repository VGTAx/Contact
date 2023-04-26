using System.ComponentModel.DataAnnotations;

namespace Contact.Models
{
    public class Contacts
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? PhoneNumber { get; set; }
        public string? JobTitle { get; set; }
        [DataType(DataType.Date)]
        public DateTime BirthDate { get; set; } = DateTime.Now;
    }
}
