


$("#add_user").submit(function(event){
    alert("Data Inserted Successfully!");
})

$("#update_user").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })


    var request = {
        "url" : `http://localhost:4000/api/users/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("Data Updated Successfully!");
    })

})

if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:4000/api/users/${id}`,
            "method" : "DELETE"
        }

        if(confirm("Do you really want to delete this record?")){
            $.ajax(request).done(function(response){
                alert("Data Deleted Successfully!");
                location.reload();
            })
        }

    })
}


fetch('/images/image_filename.jpg') // Replace with the actual image filename
    .then(response => {
        if (response.status === 200) {
            const imageGallery = document.getElementById('image-gallery');
            const imgElement = document.createElement('img');
            imgElement.src = `/images/image_filename.jpg`; // Replace with the actual image filename
            imgElement.alt = 'Image Description';
            imageGallery.appendChild(imgElement);
        } else {
            console.error('Image not found');
        }
    });
