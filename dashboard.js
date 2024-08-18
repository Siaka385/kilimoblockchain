
document.addEventListener('DOMContentLoaded', function() {

    const toggleBtn = document.querySelector('.toggle-btn');
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.querySelector('.main-content');

    const pageLinks = document.querySelectorAll('.sidebar a');
    const pages = document.querySelectorAll('.page-content');

    // Toggle sidebar
    toggleBtn.addEventListener('click', function() {
        sidebar.classList.toggle('open');
    });

    // Close sidebar when clicking outside of it
    mainContent.addEventListener('click', function() {
        if (sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
        }
    });

    // Handle page navigation
    pageLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetPage = e.target.id.replace('-link', '-page');

            // Hide all pages
            pages.forEach(page => {
                page.classList.remove('active');
            });

            // Show the target page
            document.getElementById(targetPage).classList.add('active');
        });
    });


    document.getElementById('add-product-btn').addEventListener('click', function() {
        //hide it
        document.getElementById('products-page').style.display='none'
        // Show the modal
        document.getElementById('add-product-modal').style.display = 'block';
    });
    
    document.getElementById('cancel-btn').addEventListener('click', function() {
        // Hide the modal
        document.getElementById('add-product-modal').style.display = 'none';
        //show products
        document.getElementById('products-page').style.display='block';
    });

    
    document.getElementById('save-product-btn').addEventListener('click', function() {
        // Get input values
        const productName = document.getElementById('product-name').value;
        const batchNumber = document.getElementById('batch-number').value;
        const quantity = document.getElementById('quantity').value;
        const weight = document.getElementById('weight').value;
        const productImage = document.getElementById('product-image').files[0];
        const methodOfsale=document.getElementById("saleMethod").value;
        const price=document.getElementById("Price").value;

console.log(methodOfsale)
        // // Validate inputs
        // if (!productName || !batchNumber || !quantity || !weight || !productImage) {
        //     alert('Please fill in all fields and select an image.');
        //     return;
        // }
    
        // Create a new table row
        const newRow = document.createElement('tr');
    
        // Add product data to the row
        newRow.innerHTML = `
            <td>${productName}</td>
            <td>${batchNumber}</td>
            <td>${quantity}</td>
            <td>${weight}</td>
            <td><img src="${URL.createObjectURL(productImage)}" alt="${productName}" class="productimage"></td>
            <td>${methodOfsale}</td>
            <td>${price}</td>
        `;
    
        // Append the new row to the table body
        document.getElementById('product-table-body').appendChild(newRow);
    
        // Hide the modal
        document.getElementById('add-product-modal').style.display = 'none';
    

        document.getElementById('products-page').style.display='block'
        // Clear the input fields
        document.getElementById('product-name').value = '';
        document.getElementById('batch-number').value = '';
        document.getElementById('quantity').value = '';
        document.getElementById('weight').value = '';
        document.getElementById('product-image').value = '';
    });















    
    /**************************************************
     * PROFILE PAGE
     *******************/
document.getElementById('profilebtn').addEventListener('click', function() {
// Hide text elements and show input fields
var hides = document.querySelectorAll('.section');
document.getElementById("title").textContent = "Profile Edit";

hides.forEach(function(item) {
item.style.display = 'none';
});

// Hide edit button and show save button
document.getElementById('profilebtn').style.display = 'none';
document.getElementById('profileeditor').style.display = 'block';
document.getElementById('editname').value = document.getElementById('name').textContent;
document.getElementById('editemail').value = document.getElementById('email').textContent;
document.getElementById('editphone').value = document.getElementById('phonenumber').textContent;
document.getElementById('editlocation').value = document.getElementById('location').textContent;
});


// profilePicInput.addEventListener('change', function() {
//      const file = this.files[0];
//      if (file) {
//      const reader = new FileReader();
//          reader.onload = function(e) {
//              profilePicPreview.src = e.target.result;
//             profilePicPreview.style.display = 'block';
//          }
//         reader.readAsDataURL(file);
//     } else {
//          profilePicPreview.style.display = 'none';
//     }
//  });

