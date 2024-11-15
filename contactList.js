const contactsList = [
  { name: "John Doe", phone: "1234 567 890", email: "john.doe@example.com" },
  {
    name: "Jane Smith",
    phone: "2345 678 901",
    email: "jane.smith@example.com",
  },
  {
    name: "Bob Johnson",
    phone: "3456 789 012",
    email: "bob.johnson@example.com",
  },
];

const formatContact = (contact) => {
  return `
      <h2 class="name">${contact.name}</h2>
      <p><strong>Phone: </strong> <span class="phone">${contact.phone}</span></p>
      <p><strong>Email: </strong> <span class="email">${contact.email}</span></p>
    `;
};

const newContact = {
  name: "Maisie Haley",
  phone: "0913 531 3030",
  email: "risus.Quisque@urna.ca",
};

const addNewContact = () => {
  const newItem = document.createElement("li");
  newItem.innerHTML = formatContact(newContact);
  const contacts = document.querySelector("#contacts");
  contacts.appendChild(newItem);
  console.log(newContact);
};

const displayInitialList = () => {
  const contacts = document.querySelector("#contacts");
  const formattedContacts = contactsList.reduce(
    (acc, curr) => acc + `<li>${formatContact(curr)}</li>`,
    ""
  );
  contacts.innerHTML = formattedContacts;
  console.log(contactsList);
};

const displayFirstLast = () => {
  const newList = Array.from(document.querySelectorAll("li")).filter(
    (_, i, arr) => i === 0 || i === arr.length - 1
  );
  const contacts = document.querySelector("#contacts");
  contacts.innerHTML = "";
  newList.forEach((it) => contacts.appendChild(it));
  console.log(
    newList.map((it) => {
      const name = it.querySelector(".name").innerHTML;
      const phone = it.querySelector(".phone").innerHTML;
      const email = it.querySelector(".email").innerHTML;
      return { name, phone, email };
    })
  );
};

window.onload = () => {
  displayInitialList();
  const newContactBtn = document.querySelector("#new-contact");
  const initialListBtn = document.querySelector("#initial-list");
  const firstLastBtn = document.querySelector("#first-last");
  newContactBtn.addEventListener("click", addNewContact);
  initialListBtn.addEventListener("click", displayInitialList);
  firstLastBtn.addEventListener("click", displayFirstLast);
};
