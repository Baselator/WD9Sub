document.getElementById('createProjectForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    const projectName = document.getElementById('createProjectName').value;
    const location = document.getElementById('createLocation').value;
    const budget = document.getElementById('createBudget').value;
    const startDate = document.getElementById('createStartDate').value;
    const endDate = document.getElementById('createEndDate').value;

    const response = await fetch('http://localhost:3000/api/projects', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ProjectName: projectName, Location: location, Budget: budget, StartDate: startDate, EndDate: endDate })
    });

    const data = await response.json();
    alert(data.message);
});

document.getElementById('updateProjectForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    const projectId = document.getElementById('updateProjectId').value;
    const projectName = document.getElementById('updateProjectName').value;
    const location = document.getElementById('updateLocation').value;
    const budget = document.getElementById('updateBudget').value;
    const startDate = document.getElementById('updateStartDate').value;
    const endDate = document.getElementById('updateEndDate').value;

    const response = await fetch(`http://localhost:3000/api/projects/${projectId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ProjectName: projectName, Location: location, Budget: budget, StartDate: startDate, EndDate: endDate })
    });

    const data = await response.json();
    alert(data.message);
});

document.getElementById('deleteProjectForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    const projectId = document.getElementById('deleteProjectId').value;

    const response = await fetch(`http://localhost:3000/api/projects/${projectId}`, {
        method: 'DELETE'
    });

    const data = await response.json();
    alert(data.message);
});

document.getElementById('getProjectForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    const projectId = document.getElementById('getProjectId').value;

    const response = await fetch(`http://localhost:3000/api/projects/${projectId}`, {
        method: 'GET'
    });

    const data = await response.json();
    alert(JSON.stringify(data));
});

document.getElementById('getAllProjectsButton').addEventListener('click', async function () {
    const response = await fetch('http://localhost:3000/api/projects', {
        method: 'GET'
    });

    const data = await response.json();
    document.getElementById('allProjects').innerText = JSON.stringify(data, null, 2);
});
