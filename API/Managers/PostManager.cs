using API.HttpClients;
using System.Collections.Generic;
using API.Dto;

namespace API.Managers
{
    public class PostManager : IPostManager
    {
        private readonly IPostClient _postClient;
        public PostManager(IPostClient postClient)
        {
            _postClient = postClient;
        }

        public IEnumerable<Article> GetPosts()
        {
            return _postClient.GetPosts().Result;
        }
    }

    public interface IPostManager
    {
        IEnumerable<Article> GetPosts();
    }
}