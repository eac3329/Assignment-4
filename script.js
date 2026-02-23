// DATA: 8 Job Entries
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
    const headerCounter = document.getElementById('tab-job-count');
    listContainer.innerHTML = "";

    let total = jobsData.length;
    let interviewCount = 0;
    let rejectedCount = 0;
    let visibleCount = 0;

    for (let i = 0; i < jobsData.length; i++) {
        let job = jobsData[i];

        if (job.status === "Interview") interviewCount++;
        if (job.status === "Rejected") rejectedCount++;

        if (currentFilter === "All" || job.status === currentFilter) {
            visibleCount++;

            const jobHTML = `
                <div class="p-6 relative">
                    <button onclick="deleteJob(${job.id})" class="absolute top-6 right-6 delete-btn">
                        <svg xmlns="http://www.w3.org/2001/XMLSchema/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>

                    <h4 class="text-[#1E3A8A] font-bold text-xl mb-1">${job.company}</h4>
                    <p class="text-slate-700 font-semibold mb-2">${job.role}</p>
                    <p class="text-slate-400 text-sm mb-4">${job.location} • ${job.type} • ${job.salary}</p>
                    <div class="inline-block bg-blue-50 text-blue-600 text-[10px] font-bold px-3 py-1 rounded mb-4 uppercase">Not Applied</div>
                    <p class="text-slate-500 text-sm mb-6 max-w-2xl">Building modern web experiences with high quality standards and performance optimization.</p>
                    <div class="flex gap-3">
                        <button onclick="setStatus(${job.id}, 'Interview')" 
                            class="px-5 py-1.5 rounded text-[11px] font-bold transition-colors ${job.status === 'Interview' ? 'bg-green-600 text-white' : 'btn-green-outline'}">
                            INTERVIEW
                        </button>
                        <button onclick="setStatus(${job.id}, 'Rejected')" 
                            class="px-5 py-1.5 rounded text-[11px] font-bold transition-colors ${job.status === 'Rejected' ? 'bg-red-600 text-white' : 'btn-red-outline'}">
                            REJECTED
                        </button>
                    </div>
                </div>
            `;
            listContainer.innerHTML += jobHTML;
        }
    }

    document.getElementById('total-count').innerText = total;
    document.getElementById('interview-count').innerText = interviewCount;
    document.getElementById('rejected-count').innerText = rejectedCount;
    headerCounter.innerText = visibleCount + " jobs";

    // Handle Empty State
    if (visibleCount === 0) {
        listContainer.innerHTML = `
            <div class="flex flex-col items-center justify-center py-20 text-center">
                <div class="circle-container">
                    <img src="jobs.png" class="w-16 opacity-40">
                </div>
                <h3 class="text-xl font-bold text-slate-800 mb-2">No jobs available</h3>
                <p class="text-slate-500">Check back soon for new job opportunities.</p>
            </div>
        `;
    }
}

function handleFilterChange(filterName) {
    currentFilter = filterName;
    const buttons = document.querySelectorAll('.tab-btn');
    for (let btn of buttons) {
        if (btn.innerText.toLowerCase() === filterName.toLowerCase()) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    }
    renderJobs();
}

function setStatus(jobId, newStatus) {
    for (let job of jobsData) {
        if (job.id === jobId) {
            job.status = (job.status === newStatus) ? "All" : newStatus;
        }
    }
    renderJobs();
}

function deleteJob(jobId) {
    jobsData = jobsData.filter(function(item) {
        return item.id !== jobId;
    });
    renderJobs();
}

// Start
renderJobs();