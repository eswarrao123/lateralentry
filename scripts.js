document.getElementById('entryForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevents the default form submission

  // Get the selected semester value
  var selectedSemester = document.getElementById('sem').value;

  // Example data for subjects in odd and even semesters
  var oddSemSubjects = {
    'Subject 1': 'Code 1',
    'Subject 2': 'Code 2',
    // Add more subjects for odd semester if needed
  };

  var evenSemSubjects = {
    '22UC2103': 'ESSENTIALS SKILLS FOR EMPLOYABILITY	',
    '22MT2004': 'MATHEMATICAL PROGRAMMING',
    '': '',
    '22MT2004': 'MATHEMATICAL PROGRAMMING',
    '22MT2004': 'MATHEMATICAL PROGRAMMING',
    '22MT2004': 'MATHEMATICAL PROGRAMMING',
    '22MT2004': 'MATHEMATICAL PROGRAMMING',
    '22MT2004': 'MATHEMATICAL PROGRAMMING',
    '22MT2004': 'MATHEMATICAL PROGRAMMING',
    '22MT2004': 'MATHEMATICAL PROGRAMMING',

    // Add more subjects for even semester if needed
  };

  var subjectInfo = document.getElementById('subjectInfo');
  subjectInfo.innerHTML = ''; // Clear previous content

  // Display subjects based on the selected semester
  var subjectsToShow = selectedSemester === 'odd' ? oddSemSubjects : evenSemSubjects;

  // Generate HTML for displaying subjects and codes in a table for even semester
  if (selectedSemester === 'even') {
    var tableHTML = '<h2>Even Semester Subjects:</h2>';
    tableHTML += '<table class="center"><tr><th>Subject</th><th>Subject Code</th></tr>';
    for (var subject in subjectsToShow) {
      tableHTML += '<tr><td>' + subject + '</td><td>' + subjectsToShow[subject] + '</td></tr>';
    }
    tableHTML += '</table>';

    // Display the table in the div
    subjectInfo.innerHTML = tableHTML;
  }
});
