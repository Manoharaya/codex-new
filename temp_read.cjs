const fs = require('fs');
const path = require('path');

const resourcesPath = path.join('e:', 'cn', 'src', 'pages', 'Resources.jsx');
let resourcesContent = fs.readFileSync(resourcesPath, 'utf8');

const startIdx = resourcesContent.indexOf('const blogsData = [');
const endIdx = resourcesContent.indexOf('const successStoriesData = [');

let blogsDataContent = resourcesContent.substring(startIdx, endIdx).trim();

// Now we need to modify BlogDetail.jsx to use this blogsData array.
// But we need to add the `content` property to each blog because Resources.jsx doesn't have it!
// Let's create a richer dummy content or keep the same dummy content for now, but dynamically generate it or just embed it.
