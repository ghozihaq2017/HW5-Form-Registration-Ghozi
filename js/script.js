// Change Tab
const formBansosContainer = document.getElementById('form-bansos');
const dataBansosContainer = document.getElementById('data-bansos');
const tabRegist = document.getElementById('tab-regist');
const tabList = document.getElementById('tab-list');

const onRegist = () => {
  dataBansosContainer.classList.add('hidden');
  tabList.classList.remove('tab-active');
  formBansosContainer.classList.remove('hidden');
  tabRegist.classList.add('tab-active');
};

const onData = () => {
  formBansosContainer.classList.add('hidden');
  tabList.classList.add('tab-active');
  dataBansosContainer.classList.remove('hidden');
  tabRegist.classList.remove('tab-active');
};

// Form Action

window.onload = (event) => {
  console.log('Page is fully loaded');

  // Display Table
  displayData();

  // Submit Form
  const submitButton = document.getElementById('submit');
  const nameInput = document.getElementById('name');
  const ageInput = document.getElementById('age');
  const salaryInput = document.getElementById('salary');

  submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    const nameValue = nameInput.value;
    const ageValue = parseInt(ageInput.value);
    const salaryValue = parseInt(salaryInput.value);

    // Validasi input
    if (nameValue.length < 10) {
      alert('Nama harus memiliki minimal 10 karakter');
      return;
    }

    if (ageValue < 25) {
      alert('Umur harus minimal 25 tahun');
      return;
    }

    if (salaryValue < 100000 || salaryValue > 1000000) {
      alert('Gaji harus di antara Rp. 100.000 dan Rp. 1.000.000');
      return;
    }

    // Memberikan Jeda 3 Detik
    setTimeout(() => {
      const newApplicant = new Applicant(nameValue, ageValue, salaryValue);
      dataApplicants.push(newApplicant);
      displayData();

      // Notifikasi telah ditambahkan
      alert(
        'Registration data has been added: \nName: ' +
          nameValue +
          '\nAge: ' +
          ageValue +
          '\nSalary: ' +
          salaryValue,
      );
    }, 3000);

    nameInput.value = '';
    ageInput.value = '';
    salaryInput.value = '';
  });
};

class Applicant {
  constructor(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }
}

const dataApplicants = [
  new Applicant('Jose Mourinho', 50, 100000),
  new Applicant('Pep GUardiola', 57, 500000),
  new Applicant('Sir Alex Ferguson', 50, 850000),
];

const displayData = () => {
  const listTable = document.getElementById('list-table');
  listTable.innerHTML = '';

  let totalAge = 0;
  let totalSalary = 0;

  for (let i = 0; i < dataApplicants.length; i++) {
    const row = listTable.insertRow(i);

    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);

    cell1.innerHTML = dataApplicants[i].name;
    cell2.innerHTML = `${dataApplicants[i].age} y.o`;
    cell3.innerHTML = `Rp. ${dataApplicants[i].salary}`;

    // Menghitung total age dan salary
    totalAge += dataApplicants[i].age;
    totalSalary += dataApplicants[i].salary;
  }

  // Hitung average
  const averageAge = totalAge / dataApplicants.length;
  const averageSalary = totalSalary / dataApplicants.length;

  const averageElement = document.getElementById('average');
  averageElement.textContent = `The average applicant has a salary of ${averageSalary.toFixed(
    2,
  )} with an average age of ${averageAge.toFixed(2)}`;
};
