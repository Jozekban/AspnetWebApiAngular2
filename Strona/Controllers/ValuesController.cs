using Strona.DBContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Strona.Controllers
{
    public class ValuesController : ApiController
    {
        
        public IEnumerable<TEST> Get()
        {
            var entities = new DBEntities();

            return entities.TEST;
        }

        public string Get(int id)
        {
            return "value";
        }
        
        public int PostEmpty()
        {
            var entities = new DBEntities();
            var rand = new Random();

            entities.TEST.Add(new TEST { Number = rand.Next(0, 100) });
            entities.SaveChanges();

            return 1;
        }
        
        
        public int PostModel(TEST test)
        {
            if(test == null)
            {
                return 0;
            }

            var entities = new DBEntities();

            entities.TEST.Add(test);
            entities.SaveChanges();

            return 1;
        }
        
        public int Post([FromBody]int number)
        {
            var entities = new DBEntities();

            entities.TEST.Add(new TEST { Number = number });
            entities.SaveChanges();

            return 1;
        }

        public void Put(int id, [FromBody]string value)
        {
        }

        public void Delete(int id)
        {
            var entities = new DBEntities();
            var test = new TEST { Id = id };
            entities.TEST.Remove(test);
            entities.SaveChanges();
        }
    }
}
