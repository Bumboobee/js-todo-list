const setTagAsDone = async (element, id) => {
    event.preventDefault();
    try {
        let headers = new Headers({ 'Content-Type' : 'application/json' });
        let body = JSON.stringify({ task: { done: element.checked } });
        let response = await fetch(`/tasks/${id}?_method=put`, { headers: headers, body: body, method: 'PUT' });
        let data = await response.json();
        let task = data.task;
        let parent = element.parentNode;
        

        if (task.done) {
            element.checked = true;
            parent.classList.add('has-text-dark');
            parent.classList.add('is-italic');
            parent.classList.add('strikethrough-text');

        } else {
            element.checked = false;
            parent.classList.remove('has-text-dark');
            parent.classList.remove('is-italic');
            parent.classList.remove('strikethrough-text');
        }
    } catch (error) {
        alert('Erro ao atualizar a tarefa!');
    }
}