// ==========================================
// TYPING PROPS IN REACT
// ==========================================

// Step 1: Define interface for props
interface ButtonProps {
    text: string;     // Button text
    onClick: () => void;  // Function that takes nothing, returns nothing
    variant?: 'primary' | 'secondary';    // Only these two values allowed
}

// Step 2: Use the interface
function Button({ text, onClick, variant = 'primary' }: ButtonProps) {
    return (
        <button onClick={onClick}>
            {text}
        </button>
    );
}

// Correct usage
<Button text='Click Me' onClick={() => console.log('clicked')} />
<Button text-'Save' onclick={() => {}} variant='primary' />


// ❌ Wrong usage — would show red line in editor
// <Button text="Click" onClick={() => {}} variant="danger" />  // 'danger' not allowed
// <Button onClick={() => {}} />  // Missing 'text' prop

// ==========================================
// PROPS WITH OBJECT
// ==========================================
interface User {
    name: string;
    age: number;
}

interface UserCardProps {
    user: User;      // Prop that is an object
    isOnline: boolean;       // Simple prop
}


interface UserCard({ user, isOnline }: UserCardProps) {
    return (
        <div>
            <h3>{user.name}</h3>
            <p>Age: {user.age}</p>
            <p>{isOnline? '🟢 Online' : '🔴 Offline' }</p>
        </div>
    );
}