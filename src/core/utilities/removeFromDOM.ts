const removeFromDOM = (queryId: string) => {
    const root = document.getElementById(queryId);

    if (root) {
        root.innerHTML = '';
    }

    return root;
}

export default removeFromDOM;
