using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using API.Dto;
using Newtonsoft.Json;

namespace API.HttpClients
{
    public class PostClient : IPostClient
    {
        private readonly IConfiguration Configuration;
        public const string HttpClientName = "PostClient";
        private HttpClient Client;
        private readonly string apiToken;
        public PostClient(IConfiguration configuration, IHttpClientFactory httpClientFactory)
        {
            Client = httpClientFactory.CreateClient(HttpClientName);
            Client.Timeout = new TimeSpan(0, 30, 0);
            Configuration = configuration;
            apiToken = Configuration.GetSection("Settings").GetSection("Gnews").GetValue<string>("ApiToken");
        }
        public async Task<IEnumerable<Article>> GetPosts()
        {
            var queryUrl = $"https://gnews.io/api/v4/search?q=watches&token=d{apiToken}";

            var response = await Client.GetAsync(queryUrl);

            if (response.IsSuccessStatusCode)
            {
                var content = await response.Content.ReadAsStringAsync();
                var dataJson = JsonConvert.DeserializeObject<PostResponseModel>(content);
                return dataJson.Articles ;
            }

            return null;
        }
    }

    public interface IPostClient
    {
        Task<IEnumerable<Article>> GetPosts();
    }
}