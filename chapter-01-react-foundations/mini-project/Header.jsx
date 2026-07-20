function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-xl shadow-lg mb-8">
      <div className="flex items-center gap-4">
        <span className="text-5xl">📚</span>
        <div>
          <h1 className="text-4xl font-bold">BookNest</h1>
          <p className="text-purple-100 mt-1 text-lg">Your Personal Digital Library</p>
        </div>
      </div>
    </header>
  );
}

export default Header;