 

Parse.initialize("9g95qy4iB8DFamvtPk4G3PbyOl2RfxqaPGEXZhaN", "ubiG2ekFUwEjA7BZSDOSzbvgpXveJqvRyOn9hMby");
  
function updateTable(){
  var URLs = Parse.Object.extend("URLs");
  var query = new Parse.Query(URLs);
  query.descending("site_views");
  query.find({
    success: function(results) {
      $('#URLs_table tbody').remove();
      $('#URLs_table').append("<tbody></tbody>");
      for (row = 0; row < results.length; row++)
      {
       
        
        $("#URLs_table tbody:last").append(
          "<tr>" +
            "<td>" + results[row]["attributes"].site_name + "</td>" +
            "<td><a class=\"page_url_column\" href=\"" + results[row]["attributes"].site_url +"\" target=\"_blank\">" + results[row]["attributes"].site_url + "</a></td>" +
            "<td>" + results[row]["attributes"].site_views + "</td>" +
          "</tr>"
          );
      } 
    },
    error: function(error) {
      alert("Error: " + error.code + " " + error.message);
    }
  });
}

updateTable();

$('#URLs_table').on('mousedown', '.page_url_column', function(event){

  if(event["button"] < 2)
  {      
    var URLs = Parse.Object.extend("URLs");
    var query = new Parse.Query(URLs);
    query.contains("site_url", event["currentTarget"]["host"]);
    query.first({
      success: function(result) {
        result.increment("site_views");
        result.save();
        updateTable();
      },
      error: function(error) {
        alert("Error: " + error.code + " " + error.message);
      }
    });
  }

});
