let currentDownloadIndex = 0; // To keep track of which image to download next
const imagesToDownload = ['dwn/ohio sigma video.mp4', 'dwn/alphavssigma.jpeg', 'dwn/alphawolf.jpeg', 'dwn/becomealpha.jpeg', 'dwn/sigmaquote.webp', 'dwn/SvsA.jpeg']; // Array of images

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        // Call the function to download the current image
        triggerFileDownload(imagesToDownload[currentDownloadIndex]);
        // Update the index for the next image, and loop back if at the end
        currentDownloadIndex = (currentDownloadIndex + 1) % imagesToDownload.length;
    }
});

function triggerFileDownload(filename) {
    const element = document.createElement('a');
    element.setAttribute('href', filename); // Assuming file is in the same directory
    element.setAttribute('download', filename);
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}
