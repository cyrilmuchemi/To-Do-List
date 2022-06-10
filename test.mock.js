/**
 * @jest-environment jsdom
 */

document.body.innerHTML = `
    <form class="form">
        <div>
            <h1>Today's To Do<i class="fas fa-sync-alt"></i></h1>
            <hr>
            <input class="input" type="text" placeholder="Add to your list...">
        </div>
        <div class="listContainer"></div>
    </form>

    <script defer src="src/index.js"></script>
`;
