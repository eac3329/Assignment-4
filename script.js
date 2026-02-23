let jobs = [
    { id: 1, companyName: "Google", position: "Frontend Developer", location: "Remote", jobType: "Full-time", salary: "$100,000 - $80,000", description: "Develop scalable and responsive user interfaces for Google products.", status: "All" },
    { id: 2, companyName: "Microsoft", position: "UI Engineer", location: "USA", jobType: "Full-time", salary: "$120,000 - $90,000", description: "Build modern UI components using JavaScript and accessibility standards.", status: "All" },
    { id: 3, companyName: "Amazon", position: "Web Developer", location: "Canada", jobType: "Full-time", salary: "$90,000 - $70,000", description: "Optimize high-traffic ecommerce interfaces for performance.", status: "All" },
    { id: 4, companyName: "Meta", position: "Frontend Engineer", location: "USA", jobType: "Remote", salary: "$110,000 - $85,000", description: "Design engaging social platform experiences.", status: "All" },
    { id: 5, companyName: "Netflix", position: "JavaScript Developer", location: "Remote", jobType: "Contract", salary: "$90,000 - $75,000", description: "Improve streaming UI performance and responsiveness.", status: "All" },
    { id: 6, companyName: "Spotify", position: "UI Specialist", location: "Sweden", jobType: "Full-time", salary: "$90,000 - $70,000", description: "Enhance music streaming user experience.", status: "All" },
    { id: 7, companyName: "Adobe", position: "Frontend Architect", location: "USA", jobType: "Full-time", salary: "$110,000 - $90,000", description: "Lead frontend system architecture development.", status: "All" },
    { id: 8, companyName: "Airbnb", position: "Web Designer", location: "Remote", jobType: "Part-time", salary: "$70,000 - $50,000", description: "Create intuitive booking interfaces.", status: "All" }
];

let activeFilter = 'All';

function render() {
    const container = document.getElementById('jobs-container');
    const filteredJobs = jobs.filter(j => activeFilter === 'All' ? true : j.status === activeFilter);
    
    // Global Dashboard Updates
    document.getElementById('total-count').innerText = jobs.length;
    document.getElementById('interview-count').innerText = jobs.filter(j => j.status === 'Interview').length;
    document.getElementById('rejected-count').innerText = jobs.filter(j => j.status === 'Rejected').length;
    
    // Header Count Update
    document.getElementById('tab-job-count').innerText = `${filteredJobs.length} jobs`;

    if (filteredJobs.length === 0) {
        container.innerHTML = `
            <div class="flex flex-col items-center justify-center py-20 text-center px-4 h-full">
                <div class="empty-icon-container">
                    <img src="jobs.png" alt="Empty Icon" class="w-16 h-16 opacity-50">
                </div>
                <h3 class="text-xl font-bold text-slate-800 mb-2">No jobs available</h3>
                <p class="text-slate-500">Check back soon for new job opportunities</p>
            </div>`;
        return;
    }

    container.innerHTML = filteredJobs.map(job => `
        <div class="p-6 relative group hover:bg-slate-50/50 transition-colors">
            <button onclick="deleteJob(${job.id})" class="absolute top-6 right-6 text-slate-300 hover:text-red-500">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
            </button>
            <h4 class="text-[#1E3A8A] font-bold text-xl mb-1">${job.companyName}</h4>
            <p class="text-slate-700 font-semibold mb-2">${job.position}</p>
            <p class="text-slate-400 text-sm mb-4">${job.location} • ${job.jobType} • ${job.salary}</p>
            <div class="inline-block bg-blue-50 text-blue-600 text-[11px] font-bold px-3 py-1 rounded mb-4 tracking-wider uppercase">Not Applied</div>
            <p class="text-slate-500 text-sm mb-6 max-w-3xl">${job.description}</p>
            <div class="flex gap-3">
                <button onclick="updateStatus(${job.id}, 'Interview')" 
                    class="px-5 py-1.5 rounded text-xs font-bold transition-all 
                    ${job.status === 'Interview' ? 'bg-green-600 text-white border border-green-600' : 'btn-interview-outline'}">
                    INTERVIEW
                </button>
                <button onclick="updateStatus(${job.id}, 'Rejected')" 
                    class="px-5 py-1.5 rounded text-xs font-bold transition-all 
                    ${job.status === 'Rejected' ? 'bg-red-600 text-white border border-red-600' : 'btn-rejected-outline'}">
                    REJECTED
                </button>
            </div>
        </div>
    `).join('');
}

function updateStatus(id, newStatus) {
    const job = jobs.find(j => j.id === id);
    if (job) {
        job.status = (job.status === newStatus) ? 'All' : newStatus;
        render();
    }
}

function deleteJob(id) {
    jobs = jobs.filter(j => j.id !== id);
    render();
}

function filterJobs(filter) {
    activeFilter = filter;
    // Synchronize both sets of buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.innerText.toLowerCase() === filter.toLowerCase());
    });
    render();
}

// Initial Render
render();