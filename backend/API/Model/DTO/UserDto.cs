using System.ComponentModel.DataAnnotations;

public class UserDto
{
  [Required(ErrorMessage = "First name is required")]
  public string? FirstName { get; set; }
  [Required(ErrorMessage = "Last name is required")]
  public string? LastName { get; set; }
  [Required(ErrorMessage = "Username is required")]
  public string? UserName { get; set; }
  [Required(ErrorMessage = "Phone number is required")]
  public string? PhoneNumber { get; set; }
  [Required(ErrorMessage = "City is required")]
  public string? City { get; set; }
  [Required(ErrorMessage = "Country is required")]
  public string? Country { get; set; }
}