const hasMeeting = false;

const meeting = new Promise((resolve, reject) => {
    if (!hasMeeting) {
        const meetingDetails = {
            name: "Technical Meeting",
            location: "Google Meet",
            time: "10 PM",
        };
        resolve(meetingDetails);
    } else {
        reject(new Error("meeting already scheduled!"));
    }
});

meeting
    .then((res) => {
        // resolved data
        console.log(JSON.stringify(res));
    })
    .catch((err) => {
        // rejected data
        console.log(err.message);
    });

console.log(`hello`);
