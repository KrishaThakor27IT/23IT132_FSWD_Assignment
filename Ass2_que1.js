const appointments = [];

// Function to add an appointment
function addAppointment(clientName, appointmentTime, serviceType) {
    try {
        if (!clientName || typeof clientName !== 'string') {
            throw new Error("Invalid client name.");
        }
        if (typeof appointmentTime !== 'number' || appointmentTime <= 0) {
            throw new Error("Invalid appointment time.");
        }

        const appointment = { clientName, appointmentTime, serviceType };
        appointments.push(appointment);
        console.log("Appointment added:", appointment);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

// Adding appointments (scheduled 10 sec & 14 sec from now)
addAppointment("John Doe", 10, "Consultation");
addAppointment("Jane Smith", 14, "Follow-up");

// Function to get upcoming appointments within the next 30 seconds
function upcomingAppointments() {
    const upcoming = appointments.filter(app => app.appointmentTime <= 30);
    console.log("Upcoming Appointments:", upcoming);
    return upcoming;
}

// Calling the function
upcomingAppointments();

// Function to send reminders
function sendReminder() {
    appointments.forEach(app => {
        if (app.appointmentTime <= 30) {
            console.log(`Reminder set for ${app.clientName} in ${app.appointmentTime} seconds.`);
            setTimeout(() => {
                console.log(`Reminder: Your appointment for ${app.serviceType} with ${app.clientName} is scheduled.`);
            }, app.appointmentTime * 1000);
        } else {
            console.log(`Missed appointment for ${app.clientName}.`);
        }
    });
}

// Calling reminders function
sendReminder();

// Stop the operations after 30 seconds
setTimeout(() => {
    console.log("30 seconds have passed. Ending all appointment operations.");
}, 30 * 1000);
