var aToM
var nToZ;
var characters;

$(document).ready(function() {
  //AJAX call to get the data from a JSON file
  $.ajax({
    type: "GET",
    url: "character.json",
    data: { get_param: "value" },
    dataType: "json",
    success: function (data) {
      characters = data; //Store the retrieved data in a variable
      initializeTable(); 
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.error(textStatus, errorThrown); //Log any errors that occur
    }
  });

  
  //Function to initialize the table
  function initializeTable() {
    //Function to sort characters by name
    function getSortOrder() {
      return function (a, b) {
        if (a.CharacterName > b.CharacterName) {
          return 1;
        } else if (a.CharacterName < b.CharacterName) {
          return -1;
        }
        return 0;
      };
    }

    
    //Sort the characters by name and add them to the table
    characters.sort(getSortOrder());
    addDataToTableBody(characters);

    //Filter the characters by name and display the number of results by filter
    aToM = characters.filter((item) => /^[a-m]/i.test(item["CharacterName"]));
    nToZ = characters.filter((item) => /^[n-z]/i.test(item["CharacterName"]));
    $("#filterAM").text(`Filter A-M (${aToM.length})`);
    $("#filterNZ").text(`N-Z (${nToZ.length})`);
  }

  //Function to add data to the table body
  function addDataToTableBody(data) {
    let rows = "";
    $.each(data, function (key, value) {
      //Create HTML rows for each character and show them to the table body
      rows += `<tr>  
                <td>${value.first_name}</td>  
                <td>${value.last_name}</td>  
                <td>${value.gender}</td>                
                <td>${value.house}</td>  
                <td>${value.status}</td>
              </tr>`;
    });

    $("#tableBody").empty().append(rows);
  }

  //Event listener for search bar
  $("#search").on("keyup", function () {
    const value = $(this).val().toLowerCase();
    if (value) {
      //Filter table rows by search
      $("#tableBody tr").filter(function () {
        const $thisTr = $(this)[0];
        if (
          $thisTr.firstElementChild.textContent.toLowerCase().indexOf(value) > -1
        ) {
          $($thisTr).addClass("searchMatched");
        } else {
          $($thisTr).removeClass("searchMatched");
        }
      });
    } else {
      //Remove search filtering if search input is empty
      $("#tableBody tr").removeClass("searchMatched");
    }
  });

  
  //Event listener for filter buttons
  $("button").on("click", function () {
    let id = $(this).attr("id");
    if (id == "filterAM") {
      //Filter table rows by A-M characters
      addDataToTableBody(aToM);
    } else if (id == "filterNZ") {
      //Filter table rows by N-Z characters
      addDataToTableBody(nToZ);
    } else if (id == "all") {
      //Display all table rows
      addDataToTableBody(characters);
    }
  });
});