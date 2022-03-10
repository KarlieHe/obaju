<?php

/* Set oracle user login and password info */
$dbuser = "hezili"; /* your deakin login */
$dbpass = "karliehe1006."; /* your oracle access password */
$db = "SSID";
$connect = oci_connect($dbuser, $dbpass, $db);

if (!$connect) {
echo "An error occurred connecting to the database";
exit;
}

/* build sql statement using form data */
$query = "SELECT * FROM Sign_in";

/* check the sql statement for errors and if errors report them */
$stmt = oci_parse($connect, $query);
//echo "SQL: $query<br>";
if(!$stmt) {
echo "An error occurred in parsing the sql string.\n";
exit;
}
oci_execute($stmt);





echo "<table border='1'>
<tr>
<th>Name</th>
<th>Email</th>
<th>Password</th>
</tr>";

// Display all the values in the retrieved records, one record per row, in a loop
while(oci_fetch_array($stmt)) {
  echo "<tr>";
  echo "<td>" . oci_result($stmt,"NAME") . "</td>";
  echo "<td>" . oci_result($stmt,"EMAIL") . "</td>";
  echo "<td>" . oci_result($stmt,"PASSWORD") . "</td>";
  echo "</tr>";
  }
echo "</table>";

// Close the connection
oci_close($connect);



?>