document.getElementById('saveprofilebtn').addEventListener('click', function(event) {
// Prevent the default form submission
event.preventDefault();

//fetch start

// Create a FormData object from the form
/*
const formData = new FormData(this);

// Send the form data using fetch
fetch('/your-endpoint', {
method: 'POST',
body: formData
})
.then(response => {
if (response.ok) {
    return response.json(); // Assuming server responds with JSON
}
throw new Error('Network response was not ok.');
})
.then(data => {
// Handle the response data if needed
console.log('Success:', data);
// You can add code here to update the UI or show a success message
})
.catch(error => {
// Handle errors
console.error('Error:', error);
});


*/
//end of fetch

// Hide the profile editor form
document.getElementById('profileeditor').style.display = 'none';

// Show the profile sections
var hides = document.querySelectorAll('.section');
document.getElementById("title").textContent = "About";

hides.forEach(function(item) {
item.style.display = 'block';
});

// Update the profile information with the edited values
document.getElementById('name').textContent = document.getElementById('editname').value;
document.getElementById('email').textContent = document.getElementById('editemail').value;
document.getElementById('phonenumber').textContent = document.getElementById('editphone').value;
document.getElementById('location').textContent = document.getElementById('editlocation').value;

// Show the edit button
document.getElementById('profilebtn').style.display = 'inline-block';
});
/***********************************
* END OF PROFILE EDIT
* 
* *******************/




document.getElementById("farmbtn").addEventListener("click",function(){

// Hide the current section and show the farm editor form
document.querySelectorAll('.section').forEach(function(item) {
item.style.display = 'none';
});
document.getElementById("title").textContent = "Edit Farm Information";
document.getElementById('farm-editor').style.display = 'block';

// Populate the form with the existing farm details
document.getElementById('editfarmname').value = document.getElementById('farmname').textContent;
document.getElementById('editfarmsize').value = document.getElementById('farmsize').textContent;
document.getElementById('editproducts').value = document.getElementById('products').textContent;
document.getElementById('editexperience').value = document.getElementById('Experience').textContent;
})
document.getElementById("savefarmbtn").addEventListener("click",function(event){

// Prevent default form submission
event.preventDefault();

// const farm=new farmdetails(this) 

// fetch("/endpoint",{
//     method:"POST",
//     body:farm
// }).then(response=>{
//     if(response.ok){
//         response.json()
//     }
//     throw new Error('Network response was not ok.');
// }).then(data => {
//         // Handle the response data if needed
//         console.log('Success:', data);
//         // You can add code here to update the UI or show a success message
//     })
//     .catch(error => {
//         // Handle errors
//         console.error('Error:', error);
//     });


// Hide the farm editor form and show the sections again
document.getElementById('farm-editor').style.display = 'none';

document.querySelectorAll('.section').forEach(function(item) {
item.style.display = 'block';
});
document.getElementById("title").textContent = "About";

// Update the farm information with the edited values
document.getElementById('farmname').textContent = document.getElementById('editfarmname').value;
document.getElementById('farmsize').textContent = document.getElementById('editfarmsize').value;
document.getElementById('products').textContent = document.getElementById('editproducts').value;
document.getElementById('Experience').textContent = document.getElementById('editexperience').value;
})



document.getElementById('cancelfarmbtn').addEventListener('click', function() {
// Hide the farm editor form and show the sections again
document.getElementById('farm-editor').style.display = 'none';
document.querySelectorAll('.section').forEach(function(item) {
item.style.display = 'block';
});
document.getElementById("title").textContent = "About";
});

/*******************************
* END OF FARM INPUT
* *************************/


/**************
* 
* BANK DETAILS
* **************/
// Handle editing the current payment method
document.getElementById('editBankMethod').addEventListener('click', function() {
// Hide the current section and show the bank editor form
document.querySelectorAll('.section').forEach(function(item) {
item.style.display = 'none';
});
document.getElementById("title").textContent = "Edit Banking and Payment Info";
document.getElementById('bank-editor').style.display = 'block';

// Populate the form with the existing payment details
document.getElementById('editPayBill').value = document.getElementById('PayBill').textContent;
document.getElementById('editAccount').value = document.getElementById('Account').textContent;
});

// Handle saving the edited payment method
document.getElementById('saveBankBtn').addEventListener('click', function(event) {
// Prevent default form submission
event.preventDefault();

// Hide the bank editor form and show the sections again
document.getElementById('bank-editor').style.display = 'none';
document.querySelectorAll('.section').forEach(function(item) {
item.style.display = 'block';
});
document.getElementById("title").textContent = "About";

// Update the payment information with the edited values
document.getElementById('paymentmethod').textContent = document.getElementById('editpaymentmethod').value;
document.getElementById('PayBill').textContent = document.getElementById('editPayBill').value;
document.getElementById('Account').textContent = document.getElementById('editAccount').value;
});


//ADD BANK METHOD CLOSED

// // Handle adding a new payment method
// document.getElementById('addbankmethod').addEventListener('click', function() {
// // Hide the current section and show the bank adder form
// document.querySelectorAll('.section').forEach(function(item) {
// item.style.display = 'none';
// });
// document.getElementById("title").textContent = "Add Another Payment Method";
// document.getElementById('bank-adder').style.display = 'block';
// });

