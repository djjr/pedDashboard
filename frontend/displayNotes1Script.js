//const API_BASE_URL = 'your_api_base_url_here'; // Replace with your actual API base URL

async function fetchTags() {
    try {
        const response = await fetch(`${API_BASE_URL}/api/tags/`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching tags:', error);
    }
}

async function fetchNotesByTags(tagIds) {
    try {
        const response = await fetch(`${API_BASE_URL}/api/notes?tagIds=${tagIds.join(',')}`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching notes:', error);
    }
}

function createNoteDivHIDE(note, tagArray) {
    const noteDiv = document.createElement('div');
    noteDiv.className = 'note';

    // Create title toggle div
    const titleToggleDiv = document.createElement('div');
    titleToggleDiv.className = 'title-toggle';
    titleToggleDiv.innerHTML = `<span class='triangle'>&#9656;</span> <span>${note.title}</span>`;
    titleToggleDiv.onclick = () => toggleNoteVisibility(noteDiv);

    // Create expandable content div
    const expandableContentDiv = document.createElement('div');
    expandableContentDiv.className = 'expandable-content';
    expandableContentDiv.style.display = 'none';

    // Create a div for displaying tags
    const tagsDiv = document.createElement('div');
    tagsDiv.className = 'note-tags';
    tagsDiv.style.fontSize = '0.5em';
    tagsDiv.style.color = 'purple';
    tagsDiv.textContent = '[' + note.tags.map(tag => tag.name).join(', ') + ']';


    // Create Edit button
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'edit-button';
    //editButton.onclick = () => window.location.href = `noteEdit.html?noteId=${note._id}`;
    editButton.addEventListener('click', () => openNoteInIframe(note._id));


    expandableContentDiv.appendChild(tagsDiv);
    expandableContentDiv.innerHTML += `<p>${note.content}</p>`;
    expandableContentDiv.appendChild(editButton);

    noteDiv.appendChild(titleToggleDiv);
    noteDiv.appendChild(expandableContentDiv);
    return noteDiv;
}

function toggleNoteVisibility(noteDiv) {
    const content = noteDiv.querySelector('.expandable-content');
    const triangle = noteDiv.querySelector('.triangle');
    if (content.style.display === 'none') {
        content.style.display = 'block';
        triangle.innerHTML = '&#9662;'; // Down-pointing triangle
    } else {
        content.style.display = 'none';
        triangle.innerHTML = '&#9656;'; // Right-pointing triangle
    }
}

function updateNotesDisplay(notes) {
    const notesPanel = document.getElementById('notesPanel');
    notesPanel.innerHTML = '';
    notes.forEach(note => {
        const noteDiv = createNoteDivHIDE(note);
        notesPanel.appendChild(noteDiv);
    });
}

function toggleTagSelection(tagElement, selectedTags) {
    const tagId = tagElement.getAttribute('data-tag-id');
    if (tagElement.classList.contains('selected')) {
        tagElement.classList.remove('selected');
        selectedTags.delete(tagId);
    } else {
        tagElement.classList.add('selected');
        selectedTags.add(tagId);
    }

    fetchNotesByTags([...selectedTags]).then(updateNotesDisplay);
}

function openNoteInIframe(noteId) {
    const iframe = document.getElementById('noteEditIframe');
    iframe.src = `noteEdit.html?noteId=${noteId}`; // Set the source of the iframe

    const iframeContainer = document.getElementById('iframeContainer');
    iframeContainer.style.display = 'flex'; // Show the iframe container
}

function closeIframe() {
    const iframeContainer = document.getElementById('iframeContainer');
    iframeContainer.style.display = 'none'; // Hide the iframe container

    const iframe = document.getElementById('noteEditIframe');
    iframe.src = ''; // Optionally reset the iframe source
}

// Add event listener to the close button
const closeIframeBtn = document.getElementById('closeIframeBtn');
closeIframeBtn.addEventListener('click', closeIframe);

async function initialize() {
    console.log('Initializing');
    const tagsPanel = document.getElementById('tagsPanelContent');
    const tags = await fetchTags();
    const selectedTags = new Set();
    tags.sort((a, b) => a.name.localeCompare(b.name));

    tags.forEach(tag => {
        const tagElement = document.createElement('div');
        tagElement.className = 'tag';
        tagElement.textContent = tag.name;
        tagElement.setAttribute('data-tag-id', tag._id);
        tagElement.onclick = () => toggleTagSelection(tagElement, selectedTags);
        tagsPanel.appendChild(tagElement);
    });

    // Add event listener to the close button
    const closeIframeBtn = document.getElementById('closeIframeBtn');
    closeIframeBtn.addEventListener('click', closeIframe);
}

//initialize();
document.addEventListener('DOMContentLoaded', initialize);