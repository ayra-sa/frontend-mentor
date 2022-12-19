const url = "https://geo.ipify.org/api/v2/country,city";
const searchForm = document.getElementById("search");
const form = document.getElementById("form");
let map = L.map("map").setView([0, 0], 13);
let marker = L.marker([0, 0]).addTo(map);
let circle = L.circle([0, 0]).addTo(map);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  fetchIp();

  e.target.reset();
});

const fetchIp = async (e) => {
  let response = await fetch(
    url +
      `?apiKey=at_yWV2NwRk59ehczZl5qJlRtlMnVzmN&ipAddress=${searchForm.value}`
  );
  let data = await response.json();

  console.log(data);

  const ip = document.getElementById("ip");
  const location = document.getElementById("location");
  const timezone = document.getElementById("timezone");
  const isp = document.getElementById("isp");

  const ipContent = `${data.ip}`;
  const locationContent = `${data.location.region}, ${data.location.country}`;
  const timezoneContent = `${data.location.timezone}`;
  const ispContent = `${data.isp}`;

  ip.innerHTML = ipContent;
  location.innerHTML = locationContent;
  timezone.innerHTML = timezoneContent;
  isp.innerHTML = ispContent;

  // let map = L.map('map').setView([`${data.location.lat}`, `${data.location.lng}`], `${data.location.geonameId}`)

  map.setView([data.location.lat, data.location.lng], 13);

  console.log(marker);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

//   let marker = L.marker([0, 0]).addTo(map)

  L.marker([data.location.lat, data.location.lng]).addTo(map);

  L.circle([data.location.lat, data.location.lng], {
    color: "red",
    fillColor: "#f03",
    fillOpacity: 0.5,
    radius: 500,
  }).addTo(map);
};

fetchIp();
