// Lesson 3: Reusable Components
// Components can receive props (inputs) and be reused.

function Person({ name, role }) {
    return (
        <div>
            <h3>{name}</h3>
            <p>{role}</p>
        </div>
    );
}

function App() {
    return (
        <div>
            <h1>Team Members</h1>
            <Person name='Fatimah' role='Developer' />
            <Person name='Joe' role='Designer' />
            <Person name='Hawwa' role='Manager' />
        </div>
    )
}

export default App;