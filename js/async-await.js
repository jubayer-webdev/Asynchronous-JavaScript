function friendlyFunction1() {
    return Promise.resolve(`hello`);
}
async function friendlyFunction2() {
    return `hello`;
}
//! friendlyFunction1 && friendlyFunction2 are equivalent
console.log(friendlyFunction2());

//****************************************************** */
const hasMeeting = true;

const meeting = new Promise((resolve, reject) => {
    if (!hasMeeting) {
        const meetingDetails = {
            name: "Technical Meeting",
            location: "Google Meet",
            time: "10 PM",
        };
        console.log('Before "resolve" line, in meeting Promise');
        resolve(meetingDetails);
        console.log('After "resolve" line, in meeting Promise\n');
    } else {
        console.log('Before "reject" line, in meeting Promise');
        reject(new Error("meeting already scheduled!"));
        console.log('After "reject" line, in meeting Promise\n');
    }
});

const addToCalendar = (meetingDetails) => {
    // return new Promise((resolve, reject) => {
    //     const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
    //     resolve(calendar);
    // });
    //* These two are equivalent
    const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;

    return Promise.resolve(calendar);
};

meeting
    .then(addToCalendar)
    .then((res) => {
        // resolved data
        // console.log(JSON.stringify(res));
        console.log(`From chaining... ${res}`);
    })
    .catch((err) => {
        // rejected data
        console.log("From chaining... ", err.message);
    });

async function myMeeting() {
    try {
        const meetingDetails = await meeting;
        const calendar = await addToCalendar(meetingDetails);
        console.log(calendar);
        console.log("test");
    } catch (error) {
        console.log(error.message);
    }
}

myMeeting();

console.log(`hello world`);

//! here why only once print the
//! Before "reject" line, in meeting Promise
//! After "reject" line, in meeting Promise"
//! message ???????????????????????????????????
