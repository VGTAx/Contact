using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Contact.Models;

namespace Contact.Data
{
    public class ContactContext : DbContext
    {
        public ContactContext (DbContextOptions<ContactContext> options)
            : base(options)
        {
        }

        public DbSet<Contact.Models.Contacts> Contact { get; set; } = default!;
    }
}
