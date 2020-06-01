const data = [
    {
        name: "John Doe",
        age: 32,
        gender: 'male',
        lookingfor: 'female',
        location: 'Miami FL',
        image: 'https://randomuser.me/api/portraits/women/43.jpg'
    },
    {
        name: "Paris Hilton",
        age: 32,
        gender: 'female',
        lookingfor: 'male',
        location: 'Miami FL',
        image: 'https://randomuser.me/api/portraits/women/90.jpg'
    },
    {
        name: "Tom Hilton",
        age: 32,
        gender: 'Male',
        lookingfor: 'female',
        location: 'Miami FL',
        image: 'https://randomuser.me/api/portraits/women/92.jpg'
    },
    {
        name: "Addison Doe",
        age: 32,
        gender: 'male',
        lookingfor: 'female',
        location: 'New York',
        image: 'https://randomuser.me/api/portraits/women/40.jpg'
    },
    {
        name: "Donald Doe",
        age: 32,
        gender: 'male',
        lookingfor: 'female',
        location: 'New York',
        image: 'https://randomuser.me/api/portraits/women/81.jpg'
    },
];

const profiles = profileIterator(data);

//next event

document.getElementById('next').addEventListener('click', nextProfile);
nextProfile();
function nextProfile() {
    const currentProfile = profiles.next().value;

    if(currentProfile !== undefined) {
        document.getElementById('profileDisplay').innerHTML = `
            <ul class="list-group">
                <li class="list-group-item"> Name: ${currentProfile.name}</li>
                <li class="list-group-item"> Age: ${currentProfile.age}</li>
                <li class="list-group-item"> Location: ${currentProfile.age}</li>
                <li class="list-group-item"> Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor} </li>
            </ul>
        `;
        document.getElementById('imageDisplay').innerHTML = `
            <img src="${currentProfile.image}">
        `;
    }else {
        window.location.reload()
    }

}

function profileIterator(profiles) {
    let nextIndex = 0;

    return {
        next: function() {
            return nextIndex < profiles.length ? 
            { value: profiles[nextIndex++], done: false } :
            { done: true }
        }
    };
}