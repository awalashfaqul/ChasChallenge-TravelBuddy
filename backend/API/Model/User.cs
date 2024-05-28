using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

public class User : IdentityUser
{
  public string? FirstName { get; set; }
  public string? LastName { get; set; }
  public string? City { get; set; }
  public string? Country { get; set; }
}