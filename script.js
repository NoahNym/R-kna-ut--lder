function calculateAge() {
  const birthdate = new Date(document.getElementById("birthdate").value);
  const today = new Date();
  const ageInMilliseconds = today - birthdate;
  const ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365));
  const ageInDays = Math.floor((ageInMilliseconds / (1000 * 60 * 60 * 24)) % 365);

  const nextBirthday = new Date(today.getFullYear(), birthdate.getMonth(), birthdate.getDate());
  if (nextBirthday < today) {
    nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
  }
  
  const daysUntilBirthday = Math.floor((nextBirthday - today) / (1000 * 60 * 60 * 24));

  document.getElementById("result").innerHTML = `Du är ${ageInYears} år och ${ageInDays} dagar gammal. Det är ${daysUntilBirthday} dagar kvar tills din nästa födelsedag.`;
}