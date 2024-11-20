const facts = [
    "I have a passion for exploring new cultures and have visited over ten countries.",
    "I enjoy capturing the beauty of my travels through photography.",
    "I love trying local cuisines and have a goal to taste a dish from every country I visit.",
    "I have a knack for picking up new languages while traveling and can speak basic phrases in five different languages.",
    "I enjoy planning spontaneous weekend getaways to explore nearby cities and nature spots."
];

document.getElementById('generate-fact').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('fact-display').textContent = facts[randomIndex];
});
