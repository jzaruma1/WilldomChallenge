using API.Managers;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using API.Dto;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class RemotePlusController
    {
        private readonly IPostManager _postManager;
        public RemotePlusController(IPostManager postManager)
        {
            _postManager = postManager;
        }

        [HttpGet]
        public IEnumerable<Article> GetPost()
        {
            return _postManager.GetPosts();
        }
    }
}