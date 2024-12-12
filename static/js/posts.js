const cardContentDiv = document.getElementById('cardContent');
        
                fetch('https://jsonplaceholder.typicode.com/posts/54')
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`HTTP error! status: ${response.status}`);
                        }
                        return response.json();
                    })
                    .then(data => {
                        cardContentDiv.innerHTML = `
                        <div class="mb-4">
                            <p class="text-gray-700 font-semibold">Title:</p>
                           <h3 class="text-xl font-bold text-[#387ed1]">${data.title}</h3>
                        </div>
                        <div class="mb-4">
                            <p class="text-gray-700 font-semibold">Body:</p>
                           <p class="text-gray-800">${data.body}</p>
                       </div>
                       <div class="mb-4">
                           <p class="text-gray-700 font-semibold">Post ID: <span class="text-gray-900">${data.id}</span></p>
                        </div>
                        `
                    })
                    .catch(error => {
                        cardContentDiv.innerHTML = `<p class="text-red-500">Error: ${error.message}</p>`;
                         console.error('Fetch error:', error);
                    });