/*

// Handle saving the new payment method
document.getElementById('saveNewBankBtn').addEventListener('click', function(event) {
// Prevent default form submission
event.preventDefault();
cancel=document.querySelectorAll(".delete")
// Hide the bank adder form and show the sections again
document.getElementById('bank-adder').style.display = 'none';
document.querySelectorAll('.section').forEach(function(item) {
item.style.display = 'block';
});
document.getElementById("title").textContent = "About";

// Create a new container for the new payment method
const paymentContainer = document.createElement('div');
paymentContainer.classList.add('payments');

// Add the new payment method details to the container
paymentContainer.innerHTML = `
<p>Preferred Payment Method: <strong>${document.getElementById('newpaymentmethod').value}</strong></p>
<p>PayBill: <strong>${document.getElementById('newPayBill').value}</strong></p>
<p>Account Number: <strong>${document.getElementById('newAccount').value}</strong></p>
`;

// Create a container for the buttons
const btnContainer = document.createElement('div');
btnContainer.classList.add('btns');

// Create the edit and delete buttons
const editBtn = document.createElement('button');
editBtn.classList.add('edit-button');
editBtn.textContent = 'Edit Banking Info';

const deleteBtn = document.createElement('button');
deleteBtn.classList.add('delete');
deleteBtn.textContent = 'DELETE';

// Append the buttons to the button container
btnContainer.appendChild(editBtn);
btnContainer.appendChild(deleteBtn);

// Create a wrapper div for payment info and buttons
const wrapperDiv = document.createElement('div');
wrapperDiv.classList.add('payment-wrapper');
wrapperDiv.appendChild(paymentContainer);
wrapperDiv.appendChild(btnContainer);

// Append the wrapper div to the existing payment container
document.getElementById('paymentcontainer').appendChild(wrapperDiv);
});

// Handle canceling the editing or adding process
document.getElementById('cancelBankBtn').addEventListener('click', function() {
document.getElementById('bank-editor').style.display = 'none';
document.querySelectorAll('.section').forEach(function(item) {
item.style.display = 'block';
});
document.getElementById("title").textContent = "About";
});

document.getElementById('cancelNewBankBtn').addEventListener('click', function() {
document.getElementById('bank-adder').style.display = 'none';
document.querySelectorAll('.section').forEach(function(item) {
item.style.display = 'block';
});editSocialBtn
document.getElementById("title").textContent = "About";
});

*/

/**************
* END OF BANK DETAAILS
* ******************/

/****************
 * EDIT SOCIAL MEDIA
 *****************/
document.getElementById("socialmedia").addEventListener("click",function(){
    // Hide the current section and show the bank editor form
    document.querySelectorAll('.section').forEach(function(item) {
    item.style.display = 'none';
    });
    document.getElementById("title").textContent = "Edit social media info";
    document.getElementById('social-editor').style.display = 'block';
    
    // Populate the form with the existing payment details
    document.getElementById('editFacebook').value = document.getElementById('facebook').textContent;
    document.getElementById('editTwitter').value = document.getElementById('twitter').textContent;
    document.getElementById('editInstagram').value=document.getElementById("instagram").textContent;
});
document.getElementById("saveSocialBtn").addEventListener("click",function(event){
      event.preventDefault();

      // Collect updated values from the form
      const updatedFacebook = document.getElementById('editFacebook').value;
      const updatedTwitter = document.getElementById('editTwitter').value;
      const updatedInstagram = document.getElementById('editInstagram').value;
  
       


      // Update the social media info section with the new values
      document.getElementById('facebook').textContent = updatedFacebook;
      document.getElementById('twitter').textContent = updatedTwitter;
      document.getElementById('instagram').textContent = updatedInstagram;
  
   let fb =document.getElementById('facebook');
   let twitter=document.getElementById('twitter');
   let insta=document.getElementById('instagram');
   fb.href="https://facebook.com/"+updatedFacebook
   twitter.href="https://twitter.com/"+updatedTwitter
   insta.href="https://instagram.com/"+updatedInstagram

      // Hide the editor form and show the sections again
      document.getElementById('social-editor').style.display = 'none';
      document.querySelectorAll('.section').forEach(function(item) {
          item.style.display = 'block';
      });
      document.getElementById("title").textContent = "About";

})

document.getElementById("cancelSocialBtn").addEventListener("click",function(){
    // Hide the farm editor form and show the sections again
document.getElementById('social-editor').style.display = 'none';
document.querySelectorAll('.section').forEach(function(item) {
item.style.display = 'block';
});
document.getElementById("title").textContent = "About";
})
    
    
});
