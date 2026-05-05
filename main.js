document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('nav-scrolled');
        } else {
            header.classList.remove('nav-scrolled');
        }
    });

    // the scroll for dropdown 
    document.querySelectorAll('.dropdown-menu a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href').split('#')[1];
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
const projectData = { //text for the projects
    bioshield: {
        title: "BioShield Website",
        content: "With a classmate, I created a fully functional website with only HTML knowledge. With only HTML in our arsenal, we used our extensive AI literacy to help us along and create a project that could: take orders from users, by users clicking add to basket, it would then be added to that basket and the cost would be calculated off of the price and the quantity of items that were clicked by the user."
    },
    eecu: {
        title: "EECU Budget Calculator",
        content: "EECU sponsored my school, under the condition that students created a budget calculator for future use that EECU may want. Although our teacher gave us a condition, for the majority of the project we could only have our peers work on the project. It took massive amounts of communication and managing to attempt to get exactly what I had in mind, to navigate this I had to use my communication skills and pre-made goals and visions for the project that my peers could go off of."
    },
    pawpal: {
        title: "PawPal",
        content: "I worked with a singular partner to utilize our HTML and CSS knowledge and create a full website with several flows (pages) that users can navigate through. The website shows off a pet tracker site where you can navigate your pet through a tracker that you can put on by either collar or other type of accessory."
    },
    zoo: {
        title: "Research Paper: Habitat Design",
        content: "After working with the Fresno Chaffee Zoo, our class was assigned an essay that would revolve around the topics that we learned and worked on with the zoo. In this essay I focused on the idea of how animals are kept busy while living in personal and small habitats through most of their lives."
    },
    poem: {
        title: "The Author to Her Book Presentation",
        content: "In a team of three, we were tasked with a presentation about the meaning and our understanding of the poem, The Author to Her Book. We created a slideshow and template, then presented our knowledge and interpretation of what we were going to say about the poem and how the author connects the words inside of it to her personal life."
    }
};

function openModal(id) {
    const data = projectData[id];
    document.getElementById('modalBody').innerHTML = `<h2>${data.title}</h2><p>${data.content}</p>`;
    document.getElementById('projectModal').style.display = "block";
}

function closeModal() {
    document.getElementById('projectModal').style.display = "none";
}

window.onclick = function (event) {
    if (event.target == document.getElementById('projectModal')) closeModal();
}