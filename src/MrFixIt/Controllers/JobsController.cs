using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MrFixIt.Models;
using Microsoft.EntityFrameworkCore;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace MrFixIt.Controllers
{
    public class JobsController : Controller
    {
        private MrFixItContext db = new MrFixItContext();

        // GET: /<controller>/
        public IActionResult Index()
        {
            return View(db.Jobs.Include(i => i.Worker).ToList());
        }

        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Create(Job job)
        {
            db.Jobs.Add(job);
            db.SaveChanges();
            return RedirectToAction("Index");
        }
        [Route("/Jobs/Claims")]
        public IActionResult Claim(int JobId)
        {
            var thisJob = db.Jobs.FirstOrDefault(items => items.JobId == JobId);
            return View(thisJob);
        }
        [Route("/Jobs/Claimed")]
        [HttpPost]
        public IActionResult Claim(Job job)
        {
            job.Worker = db.Workers.FirstOrDefault(i => i.UserName == User.Identity.Name);
            db.Entry(job).State = EntityState.Modified;
            db.SaveChanges();
            return RedirectToAction("Index");
        }
        [Route("/Jobs/MarkDone")]
        [HttpPost]
        public IActionResult MarkDone(int JobId)
        {
            var job = db.Jobs.FirstOrDefault(j => j.JobId == JobId);
            job.Completed = true;
            db.Entry(job).State = EntityState.Modified;
            db.SaveChanges();
            return Json(job);
        }
    }
}
