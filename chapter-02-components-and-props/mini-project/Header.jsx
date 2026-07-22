function Header() {
  return (
    <header className="bg-gradient-to-br from-indigo-700 via-purple-600 to-pink-500 text-white p-10 rounded-2xl shadow-2xl mb-10">
      <div className="flex items-center gap-5">
        <div className="bg-white/20 p-4 rounded-2xl">
          <span className="text-6xl">📚</span>
        </div>
        <div>
          <h1 className="text-5xl font-extrabold tracking-tight">BookNest</h1>
          <p className="text-indigo-100 mt-2 text-lg font-light">
            Discover, Track & Enjoy Your Favorite Books
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;