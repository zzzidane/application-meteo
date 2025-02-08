document.getElementById('search-btn').addEventListener('click', recupererDonneesMeteo);

function recupererDonneesMeteo() {
    // Simulation de récupération de données météorologiques
    const ville = document.getElementById('city-input').value;
    
    // Données météorologiques simulées
    const donnees = {
        temperature: Math.floor(Math.random() * 30) + 5, // Température entre 5 et 35°C
        description: getDescriptionMeteo(),
        humidite: Math.floor(Math.random() * 100),
        vent: (Math.random() * 50).toFixed(1)
    };

    // Mise à jour de l'interface utilisateur
    document.getElementById('city-name').textContent = ville;
    document.getElementById('temperature').textContent = `${donnees.temperature}°C`;
    document.getElementById('description').textContent = donnees.description;
    document.getElementById('humidity').textContent = `${donnees.humidite}%`;
    document.getElementById('wind').textContent = `${donnees.vent} km/h`;
}

function getDescriptionMeteo() {
    const descriptions = [
        'Ensoleillé', 
        'Nuageux', 
        'Partiellement nuageux', 
        'Pluie légère', 
        'Ciel dégagé'
    ];
    return descriptions[Math.floor(Math.random() * descriptions.length)];
}