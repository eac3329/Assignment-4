let jobsData = [
    { id: 1, company: "Mobile First Corp", role: "React Native Developer", location: "Remote", type: "Full-time", salary: "$130k - $175k", status: "All" },
    { id: 2, company: "WebFlow Agency", role: "Web Designer & Developer", location: "Los Angeles, CA", type: "Part-time", salary: "$80k - $120k", status: "All" },
    { id: 3, company: "DataViz Solutions", role: "Data Visualization Specialist", location: "Boston, MA", type: "Full-time", salary: "$125k - $165k", status: "All" },
    { id: 4, company: "CloudFirst Inc", role: "Backend Developer", location: "Seattle, WA", type: "Full-time", salary: "$140k - $190k", status: "All" },
    { id: 5, company: "Innovation Labs", role: "UI/UX Engineer", location: "Austin, TX", type: "Full-time", salary: "$110k - $150k", status: "All" },
    { id: 6, company: "MegaCorp Solutions", role: "JavaScript Developer", location: "New York, NY", type: "Full-time", salary: "$130k - $170k", status: "All" },
    { id: 7, company: "Startup Luminous", role: "Full Stack Engineer", location: "Remote", type: "Full-time", salary: "$120k - $160k", status: "All" },
    { id: 8, company: "TechCorp Industries", role: "Senior Frontend Developer", location: "San Francisco, CA", type: "Full-time", salary: "$130k - $175k", status: "All" }
];
let currentFilter = "All";

function renderJobs() {
    const listContainer = document.getElementById('jobs-list');
    listContainer.innerHTML = "";

    for (let i = 0; i < jobsData.length; i++) {
        let job = jobsData[i];
        const jobHTML = `
        
<button onclick="deleteJob(${job.id})" class="absolute top-6 right-6 delete-btn">
    <svg xmlns="http://www.w3.org/2001/XMLSchema/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
</button>


            <div class="p-6 relative">
                <h4 class="text-[#1E3A8A] font-bold text-xl mb-1">${job.company}</h4>
                <p class="text-slate-700 font-semibold mb-2">${job.role}</p>
                <p class="text-slate-400 text-sm mb-4">${job.location} • ${job.type} • ${job.salary}</p>
            </div>
        `;
        listContainer.innerHTML += jobHTML;
    }
}
renderJobs();