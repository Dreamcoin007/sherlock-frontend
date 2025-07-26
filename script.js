const platforms = [
  { name: "Facebook", url: "https://www.facebook.com/" },
  { name: "Twitter", url: "https://twitter.com/" },
  { name: "Instagram", url: "https://www.instagram.com/" },
  { name: "TikTok", url: "https://www.tiktok.com/@" }
];

document.getElementById("searchForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const results = document.getElementById("results");
  results.innerHTML = '';
  platforms.forEach(platform => {
    const link = platform.url + username;
    results.innerHTML += `
      <div class="border-b py-2 flex justify-between">
        <span>${platform.name}</span>
        <a href="${link}" target="_blank" class="text-blue-600 underline">Check</a>
      </div>`;
  });
});
