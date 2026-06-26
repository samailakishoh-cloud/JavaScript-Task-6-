// CONTACT BOOK APPLICATION

// Contact book array
const myContactBook = [];

// FUNCTION TO ADD A NEW CONTACT

function addContact(name, phone, email) {
    const contact = {
        name: name,
        phone: phone,
        email: email
    };

    myContactBook.push(contact);

    console.log(`Contact "${name}" added successfully.`);
}

// FUNCTION TO SEARCH FOR A CONTACT BY NAME

function searchContact(name) {
    const contact = myContactBook.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (contact) {
        console.log("CONTACT FOUND:");
        console.log("                    ");
        console.log(`Name : ${contact.name}`);
        console.log(`Phone: ${contact.phone}`);
        console.log(`Email: ${contact.email}`);
        console.log("                  ");
    } else {
       console.log("CONTACT NOT FOUND: \n" );
        console.log(`!!No contact found with the name "${name}".`);
    }
}

// FUNCTION TO LIST ALL CONTACTS
// IN ALPHABETICAL ORDER

function listContacts() {

    const sortedContacts = [...myContactBook].sort((a, b) =>
        a.name.localeCompare(b.name)
    );

    console.log("\n CONTACT LIST");

    sortedContacts.forEach((contact, index) => {
        console.log(`
${index + 1}. ${contact.name}
   Phone: ${contact.phone}
   Email: ${contact.email}
        `);
    });

    console.log("  \n");
}

// ADDING 5 CONTACTS

console.log("ADDED CONTACTS \n");

addContact(
    "Kishoh Samaila",
    "09032897907",
    "samailakishoh@gmail.com"
);

addContact(
    "Amos Jeniffer",
    "07098765432",
    "jenifferamos@gmail.com"
);

addContact(
    "GOdswill Gomna",
    "09011223344",
    "sgomnagodswill@gmail.com"
);

addContact(
    "Mary Johnson",
    "08123456789",
    "maryjohnson@gmail.com"
);

addContact(
    "Bitrus Yohanna",
    "08099887766",
    "yohannabitrus@gmail.com"
);

// DEMONSTRATION OF ALL FUNCTIONS

// List all contacts alphabetically
listContacts();

// Search for existing contact
searchContact("Godswill Gomna");

// Search for another existing contact
searchContact("Kishoh Samaila");

// Search for non-existing contact
searchContact("James Baba");