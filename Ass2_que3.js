const studySessions = [];

// Function to add a study session
function addSession(topic, sessionTime, duration) {
    try {
        if (!topic || typeof topic !== 'string') {
            throw new Error("Invalid topic.");
        }
        if (isNaN(duration) || duration <= 0) {
            throw new Error("Duration must be a positive number.");
        }
        if (typeof sessionTime !== 'number' || sessionTime <= 0) {
            throw new Error("Invalid session time.");
        }

        const session = { topic, sessionTime, duration };
        studySessions.push(session);
        console.log("Session added:", session);
    } catch (error) {
        console.error(error.message);
    }
}

// Adding study sessions (sessionTime is now a number representing seconds from now)
addSession("JavaScript", 30, 60); // Starts in 30 sec
addSession("Math", 60, 90); // Starts in 60 sec

// Function to list today's sessions (without using Date functions)
function listTodaysSessions() {
    const now = Date.now();
    return studySessions.filter(session => session.sessionTime >= now && session.sessionTime <= now + 24 * 60 * 60 * 1000);
}

console.log("Today's Sessions:", listTodaysSessions());

// Function to send session countdown
function sessionCountdown() {
    studySessions.forEach(session => {
        const timeDiff = session.sessionTime - Date.now();
        if (timeDiff > 0) {
            console.log(`Countdown set for session on ${session.topic}, starting in ${timeDiff / 1000} seconds.`);
            setTimeout(() => {
                console.log(`Session on ${session.topic} starts now!`);
            }, timeDiff);
        } else {
            console.log(`Session on ${session.topic} already started or is in the past.`);
        }
    });
}

sessionCountdown();

// Async function to fetch study materials
function fetchStudyMaterials(topic) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (topic) {
                resolve(`Study materials for ${topic} are now available.`);
            } else {
                reject("Invalid topic.");
            }
        }, 2000);
    });
}

fetchStudyMaterials("JavaScript")
    .then(materials => console.log(materials))
    .catch(err => console.error(err));
