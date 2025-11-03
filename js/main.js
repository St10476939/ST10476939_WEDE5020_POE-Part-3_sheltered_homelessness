// Initialize the map
const map = L.map('map', {
    center: [-26.1079, 28.0511], // Latitude and Longitude of Sandton City
    zoom: 13,
    scrollWheelZoom: false, // Optional: Disable scroll zoom for UX
});

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a marker
const marker = L.marker([-26.1079, 28.0511]).addTo(map);

// Add popup for the marker
marker.bindPopup("<b>Sheltered Homelessness</b><br>Sandton City, Rivonia Rd, Sandhurst, Sandton, 2196, South Africa").openPopup();

// Make the map responsive
function resizeMap() {
    const mapElement = document.getElementById('map');
    if (window.innerWidth < 480) {
        mapElement.style.height = '200px';
    } else if (window.innerWidth < 768) {
        mapElement.style.height = '250px';
    } else {
        mapElement.style.height = '300px';
    }
    map.invalidateSize();
}

// Initial resize
resizeMap();

// Resize on window change
window.addEventListener('resize', resizeMap);

