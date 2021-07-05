var images=[
"family.jpeg","mother.jpg","father.jpg","aunt.jpg","uncle.jpg","grandm.jpg","grangf.jpg"
];
var names=[
  "Family Book","Sasimaladevi","Praveen Bhaskaran","Shruthi","Karthik Kumar","Jayalakshmi","Pazhani Sami"
];
var i=0;
function update(){
    i++;
    var number_of_family_members_in_array=6
    if(i>number_of_family_members_in_array)
    {
      i=0;
    }
    var updatedImages= images[i];
    var updatedNames= names[i];
    document.getElementById("familymi").src=updatedImages;
    document.getElementById("familymn").innerHTML=updatedNames;
}