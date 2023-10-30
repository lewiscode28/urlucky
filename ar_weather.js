let coordinates = {}

$(document).ready(function () {
 //call the function
})

function get_coordinates() {
    let searchParams = new URLSearchParams(window.location.search)
    if (searchParams.has('source') && searchParams.has('destination')) {
        let source = searchParams.get('source')
        let destination = searchParams.get('destination')
        //split the values of source and destination in respective corrdinates
      





        
    } else {
      //show the alert message and add condition to go back to previous page 
    }
}