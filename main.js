// handles nav scroll effect, modal logic, and smooth scrolling

document.addEventListener('DOMContentLoaded', () => {

    const header = document.querySelector('header');

    // shrinks the header slightly when you scroll down
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('nav-scrolled');
        } else {
            header.classList.remove('nav-scrolled');
        }
    });

    // smooth scroll for any dropdown links that point to an anchor on the same page, js in case
    document.querySelectorAll('.dropdown-menu a').forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href.includes('#')) {
                const targetId = href.split('#')[1];
                const target = document.getElementById(targetId);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

});

// project modal data
// keeping all the project info here so the html stays clean

const projects = {
    bioshield: {
        title: "BioShield Website",
        image: "images/bioshield.png",
        imageAlt: "Screenshot of the BioShield website",
        type: "Programming",
        tools: "HTML, AI-Assisted Development",
        content: "With a classmate, I built a fully functional website using only HTML knowledge. We used our AI literacy to create a site where users could click 'add to basket,' have items added to a running cart, and see the total cost calculated from item price and quantity. This project taught me that understanding the logic behind code matters more than just generating it."
    },
    eecu: {
        title: "EECU Budget Calculator",
        image: "images/eecu.png",
        imageAlt: "Screenshot of the EECU Budget Calculator",
        type: "Programming",
        tools: "HTML, CSS, JavaScript, Team Collaboration",
        content: "EECU sponsored a project at my school asking students to build a budget calculator for potential real-world use. The catch: for most of the build, only peers could do the actual coding. I had to rely on strong communication and clear pre-built goals so my teammates had a solid direction to follow. Managing a project without writing most of the code myself was one of the hardest — and most valuable — things I learned all year."
    },
    pawpal: {
        title: "PawPal — Pet Tracker Site",
        image: "images/pawpal.png",
        imageAlt: "Screenshot of the PawPal pet tracker website",
        type: "Programming",
        tools: "HTML, CSS, Multi-Page Layouts",
        content: "Working with one partner, we built a full multi-page website using our combined HTML and CSS skills. PawPal is a pet tracker platform where owners can monitor their pet through a tracker attached via collar or accessory. This was my first project where HTML and CSS felt truly unified — not two separate things bolted together, but one coherent system building something real."
    },
    zoo: {
        title: "Habitat Design Research Paper",
        image: "images/zoo.png",
        imageAlt: "Fresno Chaffee Zoo visit photo",
        type: "Writing",
        tools: "Research, Academic Writing",
        content: "After visiting and working with the Fresno Chaffee Zoo, our class wrote research essays around what we observed and studied. I focused on how animals maintain mental engagement and natural behaviors while living in confined habitats over the course of their lives. The project pushed me to think critically about both animal behavior and the design decisions zookeepers make every day."
    },
    poem: {
        title: "The Author to Her Book — Presentation",
        image: "images/poem.png",
        imageAlt: "Slide from The Author to Her Book presentation",
        type: "Writing",
        tools: "Literary Analysis, Slideshow Design, Public Speaking",
        content: "In a team of three, we analyzed Anne Bradstreet's poem 'The Author to Her Book,' built a slideshow, and presented our interpretation to the class. We dug into how Bradstreet uses the metaphor of an imperfect child to describe her feelings about her own published work — something she never meant to release publicly. The collaboration pushed all three of us to agree on a shared reading and present it confidently."
    }
};

// fills the modal with whichever project was clicked, then shows it
function showProject(id) {
    const project = projects[id];
    if (!project) return; // just in case someone passes a bad id

    document.getElementById('modal-body').innerHTML = `
        <span class="modal-type-tag">${project.type}</span>
        <h2>${project.title}</h2>
        <p class="modal-tools"><strong>Tools &amp; Skills:</strong> ${project.tools}</p>
        <div class="modal-img-wrap">
            <img src="${project.image}" alt="${project.imageAlt}" onerror="this.style.display='none'">
        </div>
        <p>${project.content}</p>
    `;

    document.getElementById('project-modal').style.display = "block";
}

function hideProject() {
    document.getElementById('project-modal').style.display = "none";
}

// close modal if user clicks outside the modal-content box
window.onclick = function (e) {
    const modal = document.getElementById('project-modal');
    if (e.target === modal) hideProject();
};