const BODY = `
    <form data-testid="form" class="form">
        <div>
            <h1 data-testid="h1">Today's To Do<i class="fas fa-sync-alt"></i></h1>
            <hr>
            <input data-testid="new-input" class="input" type="text" placeholder="Add to your list...">
        </div>
        <div data-testid="records" class="listContainer"></div>
    </form>

    <script defer src="src/index.js"></script>
`;

document.body.innerHTML = BODY;
