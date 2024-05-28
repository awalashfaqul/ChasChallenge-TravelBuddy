using System.Security.Claims;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Google;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
[Authorize]
public class AuthController : ControllerBase
{
  private readonly UserManager<User> _userManager;
  private readonly SignInManager<User> _signInManager;
  public AuthController(UserManager<User> userManager, SignInManager<User> signInManager)
  {
    _userManager = userManager;
    _signInManager = signInManager;
  }

  [HttpGet("login-google")]
  [AllowAnonymous]
  public IActionResult LoginGoogle()
  {
    var properties = new AuthenticationProperties { RedirectUri = Url.Action("GoogleResponse") };

    return Challenge(properties, GoogleDefaults.AuthenticationScheme);
  }

  [HttpGet("signin-google")]
  [ApiExplorerSettings(IgnoreApi = true)]
  [AllowAnonymous]
  public async Task<IActionResult> GoogleResponse()
  {

    var result = await HttpContext.AuthenticateAsync(IdentityConstants.ApplicationScheme);

    if (!result.Succeeded)
      return BadRequest("Error authenticating with Google");

    var claims = result.Principal?.Identities.FirstOrDefault()?.Claims.Select(claim => new
    {
      claim.Issuer,
      claim.OriginalIssuer,
      claim.Type,
      claim.Value
    }).ToList();

    var emailClaim = result.Principal?.FindFirst(ClaimTypes.Email)?.Value;
    var user = await _userManager.FindByEmailAsync(emailClaim);
    if (user == null)
    {
      user = new User { UserName = emailClaim, Email = emailClaim };
      var createResult = await _userManager.CreateAsync(user);
      if (!createResult.Succeeded)
      {
        return BadRequest("Could not create user account");
      }
    }

    await _signInManager.SignInAsync(user, isPersistent: false);

    return Ok(claims);
  }

  [HttpGet("user")]
  public async Task<IActionResult> GetUser()
  {
    var user = await _userManager.GetUserAsync(User);
    return Ok(user);
  }

  [HttpPatch("user")]
  public async Task<IActionResult> UpdateUser([FromBody] UserDto user)
  {
    var currentUser = await _userManager.GetUserAsync(User);

    if (currentUser == null)
    {
      return BadRequest("Could not find user account");
    }

    currentUser.FirstName = user.FirstName;
    currentUser.LastName = user.LastName;
    currentUser.UserName = user.UserName;
    currentUser.PhoneNumber = user.PhoneNumber;
    currentUser.City = user.City;
    currentUser.Country = user.Country;

    var result = await _userManager.UpdateAsync(currentUser);
    if (!result.Succeeded)
    {
      return BadRequest("Could not update user account");
    }

    return Ok(currentUser);
  }

  [HttpDelete("user")]
  public async Task<IActionResult> DeleteUser()
  {
    var user = await _userManager.GetUserAsync(User);
    var result = await _userManager.DeleteAsync(user);
    if (!result.Succeeded)
    {
      return BadRequest("Could not delete user account");
    }
    return Ok();
  }

  [HttpGet("logout")]
  public async Task<IActionResult> Logout()
  {
    await _signInManager.SignOutAsync();
    return Ok();
  }
}

