var trainers = [
    { name: "Samatha williams", availability: ["4:00pm-5:00pm"], areaOfExpertise: "cardiovascular" },
    { name: "Jake Statefarm",  availability: ["5:30pm-6:30pm",], areaOfExpertise: "Flexibility" },
    { name: "Freudley Leonard", availability: ["7:00pm-8:30pm"], areaOfExpertise: "Upper and lower body" },
    { name: "Rick Ross", availability: ["9:00pm-10:30pm"], areaOfExpertise: "muscle retention" }
    
];

function findTrainer() {
    
    var selectedAvailability = document.getElementById("availability").value;
    var selectedExpertise = document.getElementById("areaOfExpertise").value;

    
    var matchedTrainers = trainers.filter(function(trainer) {
        return trainer.availability.includes(selectedAvailability) && trainer.areaOfExpertise === selectedExpertise;
    });

    
    var matchedTrainerNames = matchedTrainers.map(function(trainer) {
        return trainer.name;
    });

    
    var trainerNamesDiv = document.getElementById("trainerNames");
    trainerNamesDiv.innerHTML = ""; 

    if (matchedTrainerNames.length > 0) {
        var trainerNamesText = "Trainers available: " + matchedTrainerNames.join(", ");
        trainerNamesDiv.textContent = trainerNamesText;
    } else {
        trainerNamesDiv.textContent = "No matching trainers found.";
    }
}