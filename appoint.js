let btn = document.getElementById("loginBtn");
let logoutBtn =document.getElementById("logoutBtn");
let userName = document.getElementById("userNames")
let navList = document.getElementById("navList")

if (localStorage.getItem('loggedIn') === 'true') {
    btn.style.display = "none"
    navList.style.display = "block"
    logoutBtn.style.display = "flex"
    userName.innerText = localStorage.getItem("user")
}else{
    logoutBtn.style.display = "none"
    navList.style.display = "none"
    btn.style.display = "block"
    window.location.href = "/home.html"
}


function displayAppointments() {
    // Get the appointment list from localStorage
    var appointmentList = JSON.parse(localStorage.getItem('appointList')) || [];

    // Get the table body element   
    var tableBody = document.getElementById("appointments-table-body");
  
    // // Clear the table body
    tableBody.innerHTML = '';

      var row = tableBody.insertRow();

      var cellIndex = row.insertCell();
      cellIndex.textContent =  1;
  
      var cellName = row.insertCell();
      cellName.textContent = appointmentList.name;

      var celldob = row.insertCell();
      celldob.textContent = appointmentList.dob;

      var cellGender = row.insertCell();
      cellGender.textContent = appointmentList.gender;

      var cellEmail = row.insertCell();
      cellEmail.textContent = appointmentList.email;

      var cellphone = row.insertCell();
      cellphone.textContent = appointmentList.phone;
  
      var cellDoctor = row.insertCell();
      cellDoctor.textContent = appointmentList.doctor;
  
      var cellDate = row.insertCell();
      cellDate.textContent = appointmentList.date;
  
      var cellTime = row.insertCell();
      cellTime.textContent = appointmentList.time;
    
  }

function bookAppointment() {
    // Retrieve form data
    var name = document.getElementById("name").value;
    var dob = document.getElementById("dob").value;
    var gender = document.getElementById("gender").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var doctor = document.getElementById("doctor").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;

    // Print the form values
    let formData = {
        "name": name,
        "dob": dob,
        "gender": gender,
        "email": email,
        "phone": phone,
        "doctor": doctor,
        "date":date,
        "time": time
    }
    console.log(formData)
    localStorage.setItem('appointList',JSON.stringify(formData))
    // Perform any additional processing or validation here

    // Reset the form
    document.getElementById("appointment-form").reset();
    alert("Your appointment is now booked")
    window.location.href="/appointmentList.html"
}

function logOut(){
    localStorage.setItem('loggedIn', 'false');
    window.location.reload();
}

displayAppointments()


