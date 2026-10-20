// Welcome Message
let username = localStorage.getItem("name");

if (username) {
    document.getElementById("welcome").innerHTML = "Welcome, " + username + " 🎧";
}

// Song Data
const music = {

    happy: [
        {
            title: "Arabic Kuthu",
            artist: "Anirudh Ravichander",
            spotify: "https://open.spotify.com/search/Arabic%20Kuthu"
        },
        {
            title: "Vaathi Coming",
            artist: "Anirudh Ravichander",
            spotify: "https://open.spotify.com/search/Vaathi%20Coming"
        },
        {
            title: "Halamithi Habibo",
            artist: "Anirudh Ravichander",
            spotify: "https://open.spotify.com/search/Halamithi%20Habibo"
        },
        {
            title: "Naa Ready",
            artist: "Thalapathy Vijay, Anirudh Ravichander",
            spotify: "https://open.spotify.com/search/Naa%20Ready"
        },
        {
            title: "Enjoy Enjaami",
            artist: "Dhee, Arivu",
            spotify: "https://open.spotify.com/search/Enjoy%20Enjaami"
        }
    ],

    love: [
        {
            title: "Vaseegara",
            artist: "Bombay Jayashri",
            spotify: "https://open.spotify.com/search/Vaseegara"
        },
        {
            title: "Munbe Vaa",
            artist: "Shreya Ghoshal, Naresh Iyer",
            spotify: "https://open.spotify.com/search/Munbe%20Vaa"
        },
        {
            title: "Pachai Nirame",
            artist: "A.R. Rahman",
            spotify: "https://open.spotify.com/search/Pachai%20Nirame"
        },
        {
            title: "Kaadhal Rojave",
            artist: "S. P. Balasubrahmanyam",
            spotify: "https://open.spotify.com/search/Kaadhal%20Rojave"
        },
        {
            title: "Anbil Avan",
            artist: "A.R. Rahman",
            spotify: "https://open.spotify.com/search/Anbil%20Avan"
        }
    ],

    sad: [
        {
            title: "Po Nee Po",
            artist: "Mohit Chauhan",
            spotify: "https://open.spotify.com/search/Po%20Nee%20Po"
        },
        {
            title: "Maruvaarthai",
            artist: "Sid Sriram",
            spotify: "https://open.spotify.com/search/Maruvaarthai"
        },
        {
            title: "Kannazhaga",
            artist: "Dhanush, Shruti Haasan",
            spotify: "https://open.spotify.com/search/Kannazhaga"
        },
        {
            title: "Yennai Maatrum Kadhale",
            artist: "Sid Sriram",
            spotify: "https://open.spotify.com/search/Yennai%20Maatrum%20Kadhale"
        },
        {
            title: "Naan Pizhaippeno",
            artist: "Sid Sriram",
            spotify: "https://open.spotify.com/search/Naan%20Pizhaippeno"
        }
    ],

    relax: [
        {
            title: "The Life of Ram",
            artist: "Pradeep Kumar",
            spotify: "https://open.spotify.com/search/The%20Life%20of%20Ram"
        },
        {
            title: "Mazhai Kuruvi",
            artist: "A.R. Rahman",
            spotify: "https://open.spotify.com/search/Mazhai%20Kuruvi"
        },
        {
            title: "Kaatre En Vaasal",
            artist: "Unnikrishnan",
            spotify: "https://open.spotify.com/search/Kaatre%20En%20Vaasal"
        },
        {
            title: "Moongil Thottam",
            artist: "Abhay Jodhpurkar, Harini",
            spotify: "https://open.spotify.com/search/Moongil%20Thottam"
        },
        {
            title: "Vellai Pookal",
            artist: "A.R. Rahman",
            spotify: "https://open.spotify.com/search/Vellai%20Pookal"
        }
    ],

    workout: [
        {
            title: "Hukum",
            artist: "Anirudh Ravichander",
            spotify: "https://open.spotify.com/search/Hukum"
        },
        {
            title: "Beast Mode",
            artist: "Anirudh Ravichander",
            spotify: "https://open.spotify.com/search/Beast%20Mode"
        },
        {
            title: "Aaluma Doluma",
            artist: "Anirudh Ravichander",
            spotify: "https://open.spotify.com/search/Aaluma%20Doluma"
        },
        {
            title: "Surviva",
            artist: "Yogi B, Anirudh Ravichander",
            spotify: "https://open.spotify.com/search/Surviva"
        },
        {
            title: "Petta Paraak",
            artist: "Anirudh Ravichander",
            spotify: "https://open.spotify.com/search/Petta%20Paraak"
        }
    ]

};

// Recommend Songs
function recommendMusic() {

    let mood = document.getElementById("mood").value;
    let songs = document.getElementById("songs");

    songs.innerHTML = "";

    if (mood === "") {
        songs.innerHTML = "<h3>Please select a mood!</h3>";
        return;
    }

    music[mood].forEach(function(song) {

        songs.innerHTML += `
        <div class="song-card">
            <h3>${song.title}</h3>
            <p><b>Artist:</b> ${song.artist}</p>
            <a href="${song.spotify}" target="_blank">
                🎧 Play on Spotify
            </a>
        </div>
        `;

    });

}

// Logout
function logout() {
    alert("Logged Out Successfully!");
    window.location.href = "login.html";
}
function changeMood() {
    document.getElementById("mood").value = "";
    document.getElementById("songs").innerHTML = "";
}