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
        content: `With a classmate, I created a fully functional website with only HTML knowledge. With only HTML in our arsenal, we used our extensive AI literacy to help us along and create a project that could: take orders from users, by users clicking add to basket, it would then be added to that basket and the cost would be calculated off of the price and the quantity of items that were clicked by the user.`
    },
    eecu: {
        title: "EECU Budget Calculator",
        image: "images/eecu.png",
        imageAlt: "Screenshot of the EECU Budget Calculator",
        type: "Programming",
        tools: "HTML, CSS, JavaScript, Team Collaboration",
        content: `EECU sponsored my school, under the condition that students created a budget calculator for future use that EECU may want. Although our teacher gave us a condition, for the majority of the project we could only have our peers work on the project. It took massive amounts of communication and managing to attempt to get exactly what I had in mind, to navigate this I had to use my communication skills and pre-made goals and visions for the project that my peers could go off of.`
    },
    pawpal: {
        title: "PawPal",
        image: "images/pawpal.png",
        imageAlt: "Screenshot of the PawPal pet tracker website",
        type: "Programming",
        tools: "HTML, CSS, Multi-Page Layouts",
        content: `I worked with a singular partner to utilize our HTML and CSS knowledge and create a full website with several flows (pages) that users can navigate through. The website shows off a pet tracker site where you can navigate your pet through a tracker that you can put on by either collar or other type of accessory. `
    },
    zoo: {
        title: "Habitat Design Research Paper",
        image: "images/zoo.png",
        imageAlt: "Fresno Chaffee Zoo visit photo",
        type: "Writing",
        tools: "Research, Academic Writing",
        content: `After working with the Fresno Chaffee Zoo, our class was assigned an essay that would revolve around the topics that we learned and worked on with the zoo. In this essay I focused on the idea of how animals are kept busy while living in personal and small habitats through most of their lives. `
    },
    poem: {
        title: "The Author to Her Book Presentation",
        image: "images/poem.png",
        imageAlt: "Slide from The Author to Her Book presentation",
        type: "Writing",
        tools: "Literary Analysis, Slideshow Design, Public Speaking",
        content: `In a team of three, we were tasked with a presentation about the meaning and our understanding of the poem, The Author to Her Book. We created a slideshow and template, then presented our knowledge and interpretation of what we were going to say about the poem and how the author connects the words inside of it to her personal life.`
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